const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const _module_ = require('module')


//COMPARING
// 1. console.log(process.argv) process is an object and argv is a property of it that holds our arguments. The process object can be accessed from anywhere.
    // it is an instance of EventEmitter. Each Node.js has a set of built-in functionality, accessible through the global process object. 
    // The process object provides the standard input/output (stdio) streams stdin, stdout and stderr (as in C/C++) as in the following:
        // stdin: a readable stream for reading input from the user.
        // stdout: a writable stream, either synchrously or asynchronously.
        // stderr: a blocking synchronous writable stream intended for error messages.
     // The stdout or non-blocking function are: console.log, console.info, util.puts, util.print and Stderr. The blocking funcitons are: 
        // console.warn, console.error, util.debug and process.stdin (a readable stream for getting user input).

// 2. const command = process.argv[2] //our commands passed in the terminal are in the 3rd position
// 3. console.log(yargs.argv) yargs parses process.argv to be more functional and easier to work with

// let arg_v = process.argv[3]
// const parse_arg = (args) => {
//     let halt = args.indexOf('=') + 1
//     let length_of = args.length
//     let parsed = args.slice(halt, length_of)
//     console.log(parsed)
// }
// parse_arg(arg_v)


// Customize yargs version
yargs.version('1.1.0')

//console.log(typeof yargs.argv);


// Creating add command by adding it to the yargs command method
// We pass an object as the argument. This object is our options objects where we can customize how it works
yargs.command({
    command: 'add',
    describe: 'Add a new note!',

    // setting up another property on the configuartion object we pass to command. This property is called builder. 
    // Builders value is an object; on the object, we define all the options (title, body) we want this given command to support.
    // if we want to provide a title when we run the 'add' command from the terminal, we can setup title in builder
    //  Use builder whenever you want to provide information on a specific command. In this case the 'add' command
    builder: {
        title: {
            describe: 'Note title', // this is considered our option
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Synopsis',
            demandOption: true,
            type: 'string'
        }
    },
    
    // 1. This function gets called when we pass the command 'add' with our option defined above 
    // 2. Your argv object is passed as the argument when you use the handler method, so you can get access to it. 
    //    Its just what yargs passes the handler when it's called; you get access to any command line arguments that were passed in 
    //    along with the command (like add, remove, list) and the command line argument (like title and body). 
    //    You can name the argument in the function anything you want. ie argv in the function arguments 
    //    can be called 'poop' and as long as you use poop.title etc,it will work. Where ever the handler method is located, the template 
    //    must be targeting the argv array, so you are passing 
    // 3. When the Yargs 'command' function (yargs.command) is executed, the handler function, will be executed 
    //    with the parsed argv object. Remember, argv is located on the process object. 
    handler (argv) {
        notes.addNote(argv.title, argv.body) // argv.title and argv.body are equal to the string you pass in the command line when adding a note; or removing
                                             // these strings are then passed as the values over to the notes.addNote function, located in notes.js module
    } 
})

// Remove note
yargs.command({
    command: 'remove',
    describe: 'Removing note!',
    builder: {
        title: {
            describe: 'Note title you are removing',
            demandOption: true,
            type: 'string'
        }
    },
    // This function gets called when we padd the command 'remove'
    handler (argv) {
        notes.removeNote(argv.title, argv.body)
    }
})

// List notes
yargs.command({
    command: 'list',
    describe: 'Listing note',
    // This function gets called when we padd the command 'list'
    handler () {
        notes.listNote()
    }
})

// Read note
yargs.command({
    command: 'read',
    describe: 'Reading note',
    builder: {
        title: {
            description: 'title',
            demandOption: true,
            type: 'string'
        }
    },
    // This function gets called when we padd the command 'read'
    handler (argv) {
        notes.read_note(argv.title)
    }
})

yargs.parse()