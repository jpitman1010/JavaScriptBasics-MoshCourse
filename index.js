//Ternary (conditional) Operator

//if a customer has more than 100 points, 
//they are a 'gold customer, otherwise,
//they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

//by adding the ? at the end of the condition statement,
//it will take the true false answer that is returned (is points greater than 100)
//and then by putting 'gold' : 'silver' it is stating that if  true  is returned
//then type === 'gold, if false type === 'silver

console.log(type); //resul;ts in gold

//if you change the points to = 90, then you would get output of silver from console.log(type)


