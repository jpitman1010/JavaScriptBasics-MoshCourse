//exercise Blog Post Object

//create an object literal syntax to create
// blog post object that has following properties:

    //title
    //body
    //author
    //views
    //comments
        //comments should have properties:
        //author
        //body
    //isLive
        //should have properties:
        //true
        //false


//my answer: 
function BlogPost() {
    for (key in blogPostObj) {
        console.log(blogPostObj[key])
    }
}

const blogPostObj = {
    title: 'Best Title Ever!', 
    body: 'This is about something.',
    author: 'Anonymous',
    views: 22,
    comments: {
        author: 'No Name Nancy',
        body: `I don't like that!`
    },
    isLive: true
    };

console.log(blogPostObj);

BlogPost();

//not sure I understood the exercise completely:

//Mosh answer:

let post  = {
    title: 'a',
    body: 'b',
    author: 'c',
    comments: [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'}
    ],
    isLive: true
};

console.log(post);
