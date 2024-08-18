import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import web from './routes/web.js'
import uc from './middlewares/uc-middleware.js'

const app= express()
const port = 3000

// uder contruction code line
// app.use(uc)

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/',web)

app.listen(port,(req,res)=>{
    console.log('port run on http://localhost:3000')
})