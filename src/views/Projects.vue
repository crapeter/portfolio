<template>
  <div>
    <h2>My Projects</h2>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <router-link :to="`/projects/${project.id}`" class="links">{{ project.name }}</router-link>
        <p>{{ project.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          { id: 'Chess', name: 'Chess', description: 'A chess game written in Java using the Swing Framework' },
          { id: "Tic Tac Toe", name: 'Tic Tac Toe', description: 'Tic Tac Toe that uses AI to play against you. The AI is written using the Minimax algorithm' },
          { id: 'NodeSMS', name: 'Node Student Management System', description: 'A student management system written entirely in NodeJS with basic CRUD operations' },
          { id: 'Hnefatafl', name: 'Hnefatafl', description: 'Hnefatafl, the vikings game of chess, written in Java using the Swing Framework' },
          { id: 'Java Games', name: 'Java Games', description: 'My earliest projects, all games written in Java using Swing and combined into one \'game engine\'' }
        ]
      }
    }
  }
</script>

<style scoped>
div {
  text-align: center;
  margin-left: 20px;
  margin-top: -30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
.links {
  font-weight: bold;
}
</style>