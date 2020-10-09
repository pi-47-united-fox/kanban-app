<template>
	<section id="login-form" class="container mt-6">
		<h1 class="title is-2 has-text-centered">Login</h1>
		<form @submit.prevent="postLogin">
			<div class="field">
				<p class="control has-icons-left has-icons-right">
					<input v-model="email" class="input" type="email" placeholder="Email" />
					<span class="icon is-small is-left">
						<i class="fas fa-envelope"></i>
					</span>
				</p>
			</div>
			<div class="field">
				<p class="control has-icons-left">
					<input
						v-model="password"
						class="input"
						type="password"
						placeholder="Password"
					/>
					<span class="icon is-small is-left">
						<i class="fas fa-lock"></i>
					</span>
				</p>
			</div>
			<div class="field">
				<p class="control">
					<button class="button is-success has-background-primary-dark" type="submit">
						Login
					</button>
				</p>
			</div>
		</form>
	</section>
</template>

<script>
import axios from "axios";

export default {
	components: {},
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		postLogin() {
			axios({
				method: "POST",
				url: "http://localhost:3000/users/login",
				data: {
					email: this.email,
					password: this.password,
				},
			})
				.then(({ data }) => {
					localStorage.setItem("access_token", data.access_token);
					localStorage.setItem("full_name", data.full_name);
					localStorage.setItem("profile_pic", data.profile_pic);
					localStorage.setItem("id", data.id);
					this.$emit("toHome", "home");
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style scoped></style>
