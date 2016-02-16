'use strict'
$(function(){   

    $('html').keydown(function(e){
        if(event.keyCode == 13)
        {
            e.preventDefault();
            getData(0);
        }
    });
    $('.searchButton').on('click', function(){
      getData(0)   
    })  
});

    var element;
    var count = 0;

    function getData(next){
        var text = $('#text').val();
        $.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=8&start=" + next + "&q='"+text+"'&callback=GoogleCallback&context=?");      
    }
    function GoogleCallback (func, data) {
        $('.search').remove();
        $('.nav').remove();
        element = data;
        var tmpl = _.template($('#test').html());
        var result = tmpl(element);
        $('body').append(result);

        $('.nav__item').css("color", "red");
        $('.nav__item')[count].style.color = "blue";
    }
    function showSearch(index){
        count = index;
        $('.nav').remove();
        $('.search').remove();
        getData(index*6);
    }


// Ptototype

function human(){
    this.name   = 'name';
    this.age    = 0;
    this.sex    = 'sex';
    this.height = 0;
    this.weight = 0;
}

   function student(){
    this.studyPlace     = 'KPI';
    this.money    = 1500;
    this.watchSerials = function(){
        return 'Walking Dead online';
    };
}

function worker(){
    this.salary     = 15000;
    this.company    = 'Luxoft';
    this.work = function(){
        return 'Working .... !!!';
    };
}


var newHuman = new human();
student.prototype = newHuman;
worker.prototype = newHuman;


var newStudent = new student();
var newWorker = new worker();

    newWorker.name      = 'Nick';
    newWorker.age       = 32;
    newWorker.sex       = "male";
    newWorker.height    = 163;
    newWorker.weight    = 70;

    newStudent.name = "Natali";
    newStudent.age  = 21;
    newStudent.sex  = "female";
    newStudent.height = 170;
    newStudent.weight = 95;


    console.log('Worker:',newWorker.name,
                 "age:", newWorker.age,
                 "sex:", newWorker.sex,
                 "height:", newWorker.height,
                 "weight:", newWorker.weight);

    console.log(newWorker.name,newWorker.work()); 
    

    console.log('Student:',newStudent.name,
                 "age:", newStudent.age,
                 "sex:", newStudent.sex,
                 "height:", newStudent.height,
                 "weight:", newStudent.weight);

    console.log(newStudent.name,newStudent.watchSerials()); 
