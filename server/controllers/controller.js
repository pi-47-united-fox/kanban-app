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
                    res.status(404).json({"msg":"Email atau Password Salah!"})
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

    static getTask(req,res){ 
        Task.findByPk(req.params.id) 
            .then(result=>{
                res.status(200).json(result)
            })
            .catch(err=>{
                console.log(err);
                res.status(500).json(err)
            })
    }
    static postCategory(req,res){
        console.log(req.body);
        Category.create(req.body)
            .then(result=>{
                res.status(201).json(result);
            })
            .catch(err=>{
                res.status(500).json(result)
            })
    }

    static postTask(req,res){
        // let newTask = req.body
        // console.log(req.body);
        let {title,description,CategoryId}= req.body
        let newTask = {
            title,
            description,
            CategoryId:CategoryId,
            UserId:req.userData.id
        }
        console.log(newTask)
        Task.create(newTask)
            .then(result =>{
                res.status(201).json(result)
            })
            .catch(err=>{
                if(err.name == 'SequelizeValidationError'){
                    console.log(err.errors[0].message);
                    res.status(400).json({"message":err.errors[0].message})
                }else{
                    res.status(500).json(err)
                }
            })
    }
    static putTask(req,res){  
        let {title,description,CategoryId}= req.body
        let editedTask = {
            title,
            description,
            CategoryId:Number(CategoryId)
        }
        Task.update(editedTask, {where:{id:req.params.id}})
            .then(result =>{
                res.status(201).json({"message":"Updated Successfully"})
            })
            .catch(err=>{
                if(err.name == 'SequelizeValidationError'){
                    console.log(err.errors[0].message);
                    res.status(400).json({"message":err.errors[0].message})
                }else{
                    console.log(err);
                    res.status(500).json(err)
                }
            })
    }
    static deleteTask(req,res){ 
        console.log(req.params.id);
        Task.destroy({where:{
            id:req.params.id
        }}) 
            .then(result=>{
                if(result){
                    res.status(200).json({"message":"Deleted Successfully"})
                }
            })
            .catch(err=>{
                res.status(500).json(err)
            })

    }

}

module.exports = Controller