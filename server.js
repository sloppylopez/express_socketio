import express from 'express';

var server = express();

server.use(express.static('src/views'));
server.use(express.static('./jspm_packages'));
server.use(express.static('.'));

server.get('/', function (req, res) {
    res.render('index')
});

server.listen(3000);