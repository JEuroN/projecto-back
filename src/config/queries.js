module.exports = {
    getAllProducts: () => {return `SELECT * FROM product_table`},
    getProduct: (id) => {return `SELECT * FROM product_table WHERE product_id = ${id}`},
    deleteProduct: (barcode) => {return `DELETE FROM product_table WHERE product_barcode = '${barcode}'`},
    updateProduct: (barcode) => {return `UPDATE FROM product_table`},
    getUser: (username) => {return `SELECT * FROM user_table WHERE user_username = '${username}'`}
}