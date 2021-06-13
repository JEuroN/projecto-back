module.exports = (pgp) => {
    const userColumn = new pgp.helpers.ColumnSet([
        'user_username',
        'user_password',
        'user_firstname',
        'user_lastname'
    ],
    {table: 'user_table'})
    
    return userColumn;
}