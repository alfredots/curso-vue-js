<template>
  <v-app>
    
    <app-drawer/>

    <v-app-bar app>
      <app-bar/>
    </v-app-bar>

    <v-content>
      <app-carousel/>
    </v-content>

    <app-footer/>
  </v-app>
</template>

<script>
import Drawer from './components/Drawer'
import AppBar from './components/AppBar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

export default {
  components: { 
    'app-drawer': Drawer,
    'app-bar' : AppBar,
    'app-carousel' : Carousel,
    'app-footer' : Footer
  },
  
}
</script>
