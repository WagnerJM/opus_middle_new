<template>
  <div class="container center">
    <h2>Login</h2>
    <form @submit.prevent>
      <label for="username">First Name</label>
      <input v-model="username" type="text" id="username" name="Username" placeholder="Username..">
      
      <label for="password">Last Name</label>
      <input v-model="password" type="password" id="password" name="Password" placeholder="Password..">
      
      <button @click="login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      const formData = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch("LOGIN", formData);
    }
  },
  data() {
    return {
      username: "",
      password: ""
    }
  },
};
</script>

<style>
.center{
  margin: auto;
  width: 50%;
}
</style>
