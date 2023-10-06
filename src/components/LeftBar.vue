<template>
    <v-navigation-drawer
      v-model="customizer.Sidebar_drawer"
      left
      :permanent="false"
      elevation="10"
      class="white"
      rail-width="77"
      mobile-breakpoint="960"
      app
      :rail="rail"
      expand-on-hover
    >
      <!-- ---------------------------------------------- -->
      <!--- Logo part -->
      <!-- ---------------------------------------------- -->
      <div class="pa-4">
        <v-icon size="x-large">
          mdi-alpha-k-box
        </v-icon>
      </div>
  
      <!-- ---------------------------------------------- -->
      <!--- Navigation -->
      <!-- ---------------------------------------------- -->
      <perfect-scrollbar class="scrollnavbar">
        <v-list class="pa-4" color="transparent">
          <!-- ---------------------------------------------- -->
          <!--- Menu Loop -->
          <!-- ---------------------------------------------- -->
          <v-list-subheader>
            <p>ciao</p>
          </v-list-subheader>
        </v-list>
      </perfect-scrollbar>
  
    </v-navigation-drawer>
  </template>

 <script setup>
const rail = ref(true)
</script>