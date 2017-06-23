import React, {Component} from 'react';
import './Popular.css';
import PropTypes from 'prop-types'
import Loading from './Loading';
import api from '../utils/api.js';
import InfiniteScroll from 'react-infinite-scroll-component';


function SelectLanguage(props) {
	const languages = ['All', 'Java', 'JavaScript', 'Python', 'Ruby', 'CSS'];
	return (
		<div>
			<ul className="lang-select-wrapper">
				{languages.map(function (lang) {
					return (
						<li
							style={ lang === props.selectedLang ? {color:'#fd6767'} : null}
							onClick={props.updateLang.bind(null, lang)}
							key={lang} className="lang-select-item">
							{lang}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

function RepoGrid(props) {
	return (
		<div>
			<ul className='popular-list'>
				{props.repos.map(function (repo, index) {
					return (
						<li key={index} className='popular-item'>
							<div className='popular-rank'> #{index + 1}</div>
							<ul className='space-list-items'>
								<li>
									<img
										className='avatar'
										src={repo.owner.avatar_url}
										alt={'Avatar for ' + repo.owner.login}
									/>
								</li>
								<li><a href={repo.html_url}>{repo.name}</a></li>
								<li className="popular-name">@{repo.owner.login}</li>
								<li>{repo.stargazers_count} stars</li>
							</ul>
						</li>
					)
				})}
			</ul>
		</div>

	)
}


class Popular extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeLang: 'All',
			repos: null,
			currentPage: 1
		};

		this.updateLang = this.updateLang.bind(this);
		this.fetchNewDataOnScroll = this.fetchNewDataOnScroll.bind(this);
	}


	componentDidMount() {
		this.updateLang(this.state.activeLang);
	}


	updateLang = function (lang) {
		this.setState(function () {
			return {
				activeLang: lang,
				repos: null,
				currentPage: 1
			}
		});


		api.fetchPopularRepos(lang, 30, 1)
			.then((repos) => {
				this.setState(function () {
					return {
						repos: repos
					}
				})
			});
	};

	fetchNewDataOnScroll = function () {

		api.fetchPopularRepos(this.state.activeLang, 30, this.state.currentPage + 1)
			.then((nextRepos) => {
				this.setState(function () {
					var newRepos = this.state.repos.concat(nextRepos);
					var newCurrentPage = this.state.currentPage + 1;
					return {
						repos: newRepos,
						currentPage: newCurrentPage
					}
				})
			});
	};

	refresh = function () {

	};


	render() {


		return (
			<div>
				<SelectLanguage
					selectedLang={this.state.activeLang}
					updateLang={this.updateLang}
				/>
				{!this.state.repos ? <Loading /> :
					<InfiniteScroll
						pullDownToRefresh
						pullDownToRefreshContent={<span />}
						releaseToRefreshContent={<span />}
						refreshFunction={this.refresh}
						next={this.fetchNewDataOnScroll}
						hasMore={true}
						loader={<h4 className="loading-more">Loading...</h4>}
						endMessage={
				<p style={{textAlign: 'center'}}>
				  <b>Yay! You have seen it all</b>
				</p>
			  }>
						< RepoGrid repos={this.state.repos}/>
					</InfiniteScroll>
				}
			</div>
		)
	}
}

SelectLanguage.propTypes = {
	selectedLang: PropTypes.string.isRequired,
	updateLang: PropTypes.func.isRequired
};

RepoGrid.propTypes = {
	repos: PropTypes.array.isRequired
};

export default Popular;