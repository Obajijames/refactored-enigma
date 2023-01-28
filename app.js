let age = prompt ('To Know Long You Have Until 90 Years, Kindly Type In Your Age')
let ageInDays = (age - 90)*-365;
let ageInWeeks = (age - 90)*-52;
let ageInMonths = (age - 90)*-12;

function lifeInWeeks(age){
    alert ('You have ' + ageInDays + ' days, ' + ageInWeeks + ' weeks, ' + 'and ' + ageInMonths + ' months left.' );
}

lifeInWeeks()
