<template>
	<section id="main-kanban" class="container mt-6">
		<h1 class="title is-2 has-text-centered">{{ organization_name }} Board</h1>
		<div class="columns">
			<!--BACKLOG-->
			<CategoryCard
				v-bind:tasks="tasks.backlog"
				v-bind:category_name="'Backlog'"
				@reload="reloadCard"
			></CategoryCard>

			<!--TO DO-->
			<CategoryCard
				v-bind:tasks="tasks.todo"
				v-bind:category_name="'Todo'"
				@reload="reloadCard"
			></CategoryCard>

			<!--DEVELOPMENT-->
			<CategoryCard
				v-bind:tasks="tasks.doing"
				v-bind:category_name="'Development'"
				@reload="reloadCard"
			></CategoryCard>

			<!--DONE-->
			<CategoryCard
				v-bind:tasks="tasks.done"
				v-bind:category_name="'Done'"
				@reload="reloadCard"
			></CategoryCard>
		</div>
	</section>
</template>

<script>
import axios from "axios";
import AppVue from "../App.vue";
import CategoryCard from "./CategoryCard";

export default {
	components: {
		CategoryCard,
	},
	data() {
		return {
			organization_name: localStorage.organization_name,
			title: "",
			reload: false,
		};
	},
	props: ["tasks"],
	methods: {
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
