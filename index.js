//exercise constructor functions

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'author1', body: 'body1'},
        {author: 'author2', body: 'body2'}
    ],
    isLive: true
};

//create a constructor function to create a post object
//user is drafting a post but it has not been published yet.


//my answer:
function CreatePost(title, body, author, views, comments, isLive) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments;
    this.isLive = isLive;
}

const post1 = new CreatePost('a', 'b', 'c', 0, ['author1', 'body1'], false);
console.log(post1);


//Mosh answer:

function Post(title, body, author) {
    //don't use views as parameter cause that is automatically zero for creation of post
    //don't use comments as parameter because it is not posted so cannot have comments
    //don't use isLive as parameter because it will be set to false initially.
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let postMosh = new Post('a','b','c');

console.log(postMosh);