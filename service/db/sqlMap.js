var sqlMap = {
    user: {
        add: 'insert into user (username, account, password, repeatPass, email, phone, sex) values (?,?,?,?,?,?,?)',
        select_name: 'select * from user ',
        update_user: 'update user set'
    },
    comquestion: {
        select_status: 'select * from comquestion',
        add: 'insert into comquestion (username, time, answer, problem_desc, status) values (?,?,?,?,?)',
        update: 'update comquestion set '
    },
    comment: {
        selcect_all: 'select count(*) from comment',
        add: 'insert into comment (q_id, u_id, comments, c_time) values (?,?,?,?)',
        select_uid_byuser: 'select username,q_id,user.u_id,comments,c_time from comment,user where comment.u_id = user.u_id'
    }
}

module.exports = sqlMap;