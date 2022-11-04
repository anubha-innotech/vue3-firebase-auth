<template>
	<router-link to="/">Register</router-link> |
    <router-link to="/about">Login</router-link>
<main class="login">
    <section class="forms">

        <form class="register" @submit.prevent="register">
            <h2>Register</h2>
            <input type="email" placeholder="Email address" v-model="register_form.email" />
            <input type="password" placeholder="Password" v-model="register_form.password" />
            <input type="submit" value="Register" />

            <button @click="handleSignInGoogle">Signin with Google</button>
            <button @click="handleSignInGithub">Signin with Github</button>		
        </form>
		
        <form class="login" @submit.prevent="login">
            <h2>Login</h2>
            <input type="email" placeholder="Email address" v-model="login_form.email" />
            <input type="password" placeholder="Password" v-model="login_form.password" />
            <input type="submit" value="Login" />
			
			<button @click="handleSignInGoogle">Login with Google</button>
			<button @click="handleSignInGithub">Login with Github</button>
        </form> 
    </section>
</main>
</template>

<script>
import {
    ref
} from 'vue'
import {
    useStore
} from 'vuex'

export default {

    setup() {
        const login_form = ref({});
        const register_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value);
        }

        const register = () => {
            store.dispatch('register', register_form.value);
        }
		
        const handleSignInGoogle = () => {
			store.dispatch('signinGoogle');
        }

        const handleSignInTwitter = () => {
			store.dispatch('signinTwitter');
        }

        const handleSignInGithub = () => {
			store.dispatch('signinGithub');
        }
        return {
            login_form,
            register_form,
            login,
            register,
			handleSignInGoogle,
			handleSignInTwitter,
			handleSignInGithub,
        }
    }
}
</script>

<style>
.forms {
    display: flex;
    min-height: 100vh;
}

form {
    flex: 1 1 0%;
    padding: 8rem 1rem 1rem;
}

form.register {
    color: #FFF;
    background-color: rgb(245, 66, 101);
    background-image: linear-gradient(to bottom right,
            rgb(245, 66, 101) 0%,
            rgb(189, 28, 60) 100%);
}

h2 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
}

input {
    appearance: none;
    border: none;
    outline: none;
    background: none;

    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
    opacity: 0.8;
    transition: 0.4s;
}

input:focus:not([type="submit"]) {
    opacity: 1;
}

input::placeholder {
    color: inherit;
}

form.register input:not([type="submit"]) {
    color: #FFF;
    border-bottom: 2px solid #FFF;
}

form.login input:not([type="submit"]) {
    color: #2c3e50;
    border-bottom: 2px solid #2c3e50;
}

form.login input[type="submit"] {
    background-color: rgb(245, 66, 101);
    color: #FFF;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
}

form.register input[type="submit"] {
    background-color: #FFF;
    color: rgb(245, 66, 101);
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
}

button{
	display: block;
	padding: 1rem 2rem;
	background-color: rgba(0, 0, 0, .2);
    transition: 0.4s;
	margin: .1rem auto;
	border: none;
	font-size: 1rem;
}
button:hover{
	background-color: rgba(0, 0, 0, .3);
}
</style>
