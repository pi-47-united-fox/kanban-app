var baseURL = 'http://localhost:3000';

var app = new Vue ({
    el: '#app',
    data: {
        organization: 'Hacktiv8',
        UserId: 1,
        user: 'Bagus', // semnetara


        tasks: null,
        input_text: ''
    },
    mounted() {
        console.log ('doc ready')
        this.fetchTask()
        console.log (this.tasks)
    },
    methods: {

        async fetchTask() {
            await axios.get(baseURL + '/tasks')
            .then((result) => {
                return this.tasks = result.data
                
            }).catch((err) => {
                console.log (err)
            });
        },

        addTask(category) {
            if (this.input_text !== '') {
                axios.post(baseURL + '/tasks', {
                    title: this.input_text,
                    category,
                    author: this.user
                })
                .then(res => {
                    this.fetchTask()
                    this.input_text = ''
                })
                .catch(err => {
                    console.error(err); 
                })
            }
        },

        deleteTask(id) {
            axios.delete(baseURL + `/tasks/${id}`)
            .then(res => {
                console.log(res)
                this.fetchTask()
            })
            .catch(err => {
                console.error(err); 
            })
        }
    }
})