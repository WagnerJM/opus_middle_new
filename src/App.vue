<template>
  <div id="app">
    <div class="topnav">
      <a style="background-color: #ffcc00; color: grey">
        <b>Opus::L/M - Middle</b>
      </a>
      <div v-if="this.$store.state.isAuthenticated">
        <router-link to class="right active">User</router-link>
        <router-link class="right" to="/admin" v-show="this.$store.state.user.is_admin">Admin</router-link>

        <router-link class="right" to="/">Home</router-link>
      </div>
      <div v-else>
        <router-link class="right active" to="/login">Login</router-link>
      </div>
    </div>
    <router-view/>
    <footer class="footer">
      <div>&copy; {{ new Date().getFullYear() }} J-M. Wagner</div>
      <div v-if="this.$store.state.isAuthenticated">
        <router-link style="padding: 20px;" to="/logout">logout</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  left: 0 px;
  padding: 10px;
  background-color: #ddd;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #ffcc00;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  position: absolute;

  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
}
.loader-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
body {
  margin: 0; /* Added */
}
.clickable {
  cursor: pointer;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  margin: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-container {
  padding: 2px 16px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
tr:hover {
  background-color: #f5f5f5;
}

.container {
  width: 65%;
  margin: auto;
}

.flex-container {
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.container .fluid {
  width: 95%;
  margin: auto;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #5e5e5e;
}
.topnav {
  overflow: hidden;
  background-color: #e6e6e6;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.topnav a {
  float: left;
  color: grey;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a.right {
  float: right;
}

.topnav a:hover {
  background-color: #ffcc00;
}

.topnav a.active {
  background-color: #ffcc00;
}
form {
  width: 45%;
  position: absolute;
}
input[type="text"],
input[type="password"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #ffcc00;
  color: grey;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: rgb(230, 230, 230);
}
</style>
