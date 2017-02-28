<template>
  <section class="hero is-fullheight is-dark is-bold">

   <div class="hero-body">
     <div class="container">
       <div class="columns is-vcentered">
         <div class="column is-4 is-offset-4">
           <h1 class="title">
             Login
           </h1>
           <div class="box">
             <label class="label">Email</label>
             <p class="control">
               <input class="input" type="text" v-model="email" placeholder="jsmith@example.org">
             </p>
             <label class="label">Password</label>
             <p class="control">
               <input class="input" type="password" v-model="password" placeholder="●●●●●●●">
             </p>
             <hr>
             <p class="control">
               <button class="button is-primary" v-on:click="handleLogin">Login</button>
               <button class="button is-default">Cancel</button>
             </p>
           </div>
           <p class="has-text-centered">
             <a href="register.html">Register an Account</a>
             |
             <a href="#">Forgot password</a>
             |
             <a href="#">Need help?</a>
           </p>
         </div>
       </div>
     </div>
   </div>
 </section>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: null,
      msg: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin () {
      this.login({ email: this.email, password: this.password })
      .then(this.loginSuccess)
      .catch(this.loginError)
    },
    loginSuccess () {
      this.error = null
      this.$router.replace(this.$route.query.redirect || '/')
    },
    loginError (error) {
      this.error = error
    }
  }
}
</script>
