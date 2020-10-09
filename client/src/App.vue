<template>
	<div>
		<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a class="navbar-item" href="#">
					<img
						src="https://avatars.dicebear.com/api/bottts/adsaft1223saddasd.svg"
						width="45"
						height="28"
					/>
					<strong style="font-size: 1.4em">Kanban App</strong>
				</a>
			</div>

			<div id="navbarBasicExample" class="navbar-menu">
				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<!-- LOGIN AND SIGN BUTTON -->
							<a
								class="button is-primary has-background-primary-dark"
								v-show="isPage !== 'home'"
								@click.prevent="registerForm"
								><strong>Sign up</strong></a
							>
							<a
								class="button is-light"
								v-show="isPage !== 'home'"
								@click.prevent="loginForm"
							>
								Log in
							</a>

							<!-- SIGN OUT BUTTON -->
							<a
								class="button is-primary has-background-primary-dark"
								v-show="isPage === 'home'"
								@click.prevent="logout"
								><strong>Log out</strong></a
							>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<Login v-if="isPage === 'login'" @toHome="setPage"></Login>
		<Register
			v-else-if="isPage === 'register'"
			v-bind:organizations="organizations"
			@toLogin="setPage"
		></Register>
		<AddOrganization v-else-if="isPage === 'add-organization'"></AddOrganization>
		<MainPage
			v-else-if="isPage === 'home'"
			v-bind:tasks="tasks"
			@reload="reloadHome"
		></MainPage>
	</div>
</template>

<script>
import axios from "axios";
import Login from "./components/Login";
import Register from "./components/Register";
import MainPage from "./components/MainPage";
import GoogleLogin from "vue-google-login";

export default {
	components: {
		Login,
		MainPage,
		Register,
		GoogleLogin,
	},
	data() {
		return {
			isPage: "",
			organizations: [],
			tasks: {},
		};
	},
	methods: {
		loginForm() {
			this.isPage = "login";
		},
		registerForm() {
			this.isPage = "register";
		},
		logout() {
			this.isPage = "login";
			localStorage.clear();
			var auth2 = gapi.auth2.getAuthInstance();
			auth2.signOut().then(function() {
				console.log("User signed out.");
			});
		},
		setPage(value) {
			this.isPage = value;
		},
		reloadHome(value) {
			this.tasks = {};
			this.getTask();
		},
		getOrganizations() {
			axios({
				method: "GET",
				url: "https://api-kanban-app.herokuapp.com/organizations",
			})
				.then(({ data }) => {
					if (data) {
						data.forEach((el) => {
							this.organizations.push({ id: el.id, name: el.name });
						});
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getTask() {
			axios({
				method: "GET",
				url: "https://api-kanban-app.herokuapp.com/tasks",
				headers: {
					access_token: localStorage.access_token,
				},
			})
				.then(({ data }) => {
					this.tasks = data;
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	created() {
		if (localStorage.access_token) {
			this.getTask();
			this.isPage = "home";
		} else {
			this.isPage = "login";
			this.getOrganizations();
		}
	},
};
</script>

<style scoped></style>
