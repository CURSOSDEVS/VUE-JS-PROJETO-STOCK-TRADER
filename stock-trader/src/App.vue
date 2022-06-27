<template>
  <v-app data-app>
    <Header />
   <v-content>
    <v-container>
      <router-view>

      </router-view>
    </v-container>
   </v-content>
  </v-app>
 
</template>

<script>
/* eslint-disable */
import Header from './components/Cp-Header.vue'

export default {
  components:{ Header }
 }
</script>
