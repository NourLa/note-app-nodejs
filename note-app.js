
const process = require('process')
const fs= require ('fs');
const notesString = fs.readFileSync('notes-data.json');
var listnotes =  JSON.parse(notesString)
 if (process.argv[2]=='add' ) {
if ((process.argv[3]=== '--title' || process.argv[3]=== '--t') && (process.argv[5]=== '--body' ||  process.argv[5]=== '--b'))
{ var title=process.argv[4]
   var body = process.argv[6]
    listnotes.push({title, body})
    console.log('Note Created')
   console.log(`Title:`+ title);
    console.log(`Body:`+ body);
} 
else  {console.log(' options:\n --help showhelp \n --title, -t Title of note \n --body, -b Body of note \n Missing required arguments: title, body') }

}
else if (process.argv[2]=='remove' ) {
        if ((process.argv[3]=== '--title'|| process.argv[3]=== '--t'))
        { var title=process.argv[4]
           JSON.parse(notesString).filter( note => note.title !== title)
            console.log('Note Removed')
            console.log(`Title:`+ title);
        } 
        else { console.log('options:\n --help showhelp \n --title, -t Title of note \n Missing required arguments: title') }
        }
else if (process.argv[2]=='list' ) {
        var counter= 0
        for (var i in listnotes){    counter++;}  console.log('Printing '+ counter +' notes')   
        for (var i in listnotes){   console.log(`Title:`+ listnotes[i].title);
        console.log(`Body:`+ listnotes[i].body);   
        }     
        }
 else  {
    if (process.argv[2]=='read' )
    if ((process.argv[3]=== '--title'|| process.argv[3]=== '--t'))
    { var title=process.argv[4]
        var filter= listnotes.filter( note => note.title === title)
        for (var i in filter ){
            console.log(`Title:`+filter[i].title);
            console.log(`Body:`+ filter[i].body);   } } 
    else { console.log('options:\n --help showhelp \n --title, -t Title of note \n Missing required arguments: title') }   
            }

