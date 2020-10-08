<template>
    <div class="kanban-task">
        <div class="panel-block">
            <div class="notification is-primary is-light">
                <div class="content">
                    <div class="post-references">
                        <div>
                            <p><i class="fas fa-user"> </i>
                                <strong>{{completed.User.email}}</strong></p>
                        </div>
                        <div>
                            <p><i class="far fa-calendar-alt"> </i>{{completed.createdAt}}</p>
                        </div>
                    </div>
                    <div>
                        {{completed.title}}
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
    name: 'TaskCompleted',
    props: ['completed']

}
</script>

<style>

</style>