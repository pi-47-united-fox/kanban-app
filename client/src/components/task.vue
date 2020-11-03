<template>
 <div class="column">
     <div class="footer">
        <h4>{{task.title}}</h4> 
        <div class="icon">
            <a href="#" @click="deleteTask(task.id)"><i class="fa fa-trash"></i></a>
            <a href="#" @click="inputTitle"><i class="fa fa-edit"></i></a>
            <EditTitle 
            v-show="pageTaskTitle === true"
            @closePageTask="closePageTask"
            @editFormTitle="editFormTitle(title)"></EditTitle>
            <a href="#" @click="inputCategory"><i class="fa fa-bars"></i></a>
            <EditCategory 
            v-show="pageTaskCategory === true"
            @closePageTask="closePageTask"
            @changeCategory="changeCategory(category)"></EditCategory>
        </div> 
     </div>
            <div class="footer">
                <p class="footer-text">{{task.User.email}}</p>
                <p class="footer-text">{{task.updatedAt}}</p>
            </div> 
        </div> 
</template>
 
<script>
import axios from 'axios'
import EditTitle from '../views/EditTitle'
import EditCategory from '../views/EditCategory'
export default {
    components: {
        EditCategory,
        EditTitle
    },
    data() {
        return {
            pageTaskCategory: false,
            pageTaskTitle: false,
            category: ''
        }
    },
props: ['task'],
methods: {
    deleteTask(id){
        axios
        .delete(`http://localhost:3000/task/${id}`,{
            headers: {'access_token': localStorage.access_token}
        })
        .then(({data}) => {
            this.$emit('delTask')
        })
        .catch(err => {
            console.log(err)
        })
    },
    changeCategory(category) {
        category= this.category
        console.log(this.category)
    },
    editCategory(id){
        axios
        .patch(`http://localhost:3000/task/${id}`,{headers: 
        {'access_token': localStorage.access_token},
        category: this.category
        })
        .then(({data}) => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    },
    inputCategory() {
        this.pageTaskCategory = true
    },
    inputTitle() {
        this.pageTaskTitle = true
    },
    closePageTask() {
        this.pageTaskCategory = false
        this.PageTaskTitle = false
    }
}
}

</script>

<style>

</style>