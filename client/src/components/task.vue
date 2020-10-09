<template>
 <div class="column">
     <div class="footer">
        <h4>{{task.title}}</h4>
        <a href="#"><i class="fa fa-bars"></i></a>
        <a href="#"><i class="fa fa-trash"></i></a>
     </div>
            <div class="footer">
                <p class="footer-text">{{task.User.email}}</p>
                <p class="footer-text">{{task.updatedAt}}</p>
            </div> 
        </div> 
</template>

<script>
export default {
props: ['task']

}
</script>

<style>

</style>