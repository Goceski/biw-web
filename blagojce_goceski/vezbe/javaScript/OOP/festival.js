'use strict';

(function() {
    console.log("Hi");

    // constructor function Genre
    function Genre (name) {
        this.name = name;
        this.getData = function() {
            var formatName = this.name[0].toUpperCase() + this.name[this.name.length-1].toUpperCase();
            return formatName;
        }    
    }


    // constructor function Movie
    function Movie (title, genre, length) {
        this.title = title;
        this.genre = new Genre(genre);
        this.length = length;
        this.getData = function() {
            return `${title}, ${length}min, ${this.genre.getData()}`;
        }
    }


    // constructor function Program
    function Program (date) {
        this.date = new Date(date).toLocaleDateString('en-US');
        this.listOfMovies = [];
        this.totalNumberOfMovies = function() {
            // var totalNumberOfMovies = 0;
            // for (let i = 0; i < this.listOfMovies.length; i++) {
            //     totalNumberOfMovies++;
            // }
            // return totalNumberOfMovies;
            return this.listOfMovies.length;
        };
        this.addMovie = function(input) {
            this.listOfMovies.push(input);
            return this.listOfMovies;
        };
        this.getData = function() {
            var duration = 0;
            for (let i = 0; i < this.listOfMovies.length; i++) {
                duration+= this.listOfMovies[i].length;
            }

            var filmovi = '';
            for (let i = 0; i < this.listOfMovies.length; i++) {
                filmovi+= `\n\t\t\t\t\t\t${this.listOfMovies[i].getData()}`;
            }

            return `\t${this.date}, program length: ${duration}min ${filmovi}`;
        };
    }
    

    // constructor function Festival
    function Festival (name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfMoviesInAllPrograms = function() {
            var totalNumber = 0;
            for (let i = 0; i < this.listOfPrograms.length; i++) {
                totalNumber += this.listOfPrograms[i].listOfMovies.length;
            }
            return totalNumber;          
        };
        this.addProgram = function(input) {
            this.listOfPrograms.push(input);
            return this.listOfPrograms;
        };
        this.getData = function() {
            var festival = '';
            for (let i = 0; i < this.listOfPrograms.length; i++) {
                festival += `\n\t\t${this.listOfPrograms[i].getData()}`;
            }

            return `\tFestival '${this.name}' has ${this.numberOfMoviesInAllPrograms()} movie titles ${festival}`;
        };
    }

    console.log(Movie);

    // funkcija za kreiranje filmova
    function createMovie() {
        return console.log(Movie);
        // return new Movie(input);
    }

    
    // inicijalizacija 'Filmova'
    // var film1 = createMovie('Rambo', 'Action', 130);
    var film1 = new Movie('Rambo', 'Action', 130);
    console.log(film1.getData());
    var film2 = new Movie('Avatar', 'SciFi', 120);
    console.log(film2.getData());
    var film3 = new Movie('Pleasure', 'Drama', 90);
    console.log(film1.getData());
    var film4 = new Movie('Lionking', 'Cartoon', 75);
    console.log(film4.getData());

    createMovie();



    // inicijalizacija 'Programa'
    var program1 = new Program('3/25/2023');
    var program2 = new Program('3/27/2023');


    // ubacivanje filmova u 'Program'
    program1.addMovie(film1);
    program1.addMovie(film2);
    program2.addMovie(film3);
    program2.addMovie(film4);
    console.log(program1);
    console.log(program2);
    console.log(program1.totalNumberOfMovies());
    console.log(program2.totalNumberOfMovies());

    // inicijalizacija 'Festivala'
    var festival = new Festival('Zimsko Blejanje');
    festival.addProgram(program1);
    festival.addProgram(program2);
    console.log(festival);

    // prikaz programa 'Festivala'
    console.log(festival.getData());
    


})();




