<template>
	<div class="task has-background-dark">
		<div class="task-todo">
			<p>{{ task.title }}</p>
		</div>

		<div class="task-detail">
			<div class="email-and-date">
				<p>
					by: <span>{{ task.email }}</span>
				</p>
				<p>
					created at: <span>{{ task.createdAt }}</span>
				</p>
			</div>

			<div class="task-options">
				<a @click.prevent="subtractCategoryId"
					><i class="fas fa-angle-double-left fa-2x"></i
				></a>
				<a @click.prevent="deleteTask"><i class="fas fa-trash fa-2x"></i></a>
				<a @click.prevent="addCategoryId"
					><i class="fas fa-angle-double-right fa-2x"></i
				></a>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	props: ["task"],
	methods: {
		deleteTask() {
			axios({
				method: "DELETE",
				url: `https://api-kanban-app.herokuapp.com/tasks/${this.task.id}`,
				headers: {
					access_token: localStorage.access_token,
				},
			})
				.then((data) => {
					this.$emit("reloadCard", "home");
				})
				.catch((err) => {
					console.log(err);
				});
		},
		addCategoryId() {
			if (+this.task.CategoryId < 4) {
				this.updateCard(+this.task.CategoryId + 1);
			}
		},
		subtractCategoryId() {
			if (+this.task.CategoryId > 1) {
				this.updateCard(+this.task.CategoryId - 1);
			}
		},
		updateCard(CategoryId) {
			axios({
				method: "PATCH",
				url: `https://api-kanban-app.herokuapp.com/tasks/${this.task.id}`,
				headers: {
					access_token: localStorage.access_token,
				},
				data: {
					CategoryId,
				},
			})
				.then((data) => {
					this.$emit("reloadCard", "home");
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style scoped>
.task {
	margin: 0px 0px 5px 0px;
	width: 100%;
	padding: 5px;
	color: white;
	border-radius: 5px;
	font-size: 0.8em;
}

.task-detail {
	font-size: 0.7em;
	margin: 0;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
}
</style>
