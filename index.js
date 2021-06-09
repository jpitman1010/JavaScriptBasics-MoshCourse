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
            console.log(this.title, tag);
        }, this);
    }
};

video3.showTags();

//not all call back functions allow for passing 'this' the same way, so next we'll learn
//how to change the value of 'this'


//DO NOT USE THIS APPROACH, it is just being shown to understand what is happening
//when others use it!!!
const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        //to change the value of this, call it self or that (is what most call it)
        // const that = this;
        const self = this;
        //the value of 'this' changes when a new function is called
        //this 'this' references the method within the object,
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
            //but this 'this'/'self' references the global/window object.
        });
    }
};

video4.showTags();





function playVideo() {
    console.log(this);
}

//this function is technically an object, so has many built in  properties 
// and methods that can be utilized.

playVideo.call({ name: 'Julie' }, 1, 2, 3);
//this now references the object passed into the 'call' method

//but if we just call the function playVideo, you will see it references the window/global
//object.

playVideo();

//apply method works similar to call method, but if you pass multiple arguments they
//must be passed in an array
playVideo.apply({ name: 'AnotherName' }, [1, 2, 3]);
const bindingExample = playVideo.bind({ name: 'Julie' }); //this does not call the playVideo function, 
//it binds the calling of that function to the object being passed through
//so you will always get it referenced to this new object
console.log(bindingExample()); //you would call bindingExample like a regular function
//and see how it now references 'this' as the new object (if you console.log(bindingExample)
//without the (), it will show that it is binded to the playVideo(), but this is now referencing the 
//object passed using the bind method)
console.log(bindingExample);

//in this case, you don't need to set bindingExample const, you can just immediately call the 
//method like this:

playVideo.bind({ name: 'Mosh' })();
//and immediately the playVideo() console.log of this, will be referenced to this new 
//object being passed through bind.



// _____________________________________________________________________________

//you can impliment the bind method right away within the function that is 
//inside of the method showTags() that is inside of the video5 object, and bind
// simply 'this' , (but there is a newer and better solution below this ex.)


const video5 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
};

video5.showTags();

// ______________________________________________________________________________
//newer and better solution using arrow functions, because they inherit the 'this' value:

const video6 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video6.showTags();

//you get the same results as bind without all the extra work, the reason for this is
//is because arrow functions inherit 'this' from the containing function, it is not 
//rebound into a new object.

//3 ways to fix the 'this' issue:

// 1. self
// 2. bind
// 3. arrow function *****