var sqlMap = {
    user: {
        add: 'insert into user (username, account, password, repeatPass, email, phone, sex) values (?,?,?,?,?,?,?)',
        select_name: 'select * from user', 
        update_user: 'update user set'
    }
}

module.exports = sqlMap;