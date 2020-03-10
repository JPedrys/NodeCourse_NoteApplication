const fs = require('fs');
const chalk = require('chalk');

//adds notes
const addNote = (title, body) =>
{
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title); //Checks to see if the title of the note a user is attempting to add is already in use.

    if (!duplicateNote)
    {
        notes.push(
            {
                title: title,
                body: body
            })
        saveNotes(notes);
        console.log(chalk.green.inverse("Sucessfully added a new note!"));
    }else 
    {
        console.log(chalk.red.inverse('Note title already exists.'));
    }
}

//removes notes
const removeNote = (title) =>
{
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title !== title); //Compiles an array of note objects to keep based on the title of the note the user specificed to remove


    if (notesToKeep.length === notes.length){
        console.log(chalk.red.inverse('A note with this title was not found.'));
    }else
    {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('The note was sucessfully removed.'));
    }
}

//lists the title of the notes stored
const listNotes = () =>
{
    const notes = loadNotes();

    console.log('A list of your notes: ')

    notes.forEach(note => console.log(note.title)); //Steps through the notes array and prints the title of each
}

const readNote = (noteTitle) =>
{
    const notes = loadNotes();

    const noteToRead = notes.find((note) => note.title === noteTitle);

    if (noteToRead)
    {
        console.log(noteToRead.title + ' ' + noteToRead.body);
    }else
    {
        console.log(chalk.red('This note does not exist'));
    }
}

//converts and saves note objects to the json file
const saveNotes = (notes) =>
{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

//attempts to find a note json file, parses the json data into JS, and then returns an array
const loadNotes = () =>
{
    try
    {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e)
    {
        return [];
    }
}

module.exports = 
{
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}