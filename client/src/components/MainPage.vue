<template>
	<section id="main-kanban" class="container mt-6">
		<h1 class="title is-2 has-text-centered">Hacktiv8 Kanban</h1>
		<div class="columns">
			<!--BACKLOG-->
			<div class="column category-box has-background-primary-dark">
				<div class="category-row-1 is-full">
					<h1 class="title is-3 has-text-centered has-text-white">Backlog</h1>
				</div>
				<div class="category-row-2 is-full">
					<!--INDIVIDUAL TASK-->
					<TaskCard
						v-for="task in tasks.backlog"
						:key="task.id"
						v-bind:task="task"
						@reloadCard="reloadCard"
					></TaskCard>
				</div>
				<div class="category-row-3 is-full field has-addons has-addons-right">
					<p class="control">
						<input
							v-model="title"
							class="input is-small"
							type="text"
							placeholder="Task Title"
						/>
					</p>
					<p class="control">
						<a
							@click="addTask(1)"
							class="button is-small is-primary has-background-dark"
						>
							Save
						</a>
					</p>
				</div>
			</div>
			<!--TO DO-->
			<div class="column category-box has-background-primary-dark">
				<div class="category-row-1 is-full">
					<h1 class="title is-3 has-text-centered has-text-white">Todo</h1>
				</div>
				<div class="category-row-2 is-full">
					<!--INDIVIDUAL TASK-->
					<TaskCard
						v-for="task in tasks.todo"
						:key="task.id"
						v-bind:task="task"
						@reloadCard="reloadCard"
					></TaskCard>
				</div>
				<div class="category-row-3 is-full field has-addons has-addons-right">
					<p class="control">
						<input
							v-model="title"
							class="input is-small"
							type="text"
							placeholder="Task Title"
						/>
					</p>
					<p class="control">
						<a
							@click="addTask(2)"
							class="button is-small is-primary has-background-dark"
						>
							Save
						</a>
					</p>
				</div>
			</div>

			<!--DEVELOPMENT-->
			<div class="column category-box has-background-primary-dark">
				<div class="category-row-1 is-full">
					<h1 class="title is-3 has-text-centered has-text-white">Development</h1>
				</div>
				<div class="category-row-2 is-full">
					<!--INDIVIDUAL TASK-->
					<TaskCard
						v-for="task in tasks.doing"
						:key="task.id"
						v-bind:task="task"
						@reloadCard="reloadCard"
					></TaskCard>
				</div>
				<div class="category-row-3 is-full field has-addons has-addons-right">
					<p class="control">
						<input
							v-model="title"
							class="input is-small"
							type="text"
							placeholder="Task Title"
						/>
					</p>
					<p class="control">
						<a
							@click="addTask(3)"
							class="button is-small is-primary has-background-dark"
						>
							Save
						</a>
					</p>
				</div>
			</div>

			<!--DONE-->
			<div class="column category-box has-background-primary-dark">
				<div class="category-row-1 is-full">
					<h1 class="title is-3 has-text-centered has-text-white">Done</h1>
				</div>
				<div class="category-row-2 is-full">
					<!--INDIVIDUAL TASK-->
					<TaskCard
						v-for="task in tasks.done"
						:key="task.id"
						v-bind:task="task"
						@reloadCard="reloadCard"
					></TaskCard>
				</div>
				<div class="category-row-3 is-full field has-addons has-addons-right">
					<p class="control">
						<input
							v-model="title"
							class="input is-small"
							type="text"
							placeholder="Task Title"
						/>
					</p>
					<p class="control">
						<a
							@click="addTask(4)"
							class="button is-small is-primary has-background-dark"
						>
							Save
						</a>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import TaskCard from "./TaskCard";
import axios from "axios";
import AppVue from "../App.vue";

export default {
	components: {
		TaskCard,
	},
	data() {
		return {
			title: "",
			category: 0,
			UserId: localStorage.id,
			reload: false,
		};
	},
	props: ["tasks"],
	methods: {
		addTask(CategoryId) {
			axios({
				method: "POST",
				url: "http://localhost:3000/tasks",
				headers: {
					access_token: localStorage.access_token,
				},
				data: {
					title: this.title,
					CategoryId,
				},
			})
				.then(() => {
					this.title = "";
					this.$emit("reload", "home");
				})
				.catch((err) => {
					console.log(err);
				});
		},
		reloadCard(value) {
			this.$emit("reload", "home");
		},
	},
	created() {},
};
</script>

<style scoped>
.category-box {
	margin: 0.5rem;
	border-radius: 10px;
	height: 500px;
}

.category-row-1 {
	height: 10%;
}

.category-row-2 {
	height: 84%;
	overflow-y: scroll;
}

.category-row-3 {
	height: 6%;
}
</style>
