var app = new Vue({ 
    el: '#app',
    data: {

        page: "afterLoginPage",
        tasks: [],
        title:"",
        description:""
        
    },
    methods:{
        toRegisterPage(){
            this.page = "registerPage"
        },
        toLoginPage(){
            this.page = "loginPage"
        },
        toMainPage(){
            this.page = "afterLoginPage"
        },
        toAddTaskPage(){
            this.page = "addTaskPage"
        },
        addTask(){
            this.tasks.push({
                title: this.title,
                description: this.description
            })
            this.title = ""
            this.description = ""
            this.toMainPage()
        }

    }
});