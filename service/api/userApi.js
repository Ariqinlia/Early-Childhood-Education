var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');

var conn = mysql.createConnection(models.mysql);

conn.connect();

var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.send('err');
    } else {
        console.log(ret);
        res.send(ret);
    }
}

// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.name, params.account, params.pass, params.checkPass,
                    params.email, params.phone, params.sex], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

// 增加问题接口
router.post('/addQuestion',(req, res) => {
    let sql = $sql.comquestion.add
    let params = req.body
    let keywords = JSON.parse(Object.keys(params)[0]);
    console.log('keywords:', keywords)
    let currentDate = new Date()
    let getTime = currentDate.toLocaleString()
    conn.query(sql, [keywords.username,getTime,0,keywords.dec,0], function (err, result) {
        if(err) {
            console.log(err)
            return res.end('error')
        }
        jsonWrite(res, result)
    })
})

// 查询问题详情
router.post('/problemDetails', (req,res) => {
    let sql = $sql.comment.add
    let params = req.body
    let keywords = JSON.parse(Object.keys(params)[0])
    let currentDate = new Date()
    let getTime = currentDate.toLocaleString()
    let {q_id,u_id,comments} = keywords
    conn.query(sql, [q_id,u_id,comments,getTime],(err, result)=>{
        if(err) {
            return res.end('error')
        }
        jsonWrite(res, result)
    })
})

// 查询问题回答个数
router.post('/updateComquestion', (req, res) => {
    let sql = $sql.comquestion.update
    let params = req.body
    let keywords = JSON.parse(Object.keys(params)[0])
    let {q_id,answer} = keywords
    if(q_id) {
        sql += "answer = (select count(*) from comment where q_id= "+ q_id+ "), status = (select case when answer>0 then 1 else 0 end) where q_id= " + q_id
    }
    console.log("sql:",sql)
    conn.query(sql, [q_id, answer], (err, result) => {
        if(err) {
            return res.send('error')
        }
        jsonWrite(res, result)
    })
})

// 显示回答列表
router.post('/showAnswer', (req,res) => {
    let sql_username = $sql.comment.select_uid_byuser
    let params = req.body
    let keywords = JSON.parse(Object.keys(params)[0])
    if(keywords.q_id) {
        sql_username += " and comment.q_id = " + keywords.q_id
    }
    console.log("sql_username:", sql_username)
    conn.query(sql_username, (err, result) => {
        if(err) {
            console.log('error')
            return res.send('error')
        }
        jsonWrite(res, result)
    })
})

// 查找问题并区分已解决或未解决
router.get('/commuQuestion',(req, res) => {
    let sql = $sql.comquestion.select_status
    let params = req.body
    conn.query(sql, function (err, result) {
        if(err) {
            console.log(err)
            return res.end('error')
        }
        console.log('result:', result)
        jsonWrite(res, result)
    })
})

//查找用户接口
router.post('/login', (req, res) => {
    var sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    console.log('params login',params)
    var keywords = JSON.parse(Object.keys(params)[0]);
    if (keywords.name) {
        sql_name += " where username ='"+ keywords.name +"'";
        console.log(sql_name);
    }    
    conn.query(sql_name, keywords.name, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result[0] === undefined) {
            res.send('-1') // 查询不出username，data 返回-1
        } else {
            var resultArray = result[0];
            console.log(resultArray);
            console.log(keywords);
            if(resultArray.password === keywords.password) {
                jsonWrite(res, result);
            } else {
                res.send('0') // username
            }
        }
    })
});

//获取用户信息
router.post('/getUser', (req, res) => {
    var sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    console.log(params);
    var keywords = JSON.parse(Object.keys(params)[0]);
    console.log('keywords',keywords)
    if (keywords) {
        sql_name += "where username ='"+ keywords +"'";
    }
    console.log(sql_name)
    conn.query(sql_name, params.name, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result[0] === undefined) {
            res.send('-1') // 查询不出username，data 返回-1
        } else {
            jsonWrite(res, result);
        }
    })
});

// 更新用户信息
router.post('/updateUser', (req, res) => {
    var sql_update = $sql.user.update_user;
    var params = req.body;
    console.log(params);
    var keywords = JSON.parse(Object.keys(params)[0]);
    if (keywords) {
        sql_update += " email = '" + keywords.email +
                        "',username = '" + keywords.username +
                        "',account = '" + keywords.account +
                        "',phone = '" + keywords.phone +
                        "',sex = '" + keywords.sex +
                        "' where u_id ='"+ keywords.u_id + "'";
    }    
    conn.query(sql_update, params.id, function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result);
        if (result.affectedRows === undefined) {
            res.send('更新失败，请联系管理员')   //查询不出username，data 返回-1
        } else {
            res.send('ok'); 
        }
    })
});

//更改密码
router.post('/modifyPassword', (req, res) => {
    var sql_modify = $sql.user.update_user;
    var params = req.body;
    console.log(params);
    if (params.id) {
        sql_modify +=  " password = '" + params.pass +
                        "',repeatPass = '" + params.checkPass +
                        "' where id ='"+ params.id + "'";
    }
    conn.query(sql_modify, params.id, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result.affectedRows === undefined) {
            res.send('修改密码失败，请联系管理员')   //查询不出username，data 返回-1
        } else {
            res.send('ok'); 
        }
    })
});


module.exports = router;
