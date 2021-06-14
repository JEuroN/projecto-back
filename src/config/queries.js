module.exports = {
    getAllProducts: () => {return `SELECT * FROM product_table`},
    getProduct: (id) => {return `SELECT * FROM product_table WHERE product_id = ${id}`},
    deleteProduct: (id) => {return `DELETE FROM product_table WHERE product_id = '${id}'`},
    getUser: (username) => {return `SELECT * FROM user_table WHERE user_username = '${username}'`},
    updateUser: (username, firstname, lastname) => {return `WHERE user_username = '${username}' AND user_firstname = '${firstname}' AND user_lastname = '${lastname}'`}
}