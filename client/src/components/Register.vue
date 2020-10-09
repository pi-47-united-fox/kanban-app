<template>
	<div>
		<section v-if="!isAdd" id="registration-form" class="container mt-6">
			<h1 class="title is-2 has-text-centered">Registration</h1>
			<form @submit.prevent="postRegister">
				<div class="field">
					<label class="label">Email</label>
					<div class="control has-icons-left has-icons-right">
						<input
							v-model="email"
							class="input"
							type="email"
							placeholder="Email input"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-envelope"></i>
						</span>
					</div>
				</div>

				<div class="field">
					<label class="label">Password</label>
					<p class="control has-icons-left has-icons-right">
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
					<label class="label">Full Name</label>
					<div class="control has-icons-left has-icons-right">
						<input
							v-model="full_name"
							class="input"
							type="text"
							placeholder="Full Name"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-user"></i>
						</span>
					</div>
				</div>

				<div class="field">
					<label class="label">Organization</label>
					<div class="control">
						<div class="select">
							<select v-model="OrganizationId">
								<option
									v-for="organization in organizations"
									:key="organization.id"
									v-bind:value="organization.id"
									>{{ organization.name }}</option
								>
							</select>
						</div>
					</div>
				</div>

				<div class="field is-grouped">
					<div class="control">
						<button type="submit" class="button is-link has-background-primary-dark">
							Submit
						</button>
					</div>
					<div class="control">
						<button
							@click.prevent="addOrganizationForm"
							class="button is-link has-background-primary-dark"
						>
							Add Organization
						</button>
					</div>
					<div class="control">
						<button @click.prevent="toLoginForm" class="button is-light">Cancel</button>
					</div>
				</div>
			</form>
		</section>

		<AddOrganization v-else @toRegister="onChildClick"></AddOrganization>
	</div>
</template>

<script>
import AddOrganization from "./AddOrganization";
import axios from "axios";

export default {
	components: {
		AddOrganization,
	},
	data() {
		return {
			isAdd: false,
			email: "",
			password: "",
			full_name: "",
			OrganizationId: 0,
		};
	},
	props: ["organizations"],
	methods: {
		addOrganizationForm() {
			this.isAdd = true;
		},
		onChildClick(value) {
			this.isAdd = value;
		},
		toLoginForm() {
			this.$emit("toLogin", "login");
		},
		postRegister() {
			axios({
				method: "POST",
				url: "http://localhost:3000/users/register",
				data: {
					email: this.email,
					password: this.password,
					full_name: this.full_name,
					OrganizationId: this.OrganizationId,
				},
			})
				.then((data) => {
					this.$emit("toLogin", "login");
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style scoped></style>
