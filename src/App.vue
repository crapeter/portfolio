<template>
  <nav>
    <div class="cont">
      <div class="left">
        <img src="@/assets/ttulogo.png" alt="School Logo" class="school-logo">
      </div>
      <div class="right">
        <router-link to="/">Home</router-link> |
        <router-link to="/projects">Projects</router-link>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { name: 'Chess' },
        { name: 'Tic Tac Toe' },
        { name: 'NodeSMS' },
        { name: 'Hnefatafl' },
        { name: 'Game Engine'}
      ]
    }
  }
}
</script>

<style>
* {
  background: #ffb8a3;
  color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
}
.cont {
  display: flex;
  justify-content: space-between;
  padding: 0;
}
nav {
  padding: 20px;
}
nav a {
  font-weight: bold;
}
nav a.router-link-exact-active {
  color: rgb(204, 0, 0);
}
.school-logo {
  text-align: left;
  width: 125px;
  height: auto;
  z-index: 10;
}
.right {
  margin-top: 30px;
  margin-right: 15px;
}
</style>