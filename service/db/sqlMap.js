var sqlMap = {
    user: {
        add: 'insert into user (username, account, password, repeatPass, email, phone, sex) values (?,?,?,?,?,?,?)',
        select_name: 'select * from user', 
        update_user: 'update user set'
    },
    comquestion: {
        select_status: 'select * from comquestion'
    }
}

module.exports = sqlMap;