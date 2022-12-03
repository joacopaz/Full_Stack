# Server-side JS

Running `node` opens REPL (Read-Eval-Print Loop) for node

To get nodejs intellisense `npm install @types/node;`

## REPL

### process object

#### process.stdin

We can also receive input from a user through the terminal using the stdin.on() method on the process object. We can use .on because it's an instance of an Event Emitter.

The userInput we receive is an instance of the Node Buffer class, so we convert it to a string before printing.

You can exit with process.exit()

stdin runs on 'data'

```
process.stdin.on("data", (userInput) => {
	const input = userInput.toString().trim(); // toString to get string of buffer and trim to remove the new line
	if (input === "y") console.log("YES!");
	process.exit();
});

});
```

#### process.env

The `process.env` property is an object which stores and controls information about the environment in which the process is currently running.

For example you could change a variable there so the program makes something different according to the environment it's being run on.
`process.env.NODE_ENV = 'development'`

```

if (process.env.NODE_ENV === 'development'){
  console.log('Testing! Testing! Does everything work?');
}

```

#### process.memoryUsage()

The `process.memoryUsage()` returns information on the CPU demands of the current process

`process.memoryUsage().heapUsed` shows how many bytes of memory the current process is using

#### process.argv

`process.argv` holds an array of command line values provided, 0 is the abs path to node, 1 is the path to the file running and from 2 onwards are the added args

`node app.js hello world` would hold `process.argv[2]` hello and `process.argv[3]` world

### os module

This module has to be imported

`const os = require('os')`

- `.type() `returns computer OS,
- `os.arch()` the operating system cpu architecture,
- `networkInterfaces()` returns network interfaces (IP and MAC address),
- `homedir()` the user's home directory,
- `hostname()` to return the hostname,
- `uptime()` to return the system uptime

### util module

`const util = require('util')`

- `.types.${type}` checks for type validity `const date = new Date(); util.type.isDate(date)` returns true
- `.promisify()` turns callback functions into promises

```

function getUser (id, callback) {
  return setTimeout(() => {
    if (id === 5) {
      callback(null, { nickname: 'Teddy' })
    } else {
      callback(new Error('User not found'))
    }
  }, 1000)
}

const getUserPromise = util.promisify(getUser);

getUserPromise(id)
  .then((user) => {
      console.log(`User found! Their nickname is: ${user.nickname}`);
  })
  .catch((error) => {
      console.log('User not found', error);
  });

getUser(1) // -> `User not found`
getUser(5) // -> `User found! Their nickname is: Teddy`

```

### events module

`const events = require('events')`

- `const emitter = new events.EventEmitter()` can operate events
- `emitter.on(event, callback)` assigns listener to event and runs callback
- `emitter.emit()` announces that a named event has occurred

```

const newUserListener = (data) => {
  console.log(`We have a new user: ${data}.`);
};

// Assign the newUserListener function as the listener callback for 'new user' events
myEmitter.on('new user', newUserListener)

// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad') //newUserListener will be invoked with 'Lily Pad'

```

### buffers

A Buffer object represents a fixed amount of memory that can’t be resized.

```

// Buffer objects are used to handle binary data
const buffer = Buffer.from('Hello World');
console.log(buffer); // Output: [104, 101, 108, 108, 111]
console.log(buffer.toString());

```

- `.alloc()` creates a new buffer object with the size specified as the first parameter. Params - Size: Required. The size of the buffer
  Fill: Optional. A value to fill the buffer with. Default is 0.
  Encoding: Optional. Default is UTF-8.

- `.toString()` translates the Buffer object into a human-readable string. It accepts three optional arguments: Encoding: Default is UTF-8, Start: The byte offset to begin translating in the Buffer object. Default is 0. End: The byte offset to end translating in the Buffer object. Default is the length of the buffer.

- `.from()` creates a new buffer from an object. Arguments: object (required) and encoding (optional, default 'utf-8')

- `.concat()` joins buffers. Args: an array of buffer objects (required), length (optional, specifies the length of the concatenated buffer)

### timer module

- `setImmediate()` runs immediately after the current poll phase finishes. Accepts 2 args: callback function (required) and args for callback. If multiple setImmediate() they will run in order queued

```

setImmediate(() => {
console.log('Welcome to Node.js');
});

```

### error module

standard JavaScript errors such as `EvalError` `SyntaxError`, `RangeError`, `ReferenceError`, `TypeError`, and `URIError` as well as the JavaScript Error class for creating new error

We use error first callbacks for async functions most of the times to first check if there was an error

```

const errorFirstCallback = (err, data)  => {
  if (err) {
    console.log(`There WAS an error: ${err}`);
  } else {
    // err was falsy
    console.log(`There was NO error. Event data: ${data}`);
  }
}

```

### fs module

`const fs = require('fs')`

Used for interacting with the file system

```

const readDataCallback = (err, data) => {
if (err) {
console.log(`Something went wrong: ${err}`);
} else {
console.log(`Provided file contained: ${data}`);
}
};

// file.txt file is loaded using the readFile method of the fs module
fs.readFile('./file.txt', 'utf-8', readDataCallback);

```

- `readFile()` gets the data of the file, it takes 3 args: string to path (required), string for character encoding (usually 'utf-8', required) and an optional callback function to run after the async readFile has ended, it will pass the contents of the file as a second arg to the callback

### readline module - integrated with fs

data isn’t processed all at once but rather sequentially, piece by piece, in what is known as a `stream`.One of the simplest uses of streams is reading and writing to files line-by-line. To read files line-by-line, we can use the `.createInterface()` method from the readline core module.it returns an EventEmitter set up to emit 'line' events and passes the data as first param to the callback

```
const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('text.txt')
});

myInterface.on('line', (fileLine) => {
  console.log(`The line read: ${fileLine}`);
});

```

To write streams we can use `fs.createWriteStream()`, since it's an open stream it must be ended with `.end()`

```
const fs = require('fs')
const fileStream = fs.createWriteStream('output.txt');

fileStream.write('This is the first line!');
fileStream.write('This is the second line!');
fileStream.end();
```
