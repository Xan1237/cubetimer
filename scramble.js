/* Constants */
const Cube = require('cubejs');
const path = require('node:path');
const express = require('express');
const app = express();
const scrambles = {};

/*function that sends the scrambles to the front end of the website */
    app.get("/api/users", (req, res) =>{
        const cube = new Cube();
        cube.randomize();
        cube.randomize();
        cube.randomize();
        cube.randomize();
        Cube.initSolver();   
        const scramble = Cube.inverse(cube.solve());
        const scrambles = {"name": scramble}
        return res.send(scrambles);
    }); 


/*connects to html page*/ 
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

/*enables the use of the css and javascript front end files*/
app.use(express.static(__dirname + '/public'));

/*starts the server at local port 8080*/
app.listen(8080, () => {
    console.log("server is active");

});

