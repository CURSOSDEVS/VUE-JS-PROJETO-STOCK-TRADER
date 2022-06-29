<template>
  <v-app data-app>
    <Header />
   <v-main>
    <v-container>
      <router-view>

      </router-view>
    </v-container>
   </v-main>
  </v-app>
 
</template>

<script>
/* eslint-disable */
import Header from './components/Cp-Header.vue'

export default {
  components:{ Header }
 }
</script>
