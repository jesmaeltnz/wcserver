<template>
  <div id="app">
    <app-navbar/>
    
    
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  name:'App',
  components:{
    'app-navbar':Navbar
  }
}
</script>

