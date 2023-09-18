<template>
  <div class="container">
    <div class="left-column">
      <div class="About-Me"> 
        <h2>About Me</h2>
      </div>
      <div class="github">
        <h2>GitHub Profile</h2>
        <a href="https://github.com/crapeter" target="_blank" rel="noopener noreferrer">Click to be taken to my GitHub profile</a>
      </div>
    </div>
    <div class="right-column">
      <div class="LinkedIn">
        <h2>LinkedIn Profile</h2>
        <a href="https://www.linkedin.com/in/craig-peterson-623132266/" target="_blank" rel="noopener noreferrer">Click to be taken to my LinkedIn profile</a>
      </div>
      <h2>My Resume</h2>
      <div class="resume-section">
        <object class="pdf" data="/resume.pdf#toolbar=0" type="application/pdf" width="850" height="600"></object>
      </div>
    </div>
    
  </div> 
</template>

<script>
 
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
}
.left-column, .right-column {
  flex: 1;
  padding: 20px;
  margin-top: -50px;
}
.About-Me, .github, .resume-section, .LinkedIn {
  margin-bottom: 20px;
}
.resume-section, .LinkedIn, .right-column {
  text-align: right;
}
.About-Me, .github, .left-column {
  text-align: left;
}
.resume-section {
  overflow: hidden;
  border-radius: 30px;
} 
.pdf {
  border: none;
}
</style>