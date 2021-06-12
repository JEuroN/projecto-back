module.exports = {
    getAllProducts: (limit=30, offset=0) => {return `SELECT * FROM product_table LIMIT ${limit} OFFSET ${offset}`},
    getProduct: (parameter, id) => {return `SELECT * FROM product_table WHERE ${parameter} ILIKE '${id}%'`},
    deleteProduct: (barcode) => {return `DELETE FROM product_table WHERE product_barcode = '${barcode}'`},
    updateProduct: (barcode) => {return `UPDATE FROM product_table`}
}