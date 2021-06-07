//mapping an array

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>');

console.log(items);

const html = '<ul>' + items.join(' ') + '</ul>';

console.log(html);


// can also map to objects:

const items2 = filtered.map(n => {
    return { value: n };
});

console.log(items2);

//can also use chaining:

const chaining  = numbers.filter(n => n >=0).map(n => ({ value: n}) );

console.log(chaining);

//when chaining multiple methods, by convention should actually put each method call 
// on a separate line to make the code cleaner:

const chaining2  = numbers
    .filter(n => n >=0)
    .map(n => ({ value: n}) )
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(chaining2);