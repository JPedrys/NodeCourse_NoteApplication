const chalk = require('chalk');
const yargs = require('yargs');
const noteUtils = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

//create add command
yargs.command(
{
    command: 'add',
    describe: 'Add a new note',
    builder: 
    {
        title: 
        {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }, 
        body: 
        {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) 
    {
        noteUtils.addNote(argv.title, argv.body);
    }

})

//create remove command
yargs.command(
{
    command: 'remove',
    describe: 'Remove a note',
    builder:
    {
        title:
        {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) 
    {
        noteUtils.removeNote(argv.title);
    }
})

//create read command
yargs.command(
{
    command: 'read',
    describe: 'Reads a note',
    builder:
    {
        title:
        {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) 
    {
        noteUtils.readNote(argv.title);
    }
})

//create list
yargs.command(
{
    command: 'list',
    describe: 'Lists the notes',
    handler() 
    {
        noteUtils.listNotes();
    }
})

// add, remove, read, and list notes

yargs.parse();