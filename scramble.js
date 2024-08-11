const Cube = require('cubejs');
const path = require('node:path');
const scrambles = {};
setInterval(function(){
    app.get("/api/users", (req, res) =>{
        const cube = new Cube();
        cube.randomize();
        cube.randomize();
        cube.randomize();
        cube.randomize();
        Cube.initSolver();   
        const scramble = Cube.inverse(cube.solve());
        const scrambles = {"name": scramble}
        console.log("hi");
        return res.send(scrambles);
    }); 
}, 1000);

const express = require('express');
const app = express();
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.use(express.static(__dirname + '/public'));
app.listen(8080, () => {
    console.log("server is listanibng");

});

