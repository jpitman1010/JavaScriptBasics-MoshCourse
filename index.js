//Switch and case

let role = 'guest';

// switch (variable) {
//     case statement
// }

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}

//can implement using if and else statements too.

if (role === 'guest') console.log('Guest User')
else if (role === 'moderator') console.log('Moderator User')
else console.log('Unknown User')