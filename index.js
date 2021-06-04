//Exercise: String Porperties:
//create a function called showProperties(obj) and it should
//show all properties of the object that are type of string

//my answer
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) 
        if (typeof(obj[key]) === 'string')
            console.log(key, obj[key]);
}

//Mosh Answer

showPropertiesMosh(movie);

function showPropertiesMosh(obj) {
    for (let key in obj) 
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}

//difference is that I put my typeof into () and it wasn't needed
