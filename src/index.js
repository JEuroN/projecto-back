const express = require('express');
const cors = require('cors');
const createArrayWithExcel = require('./controllers/excel/excelController');

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const port = 8080

app.use('/user', require('./routes/user/userRoute'));
app.use('/product', require('./routes/products/productsRoute'));

app.listen(port, () =>{
    /* try{
        createArrayWithExcel();
    }catch(e){
        console.log('Base de datos llena!');
    } */
    console.log(`App listening on port ${port}!`)
})