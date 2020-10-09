<template>
	<div class="column category-box has-background-primary-dark">
		<div class="category-row-1 is-full">
			<h1 class="title is-3 has-text-centered has-text-white">{{ category_name }}</h1>
		</div>
		<div class="category-row-2 is-full">
			<!--INDIVIDUAL TASK-->
			<TaskCard
				v-for="task in tasks"
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
				<a @click="addTask()" class="button is-small is-primary has-background-dark">
					Save
				</a>
			</p>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import TaskCard from "./TaskCard";

export default {
	components: {
		TaskCard,
	},
	data() {
		return {
			title: "",
			reload: false,
		};
	},
	props: ["tasks", "category_name"],
	methods: {
		addTask() {
			console.log(this.tasks[0].CategoryId)
			axios({
				method: "POST",
				url: "http://localhost:3000/tasks",
				headers: {
					access_token: localStorage.access_token,
				},
				data: {
					title: this.title,
					CategoryId: this.tasks[0].CategoryId || 1,
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
};
</script>

<style>
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
