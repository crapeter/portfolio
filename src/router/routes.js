import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

export default [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/projects/:id', component: ProjectDetails }
]