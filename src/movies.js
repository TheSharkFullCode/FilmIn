
// import { pi } from "./data.js";
// console.log(`area:`+area(10));
// console.log(pi);

// console.log(movies[0]);
// console.log(movies[1]);

import { movies} from "./data.js";
// console.log(movies);   

// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = movies.map((getAllDirectors)=>getAllDirectors.director)
console.log(getAllDirectors);



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

    const repitDirectors = movies.filter((getAllDirectors)=> getAllDirectors.director ==  'Steven Spielberg')
    console.log(repitDirectors);

    

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const movieDrama = movies.filter((movie)=>movie.genre.includes('Drama'))
console.log(movieDrama);
const movieSpil = movieDrama.filter((movie)=>movie.director.includes('Steven Spielberg'))
console.log(movieSpil);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

const moviesScore = movies.map((movie)=> movie.score)
const newMedia = moviesScore.length;
const media = moviesScore.reduce((acc,curr)=> acc += curr);
console.log(media);
const long3 = media / newMedia;
console.log(long3.toFixed(2));
    
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaAverage = movies.map((dramaMovies)=> dramaMovies.genre)
console.warn(dramaAverage);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
    const orderAscendig = movies.sort((a,b)=> a-b)
    console.log(orderAscendig); 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
    const alfaNumber = movies.sort((title)=> movies.slice(title))
    console.log(alfaNumber);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


// BONUS - Iteration 8: Best yearly score average - Best yearly score average

