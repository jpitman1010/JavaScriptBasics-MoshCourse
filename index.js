//exercise - Movies

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

//all the movies from 2018 with rating > 4;
//sort by rating in descending order (higher score first)
//show only their title:
//result should be: 
// 'b'
// 'a'


function movieRating(movies) {
    let movieList = []
    for (movie of movies) {
        if (movie.year === 2018 && movie.rating >= 4)
            movieList.push(movie.title);
    }
    
    movieList.sort(function(current, next) {
        if (current > next) 
            console.log(current);
            console.log(next);
    })
}


movieRating(movies);


//Mosh answer 

const titles = movies 
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log('Mosh\'s answer', titles);
        
        

