const express = require('express');




// create server
const PORT = process.env.PORT || 3000;
const server = express();


server.use(express.json({ limit: '1mb'}));
server.use(express.static('./public'));



server.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
});


