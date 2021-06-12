module.exports = (pgp) => {
    const product = new pgp.helpers.ColumnSet([
        'product_handle',
        'product_title',
        'product_description',
        'product_sku',
        'product_grams',
        'product_stock',
        'product_price',
        'product_compare_price',
        'product_barcode'
    ],
    {table: 'product_table'})

    return product;
}