// window.axios = require('axios');
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// Vue.prototype.$http = window.axios

var app = new Vue({
    el: '#app',
    data:{
        page: 'home',
        text:"testing",
        emailFormLogin :"",
        passwordFormLogin : "",
        addCategoryform:false,
        categories: [],
        tasks:[],
        users:[]
    },
    methods:{    
        login(){
            console.log(this.emailFormLogin,this.passwordFormLogin);
            axios
                .post('http://localhost:3000/login',{ 
                    email:this.emailFormLogin,
                    password:this.passwordFormLogin,
                })
                .then(({data})=>{
                    localStorage.setItem('access_token',data.access_token)
                    console.log(data);
                    this.page = 'home'
                    this.fetchData()
                })
                .catch(err=>{
                    console.log(err);
                })

        },
        logout(){
            console.log("logout");
            localStorage.clear()
            this.page = 'login'
        },
        test(){
            console.log("test");
        },
        fetchData(){
            console.log("fetching data!");
            axios
              .get('http://localhost:3000/tasks',
              {
                  headers:{
                      access_token:localStorage.access_token
                    }
                })
              .then(({data}) => {
                  data.categories.forEach(ele => {
                    //   console.log(ele);
                      this.categories.push({id:ele.id,name:ele.name})
                      ele.tasks.forEach(el=>{
                        this.tasks.push(el)
                      })
                  })
                  data.users.forEach(user=>{
                      this.users.push(user)
                      
                  })

                })
                .catch(err=>{
                    console.log(err);
                })
        }
    },
    created(){
        console.log("asd");
        if(localStorage.access_token){
            this.page = 'home' 
            console.log(localStorage.access_token); 
            // this.newData = this.fetchData()
           
        }else{
            console.log(localStorage.access_token);
            this.page = 'login'
        }
    }, 
    mounted() {  
    }
})