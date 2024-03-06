// EXAMPLE 1 - Subtract Months from a Date in JavaScript

function subtractMonths(date, months) {
  date.setMonth(date.getMonth() - months);

  return date;
}

// ✅ Subtract 1 month from the current Date
const result1 = subtractMonths(new Date(), 1);
console.log(result1); //👉️ 2023-06-27T12:04:29.782Z

// ✅ Subtract 2 months from a different date
const date = new Date('2024-09-15T13:24:15.000Z');
const result2 = subtractMonths(date, 2);
console.log(result2); // 👉️ 2024-07-15T13:24:15.000Z

// ------------------------------------------------------------------

// // EXAMPLE 2 - Subtract Months from a Date without mutation

// function subtractMonths(date, months) {
//   const dateCopy = new Date(date);

//   dateCopy.setMonth(dateCopy.getMonth() - months);

//   return dateCopy;
// }

// const date = new Date('2024-09-15T13:24:15.000Z');
// const result = subtractMonths(date, 2);
// console.log(result); // 👉️ 2024-07-15T13:24:15.000Z

// console.log(date); // 👉️ 2024-09-15T13:24:15.000Z

// ------------------------------------------------------------------

// // EXAMPLE 3 - Subtract Months from a Date using date-fns

// import {subMonths} from 'date-fns';

// const date = new Date('2024-09-15T13:24:15.000Z');

// const result1 = subMonths(date, 3);
// console.log(result1); // 👉️ 2024-06-15T13:24:15.000Z

// const result2 = subMonths(date, 6);
// console.log(result2); // 👉️ 2024-03-15T14:24:15.000Z

// console.log(date); // 👉️ 2024-09-15T13:24:15.000Z

// ------------------------------------------------------------------

// // EXAMPLE 4 - Subtract Months from a Date using moment.js

// import moment from 'moment';

// const date = new Date('2024-09-15T13:24:15.000Z');

// const result1 = moment(date).subtract(3, 'months');
// console.log(result1); // 👉️ 2024-06-15T13:24:15.000Z

// const result2 = moment(date).subtract(6, 'months');
// console.log(result2); // 👉️ 2024-03-15T14:24:15.000Z

// console.log(date); // 👉️ 2024-09-15T13:24:15.000Z
