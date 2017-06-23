import axios from 'axios'


var api = {};

api.fetchPopularRepos = function (lang, numPerPage, curPage) {
	var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc&type=Repositories&per_page=' + numPerPage + '&page=' + curPage);

	return axios.get(encodedURI)
		.then(function (response) {
			return response.data.items;
		});

};

function getProfile(username) {
	return axios.get('https://api.github.com/users/' + username)
		.then(user => {
			return user.data
		})
}

function getRepos(username) {
	return axios.get('https://api.github.com/users/' + username + '/repos?per_page=100')
		.then(repos => {
			return repos.data;
		}).catch(err => {
			console.log('Repos get err', err);
			return {};
		})
}

function getStarCount(repos) {
	return repos.reduce((count, repo) => {
		return count + repo.stargazers_count;
	}, 0)
}

function calcScore(repos, profile) {
	var totalStars = getStarCount(repos);
	var followers = profile.followers * 2;
	return totalStars + followers;

}

function sortPlayers(players) {

	return players.sort((a, b) => {
		return b.totalScore - a.totalScore;
	});

}

api.battle = players => {
	return axios.all(players.map(api.fetchUserInfo))
		.then(sortPlayers)
};


api.fetchUserInfo = function (username) {
	return axios.all([
		getProfile(username),
		getRepos(username)
	])
		.then(response => {
			var repos = response[1];
			var profile = response[0];
			var totalScore = calcScore(repos, profile);
			profile.totalScore = totalScore;
			return profile;
		}).catch(err => {
			console.log('err', err);
			return {
				login: username + '   Not Found',
				avatar_url: "http://dl3.joxi.net/drive/2017/06/21/0014/3915/925515/15/b6937171bc.png",
				notFound: true
			};
		})

};


export default api;