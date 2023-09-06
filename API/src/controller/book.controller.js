const {pool} = require("../database");

const getMarks = async(req, res) => {
    try{
        let sql;
        if(req.query.id_students == null){
            sql = 'SELECT * FROM marks';
        }else{
            sql = 'SELECT * FROM marks WHERE id_students=' + req.query.id_students;
        }
        
        let [result] = await pool.query(sql);
        res.send(result);

    }catch(err){
        console.log(err);
    }
}

const getMedia = async(req, res) => {
    try{
        let sql;
        if(req.query.id_students == null){
            sql = 'SELECT * FROM marks';
        }else{
            sql = 'SELECT AVG(mark) FROM marks WHERE id_students=' + req.query.id_students;
        }
        let [result] = await pool.query(sql);
        res.send(result);

    }catch(err){
        console.log(err);
    }
}

const getApuntadas = async(req, res) => {
    try{
        let sql;
        if(req.query.id_students == null){
            sql = 'SELECT first_name, last_name, title FROM students AS s ' +
                  'INNER JOIN marks AS m ON (s.id_students = m.id_students) ' +
                  'INNER JOIN subjects AS sj ON (m.id_subject = sj.id_subjects)';
        }else{
            sql = 'SELECT m.id_students, s.title FROM marks as m ' +
                  'INNER JOIN subjects AS s ON (m.id_subject = s.id_subjects) ' +
                  'WHERE id_students=' + req.query.id_students; 
        }
        let [result] = await pool.query(sql);
        console.log(result);
        res.send(result);

    }catch(err){
        console.log(err);
    }
}

const getImpartidas = async(req, res) => {
    try{
        let sql;
        if(req.query.id_teacher == null){
            sql = 'SELECT first_name, last_name, title FROM teacher AS t '+
                  'INNER JOIN subjectS_teacher AS st ON (t.id_teacher = st.id_teacher) ' +
                  'INNER JOIN subjects AS s ON (st.id_subjects = s.id_subjects)';
                  console.log("if");
        }else{
            sql = 'SELECT id_teacher, title FROM subjects_teacher as st ' +
                   'INNER JOIN subjects as s on (st.id_subjects = s.id_subjects)' + 
                   'WHERE id_teacher='+ req.query.id_teacher;
                   console.log("else");
        }
        let [result] = await pool.query(sql);
        console.log(result);
        res.send(result);

    }catch(err){
        console.log(err);
    }
}


module.exports = {getMarks,getMedia, getApuntadas , getImpartidas}