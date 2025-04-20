import { log } from 'console';
import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

// listen for the event
myEmitter.on('add_event', (a, b) => {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
})
// emit the event
myEmitter.emit('add_event', 5, 10); // The sum of 5 and 10 is 15

// listen for the event with a callback function
myEmitter.on("event_1", payload => log(payload));
console.log(myEmitter.emit("event_1", 'this is payload')); // 1


// listen for the event with a callback function and arguments
const authEmitter = new EventEmitter();
authEmitter.on("login", (user) => {
    console.log(`User ${user} logged in!`);
})
authEmitter.on("logout", (user) => {
    console.log(`User ${user} logged out!`);
})

authEmitter.emit("login", "John Doe"); // User John Doe logged in!
authEmitter.emit("logout", "John Doe"); // User John Doe logged out!

authEmitter.removeAllListeners("login");
authEmitter.removeAllListeners("logout");
authEmitter.emit("login", "John Doe"); // no output


