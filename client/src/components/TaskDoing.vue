<template>
  <div class="kanban-task">
        <div class="panel-block">
            <div class="notification is-link is-light">
                <div class="content">
                    <div class="post-references">
                        <div>
                            <p><i class="fas fa-user"> </i>
                                <strong>{{doing.User.email}}</strong></p>
                        </div>
                        <div>
                            <p><i class="far fa-calendar-alt"> </i>{{doing.createdAt}}</p>
                        </div>
                    </div>
                    <div>
                        {{doing.title}}
                    </div>
                </div>
                <div class="actions">
                    <span class="icon has-text-info">
                        <i class="fas fa-edit"></i>
                    </span>
                    <span class="icon has-text-success">
                        <i class="fas fa-thumbs-up"></i>
                    </span>
                    <span class="icon has-text-warning">
                        <i class="fas fa-thumbs-down"></i>
                    </span>
                    <span class="icon has-text-danger">
                        <i class="fas fa-trash"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskDoing",
    props: ['doing']

}
</script>

<style>

</style>