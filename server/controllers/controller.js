const {User,Task,Category} = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")  
const secret_key = "rahasiabosq"
class Controller{
    static postLogin(req,res){
        console.log(req.body,"<<<");
        User.findOne({where:{
            email:req.body.email
        }})
            .then(user=>{
                if(user && bcrypt.compareSync(req.body.password,user.password)){
                    console.log("logged in", user.email);
                    let token = jwt.sign({
                        id:user.id,
                        email:user.email
                    },secret_key)
                    console.log(token);
                    res.status(200).json({"access_token":token})
                }else{
                    res.status(404).json({"message":"Email atau Password Salah!"})
                }
            })
            .catch(err=>{
                console.log(err);
                res.status(500).json(err)
            })
    }
    static postRegister(req,res){
        User.create(req.body)
            .then(result=>{
                console.log(result);
                res.status(201).json(result)
            })
            .catch(err=>{
                console.log(err);
                res.status(500).json(err)
            })
    }

    static getTasks(req,res){
        let categories
        Category.findAll({include:[ 'tasks' 
        ]})
            .then(result=>{
                // console.log(result);
                categories = result
                // res.status(200).json(result)
                return User.findAll({attributes:[`id`,`email`]})
            })
            .then(users=>{
                res.status(200).json({categories,users})

            })
            .catch(err=>{
                console.log(err);
                res.status(500).json(err)
            })
    }

    static postTask(req,res){
        // let newTask = req.body
        console.log(req.body);
        let {title,description,CategoryId}= req.body
        let newTask = {
            title,
            description,
            CategoryId:Number(CategoryId),
            UserId:req.userData.id
        }
        console.log(newTask)
        Task.create(newTask)
            .then(result =>{
                res.status(201).json(result)
            })
            .catch(err=>{
                console.log(err);
                res.status(500).json(err)
            })
    }
    static putTask(req,res){
        // let newTask = req.body
        console.log(req.body);
        let {title,description,CategoryId}= req.body
        let newTask = {
            title,
            description,
            CategoryId:Number(CategoryId),
            UserId:req.userData.id
        } 
    }
    static deleteTask(req,res){ 
        console.log(req.params.id);
        Task.destroy({where:{
            id:req.params.id
        }}) 
            .then(result=>{
                if(result){
                    res.status(200).json({"message":"delete succeed"})
                }
            })
            .catch(err=>{
                res.status(500).json(err)
            })

    }

}

module.exports = Controller