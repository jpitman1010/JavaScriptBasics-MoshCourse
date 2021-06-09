//The  this  keyword

// if function is a method in an object object, this references the object itself
//however
// if the function is outside of an object it is a global object 
 //which is the window object in browsers
//and  global object in Node


// this : references the object that is executing the current function
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.play();
//because play is a method within the object video, 'this' references the object itself.
//so when you console.log(this) it's output is the entire object.
//we can also add methods to the video object and 'this' will give the same object 
//only now it will include the new stop method:

video.stop = function() {
    console.log(this);
};

video.stop();


// _________________________________________________________________________



function playVideo() {
    console.log(this);
    //in node it is the global object, in web browser it is the window object
}

playVideo();

//now what if we did this as a constructor function instead?  

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b');
//instead of the window object, the new operator it creates a NEW object that is
//not attached to the window or global object.
//this will reference a new empty object in this case.

// ____________________________________________________________________________


const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.tag, tag);
            //you will keep getting undefined, and if you remove the .tag
            //and just console.log() the 'this', it will show that you are
            //actually referencing the window object with this.
            //because you are inside of a regular call-back function.
            //it is NOT a method in the video object!!
            //the only method we have in video2 is showTags(), the function within 
            //that method is not attached to window/global, but the function within 
            //the method is. 
            //the global object is executing the function.
            //to fix this see below, the forEach call back function has a second argument you
            //can use called thisArg
        });
    }
};

video2.showTags();


const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.tag, tag);
            console.log(this.title, tag);
        }, this);
    }
};

video3.showTags();

//not all call back functions allow for passing 'this' the same way, so next we'll learn
//how to change the value of 'this'
