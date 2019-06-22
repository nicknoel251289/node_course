const fs = require('fs')
const chalk = require('chalk')

/////// ADD NOTE ///////
const addNote = (title, body) => {

    // 1. Everytime we add a note, we will call the loadNotes function so we can grab older notes that 
    // 2. are saved on the file, parse it, update the file with the new note, change it back to a string
    //    and save the file again. The loadNotes function will get current notes if there are any
    // 3. Notes becomes an array object because the return value of loadNotes is an array
    const notes = loadNotes()

    // 1. We access each note in the notes array via the first argument in the function that 
    //    the fileter method takes. Here we use 'note'. Each time the function runs note will equal
    //    the next item in the notes array. First it starts with 0 index then, 1, and so on.
    // 2. Each time the condition returns true (a duplicate note), the duplicateNote array will be 
    //    populated with the duplicate
    // 3. if note.title equals title (passed in addNote argument)
    const duplicateNotes = notes.find((note) => note.title === title) 

    //debugger

    // 1. If duplicateNotes length is equal to 0, then the above condition was never met and there are
    //    no duplicate notes, therefore we should add the new one
    if(!duplicateNotes){

        // 1. This will take the new note that is being added, and add it to the notes array object
        notes.push({
            title: title,
            body: body
        })

        // 1. This will save the note by changing the object back into a string and onto the notes.json file
        saveNotes(notes)

        console.log('New note was added')
    }else{
        console.log('This note is a duplicate');  
    }

}



//////// REMOVE NOTE ///////
const removeNote = (title) => {
    const notes = loadNotes()

    // 1. We filter through the notes array and find any note that isn't equal to the one we passed with the 
    //    remove command
    // 2. If we find a note with a title equal to the one we want to remove, it does not get added into the 
    //    keepNotes array and is simply skipped over. By the end, the keepNotes array only contains notes NOT being
    //    removed.
    const keepNotes = notes.filter((note) => note.title != title)

    if(keepNotes.length === notes.length){
        console.log(chalk.bgRed.bold('The title entered does not match any currently saved notes!'));
    }else{
        console.log(chalk.bgGreen.bold('Your note was removed!'));
        saveNotes(keepNotes)
    }

}

//////// LIST NOTES ////////
const listNote = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(chalk.green.bold("These are your notes: " + note.title));
    });
}



//////// READ NOTE ////////
const read_note = (title) => {
    const notes = loadNotes()
    const read = notes.find((note) => note.title === title) 
    if(!read){
        console.log(chalk.red.bold("Error. No note found"));
    } else {
        console.log("Your title is: " + chalk.green.bold(read.title))
        console.log("The body is: " + chalk.blue.bold(read.body));
        
    }
}



/////// SAVING NOTE ///////
// 1. takes the array as an argument
// 2. When you want to save data, you take an object or an array, we use JSON stringify 
//    and then write it to the file system 
const saveNotes = (notes) => { 

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}



/////// LOADING NOTES ///////
//Load current notes or create new array if none currently exist.
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer)
    } catch (e) {  //catch takes an argument that has access to the errors object
        return []; // the return value converts the function to an array
    }
}



/////// EXPORTING FUNCTIONS TO BE USED BY OTHER FILES ///////
// Adding these properties to the Exports property on the module object (aka our current file notes.js).
// Exports, although a property of module, is also an object that takes properties 
module.exports = {
    addNote,
    removeNote,
    listNote,
    read_note
}
