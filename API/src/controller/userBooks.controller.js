const {pool} = require("../database");
//---------- USER ------------//

const putUser = async(req,res) => {
    try{
        let params = [
            req.body.nombre,
            req.body.apellido,
            req.body.email,
            req.body.foto,
            req.body.id_user];
        let sql = 'UPDATE user SET nombre = COALESCE(?, nombre), ' +
                'apellido = COALESCE(?, apellido), ' +
                'email = COALESCE(?, email), ' +
                'foto = COALESCE(?, foto) ' +
                'WHERE id_user = ?';
        let [result] = await pool.query(sql,params);
        respuesta = {error: false, codigo: 200, dataUser: result}
        res.send(respuesta);
    }catch(err){
        console.log(err);
    }
}
const getAll = async (req,res) => {
    try{
        let sql = 'Select * FROM user';
        let [result] = await pool.query(sql);
        res.send(result); 
    }catch(err){
        console.log(err);
    }
}

const postRegister = async (req, res) => {
    
    try{
        let sql = "INSERT INTO user (nombre, apellido, email, foto, password)" +
                  "VALUES ('" + req.body.nombre + " ', '" +
                                req.body.apellido + " ','" +
                                req.body.email + " ','" +
                                req.body.foto + " ','" +
                                req.body.password + "')";

        let [result] = await pool.query(sql);
        respuesta = {error: false, codigo: 200, dataUser: result}
        res.send(respuesta);
    }catch(err){
        console.log(err);
    }
}

const postLogin = async(req,res) => {
    // let respuesta;
    try{
        let {email, password} = req.body;
        console.log(email,password);
        let sql = 'SELECT id_user, nombre, apellido, email, foto FROM user WHERE email = ? AND password = ?';
    
        let [result] = await pool.execute(sql, [email, password]);
        console.log(result);

        if(result.length === 0){
            respuesta = {error: true, codigo: 200, dataUser: 'Credenciales incorrectas'}
        }else{
            console.log("else");
            console.log(result[0]);
            respuesta = {error: false, codigo: 200, dataUser: result[0]}
        }
        res.send(respuesta);
    }catch(err){
        console.error('Error al iniciar sesion:', err);
        res.send({error: true, codigo: 200, dataUser: 'Error al iniciar sesion:'})
    }
};

//------------ BOOKS ----------//

const getBook = async(req,res) => {
    try{
        let sql;
        console.log("req.query.id_book",req.query.id_book);
        if(req.query.id_book != null){
            sql = 'SELECT * FROM book WHERE id_user= ' + req.query.id_user +
                  ' AND id_book=' + req.query.id_book;
        }else{
            sql = 'SELECT * FROM book WHERE id_user= ' + req.query.id_user;
        }
        let [result] = await pool.query(sql);
        respuesta = {error: false, codigo: 200, data: result}
        res.send(respuesta);

    }catch(err){
        console.log(err);
        console.log("catch");
    }
}

const postBook = async(req,res) => {
    try{
        let sql = "INSERT INTO book (id_user,title,type,author,price,photo)" +
                  "VALUES ('" + req.body.id_user + " ', '" +
                                req.body.title + " ','" +
                                req.body.type + " ','" +
                                req.body.author + " ','" +
                                req.body.price + " ','" +
                                req.body.photo + "')";
        let [result] = await pool.query(sql);

        if(result.insertId)
            respuesta = {error: false, codigo: 200, data: result}
        else
            respuesta = "-1"
        res.send(respuesta)
    }catch(err){
        console.log(err);
    }
}

const putBook = async(req,res) => {
    try{
        let params = [req.body.title,
            req.body.type,
            req.body.author,
            req.body.price,
            req.body.photo,
            req.body.id_book];
        let sql = 'UPDATE book SET title = COALESCE(?, title), ' +
                'type = COALESCE(?, type), ' +
                'author = COALESCE(?, author), ' +
                'price = COALESCE(?, price), ' +
                'photo = COALESCE(?, photo) ' +
                'WHERE id_book = ?';
        let [result] = await pool.query(sql,params);
        respuesta = {error: false, codigo: 200, data_book: result}
        res.send(respuesta);
    }catch(err){
        console.log(err);
    }
}

const deleteBook = async (req,res) =>{
    try{
        let sql = 'DELETE FROM book WHERE id_book = ?';
        let [result] = await pool.query(sql,[req.body.id_book]);
        respuesta = {error: false, codigo: 200, data: result}
        res.send(respuesta);
    }catch(err){
        console.log(err);
    }
} 


module.exports = {putUser, postRegister, getAll, postLogin, getBook,postBook, putBook, deleteBook}