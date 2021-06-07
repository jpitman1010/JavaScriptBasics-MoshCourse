//Arrays - Spread Operator

const first  = [1, 2, 3];
const second = [4, 5, 6];

//cleaner and more flexible to concatinate the arrays using spread operator

const combined = [...first, ...second];

console.log(combined);

const combinedAddingTo = [...first, 'a', ...second, 'b'];

console.log(combinedAddingTo);

const copy = [...combined];

console.log(copy);
