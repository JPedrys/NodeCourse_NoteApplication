# NodeCourse_NoteApplication
This is a note taking application created with Node JS as practice from a Udemy course. This application is meant to be used in the terminal with commands listed below.

The NPM dependencies are Chalk, Yargs, and Validator - the package.json file is also included.

- Add note command:  node app.js add --title='example1' --body='body of the note'
- Remove note command: node app.js remove --title='example1'
- List all the titles of the note in  the notes json file: node app.js list
- Read the contents of a note when a user specifies a title: node app.js read --title='example1'
