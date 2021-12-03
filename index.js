const moment = require('moment');

// Current date and time on local formate
// console.log(moment());
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// console.log(`toString: ${moment().toString()}`);
// console.log(`toISOstring: ${moment().toISOString()}`);

// Create from ISO 8601 string

// let m = moment('2019-01-01T00:00:00.000Z');
// console.log(m);

// let m1 = moment('04/06/2019 4:50PM', 'DD/MM/YYYY hh:mmA');
// console.log('m1', m1.toString());

// console.log(m1.format('DD MMMM YYYY, hh:mm a'));

// Getters and setters
// let m2 = moment();
// console.log(m2.toString());
// console.log(m2.minutes()); // get minutes
// console.log(m2.hours()); // get hours
// console.log(m2.date()); // get date

// setting units
// console.log(m2.hours(6)); // set hours
// console.log(m2.minutes(50)); // set hours
// console.log(m2.set('day', 4).toString()); // set day
// console.log(m2.set({ day: 6, hours: 6, minutes: 50 }).toString()); // set day and hours and minutes

// min and max for given set of units
// console.log(moment.max(m1, m2).toString());
// console.log(moment.min(m1, m2).toString());

// adding, subtracting and manipulating units
// const m3 = moment();

// console.log(`Original Moment: ${m3.toString()}`);
// m3.add(4, 'h'); // add 4 hours m3.add(4, 'hours');
// m3.add(10, 'm').add(4, 'hours'); // add 10 minutes
// m3.add({ days: 5, hours: 5 }); // add 5 days and 5 hours
// m3.subtract({ days: 1, hours: 5 }); // subtract 5 days and 5 hours
// m3.startOf('year'); // set to start of the year
// m3.endOf('year'); // set to end of the year

// m3.utc(); // set to UTC
// m3.local(); // set to local

// console.log(m3.utcOffset()); // get UTC offset

// console.log(`After Manipulation: ${m3.toString()}`);
// console.log(`After ManipulationIsoFormat: ${m3.toISOString()}`);

//formate date methods
const m4 = moment();
const m5 = moment('2019-01-03');
// m4.locale('en-au');

// console.log(m4.toString());
// console.log(m4.format('dddd MMMM Do YYYY, h:mm'));
// console.log(m4.format('[Today date is: ] DD dddd MMMM YYYY'));

// console.log(m4.format('L'));

// console.log(m5.fromNow());
// console.log(m5.from('2021-01-01'));

// const eventMove = moment().add(1, 'days').add(5, 'hours');
// console.log(eventMove.toString());
// console.log(eventMove.calendar());
// console.log(m4.daysInMonth());

// console.log(JSON.stringify(m4.toJSON()));

// m4.toJSON = function () {
//   return this.format('[Here is the date: ] DD dddd MMMM YYYY');
// };

// console.log(JSON.stringify(m4));
// console.log(m4.diff(m5, 'years'));
// console.log(m4.diff(m5, 'years', true));

//Quering the moment object with moment methods
console.log(m4.isSame(m5, 'day'));
console.log(
  moment('2019-06-04 15:35:32').isSame('2019-06-04 15:35:32', 'month')
);

//Duration
let duration;

duration = moment.duration(2, 'hours');

console.log(duration.humanize());
