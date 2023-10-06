
<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar
        style="border-bottom: 1px solid #d7d7d7"
        elevation="0"
    >
        <template v-slot:prepend>
          <v-app-bar-nav-icon density="compact" :ripple="false" @click="toggleDrawer = !toggleDrawer" />
        </template>
        <v-app-bar-title>Logo</v-app-bar-title>

    </v-app-bar>

    <v-navigation-drawer
        v-model="toggleDrawer"
        :rail="rail"
        permanent
        @click="rail = false"
        width="200"
        class="navigation-drawer"
      >

      <v-list 
        density="compact"
        :lines="false"
        class="left_navigation_list"
        nav
      >

        <p class="menu_section">HOME</p>

        <v-list-item v-for="item in menuItems" :value="item.value" variant="plain" rounded="xl" :ripple="false" color="black">
          
          <v-icon size="small" class="ml-1 mr-4" :style="item.style ?? ''">{{ item.icon }}</v-icon>
          <span title="Home">{{item.name}}</span>
          
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main class="main_selector d-flex align-center justify-center">
      <router-view></router-view>
    </v-main>

  </v-layout>
</template>

<script setup>
    import { ref } from 'vue';
    import { RouterLink, RouterView } from 'vue-router'
    const toggleDrawer = ref(true)
    const rail = ref(false)

    const menuItems = [
      {
        value: 'home',
        icon: 'mdi-airballoon-outline',
        name: 'home',
        style: 'margin-bottom: 2px',
      },
      {
        value: 'users',
        icon: 'mdi-account',
        name: 'users',
        style: 'margin-bottom: 2px'
      },
      {
        value: 'account',
        icon: 'mdi-account-group-outline',
        name: 'account',
        style: 'margin-bottom: 1px'
      }
    ]
</script>


<style scoped>
.main_selector {
  background-color: #f7fafc;
}
.v-list-item--variant-plain {
  opacity: 1
}
.v-list-item--variant-plain:hover{
  opacity: 0.7
}

.menu_section {
  font-size: 0.8rem;
  margin-top: 10px;
  margin-bottom: 8px;
  margin-left: 10px;
  color:grey;
}

.left_navigation_list .v-list-item--nav:not(:only-child) {
  margin-bottom: 0;
}
</style>
