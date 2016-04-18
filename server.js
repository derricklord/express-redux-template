import express from 'express';
import _ from 'lodash';


let app = express();

//Middleware: Server static resources
app.use(express.static('public'));

//Serve index.html file (enable browser history)
app.get('*', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(3000);
