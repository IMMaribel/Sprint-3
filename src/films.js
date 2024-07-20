// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let moviesFromDirector = array.filter(movie => movie.director == director);
 console.log("EXERCICE 2 ->", moviesFromDirector);
 return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = array.filter(movie => movie.director == director);
  let moviesAverage = moviesFromDirector.reduce((accumulator, movie) => accumulator + movie.score, 0);
  let totalScore = moviesAverage / moviesFromDirector.length;
  let result = Math.round(totalScore * 100) / 100;
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let copiedArray = array.slice();
  let alphabeticalMovies = copiedArray.sort((a, b) => a.title.localeCompare(b.title));
  let titles = alphabeticalMovies.map(movie => movie.title);
  let result = titles.slice(0, 20);
  console.log("EXERCIRCE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let copiedArray = array.slice();
  let yearMovies = copiedArray.sort((a, b) => {
    if (a.year - b.year){
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
  
  console.log("EXERCIRCE 5 ->", yearMovies);
  return yearMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesByGenre = array.filter(movie => movie.genre.includes(genre));
  let totalScore = moviesByGenre.reduce((sum, movie) => sum + movie.score, 0);
  let averageScore = totalScore / moviesByGenre.length;
  console.log("EXERCICE 6 ->", averageScore);
  return parseFloat(averageScore.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let copiedArray = array.map(movie => ({ ...movie }));
    copiedArray.forEach(movie => {
    let totalMinutes = 0;
        const hoursMatch = movie.duration.match(/(\d+)h/);
    if (hoursMatch) {
      totalMinutes += parseInt(hoursMatch[1]) * 60;
    }
    const minutesMatch = movie.duration.match(/(\d+)min/);
    if (minutesMatch) {
      totalMinutes += parseInt(minutesMatch[1]);
    }
    movie.duration = totalMinutes;
  });

  console.log("EXERCICE 7 ->", copiedArray);
  return copiedArray;
  };


// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const moviesOfYear = movies.filter(movie => movie.year === year);
  const bestMovie = moviesOfYear.reduce((best, current) => {
    return (current.score > best.score) ? current : best;
  }, moviesOfYear[0]);
  console.log("EXERCICE 8 ->", bestMovie);
  return [bestMovie];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
