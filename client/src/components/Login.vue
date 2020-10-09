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
				<GoogleLogin
					:params="params"
					:renderParams="renderParams"
					:onSuccess="onSuccess"
					:onFailure="onFailure"
					>Login to Google</GoogleLogin
				>
			</div>
		</form>
	</section>
</template>

<script>
import axios from "axios";
import GoogleLogin from "vue-google-login";

export default {
	components: {
		GoogleLogin,
	},
	data() {
		return {
			email: "",
			password: "",
			params: {
				client_id:
					"132785609217-mqgqu44g1qgojg263s837ct2ahvandj9.apps.googleusercontent.com",
			},
			renderParams: {
				width: 250,
				height: 50,
				longtitle: false,
			},
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
					localStorage.setItem("organization_name", data.organization_name);
					this.$emit("toHome", "home");
				})
				.catch((err) => {
					console.log(err);
				});
		},
		onSuccess(googleUser) {
			const token = googleUser.getAuthResponse().id_token;
			axios({
				method: "POST",
				url: "http://localhost:3000/users/googlesignin",
				data: { token },
			})
				.then(({ data }) => {
					localStorage.setItem("access_token", data.access_token);
					localStorage.setItem("full_name", data.full_name);
					localStorage.setItem("profile_pic", data.profile_pic);
					localStorage.setItem("id", data.id);
					localStorage.setItem("organization_name", data.organization_name);
					this.$emit("toHome", "home");
				})
				.catch((err) => {
					console.log(err);
				});
		},
		onFailure(err) {
			console.log(err);
		},
	},
};
</script>

<style scoped></style>
