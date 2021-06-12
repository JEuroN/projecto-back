const excelReader = require('read-excel-file/node')
const productModel = require('../../models/product/productModel');
const pg = require('../../models/index');

const createArrayWithExcel = () => {

    excelReader('./resources/static/Productos prueba técnica.xlsx').then(async (rows)=>{
        
        rows.shift();
        arrays = [];

        rows.forEach((row)=>{

            let array = {
                product_handle: row[0],
                product_title: row[1],
                product_description: row[2],
                product_sku: row[3],
                product_grams: row[4],
                product_stock: row[5],
                product_price: row[6],
                product_compare_price: row[7],
                product_barcode: row[8]
            }
 
            arrays.push(array);
        })
        
        
        const query = pg.pgp.helpers.insert(arrays, productModel(pg.pgp));
        await pg.db.none(query)
        .then(e=> console.log(e))
        .catch(err=> console.log(err))
    })
 
}

module.exports = createArrayWithExcel;