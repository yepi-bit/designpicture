<template>
  <div id="nav">
    <router-link to="/"><a-button value="large">Cut</a-button></router-link> |
    <router-link to="/video"><a-button value="large">Video</a-button></router-link> |
    <router-link to="/text"><a-button value="large">Text</a-button></router-link> |
    <router-link to="/face"><a-button value="large">Face</a-button></router-link> |
    <router-link to="/faceCheck"><a-button value="large">FaceCheck</a-button></router-link> |
    <router-link to="/waveSurfer"><a-button value="large">WaveSurfer</a-button></router-link> |
    <router-link to="/banner"><a-button value="large">Banner</a-button></router-link>
    <router-link to="/demo"><a-button value="large">Demo</a-button></router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>export default {
  components: {}
}
</script>
