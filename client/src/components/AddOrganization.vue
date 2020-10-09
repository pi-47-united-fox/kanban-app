<template>
	<section d="add-organization-form" class="container mt-6">
		<h1 class="title is-2 has-text-centered">Add Organization</h1>
		<form @submit.prevent="postOrganization">
			<div class="field">
				<label class="label">Organization Name</label>
				<div class="control has-icons-left has-icons-right">
					<input
						class="input"
						type="text"
						placeholder="Organization Name"
						v-model="name"
					/>
					<span class="icon is-small is-left">
						<i class="fas fa-user"></i>
					</span>
				</div>
			</div>
			<div class="field">
				<p class="control">
					<button class="button is-success has-background-primary-dark" type="submit">
						Save
					</button>
					<button @click.prevent="toRegisterForm" class="button is-light">Cancel</button>
				</p>
			</div>
		</form>
	</section>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			isAdd: true,
			name: "",
		};
	},
	props: {},
	methods: {
		toRegisterForm() {
			this.isAdd = false;
			this.$emit("toRegister", this.isAdd);
		},
		postOrganization() {
			axios({
				method: "POST",
				url: "https://api-kanban-app.herokuapp.com/organizations",
				data: { name: this.name },
			})
				.then(() => {
					this.$emit("toRegister", false);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style scoped></style>
