const express = require('express');
const server = express();
const PORT = 5001 || PROCESS.env;
const lessonRouter = require('./routers/lessons_router');


server.use(express.json());
server.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));

server.get('/', (req, res) => { res.send('<h1>Hello World!</h1>') });
server.use('/api/lessons', lessonRouter);