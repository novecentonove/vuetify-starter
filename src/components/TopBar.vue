<template>
    <v-app-bar
      class="d-flex justify-center align-center"
      elevation="0"
    >
      <v-app-bar-nav-icon
        color="white"
        class="hidden-sm-and-down"
      />
  
      <v-app-bar-nav-icon
        color="white"
        class="hidden-md-and-up"
      />
  
      <v-spacer />
  
      <v-menu anchor="bottom end" origin="auto">

  
        <v-list class="pa-5 mt-2" elevation="10" rounded="lg" min-width="500">
          <v-list-item>
            <p>item</p>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu anchor="bottom end" origin="auto">
        <template #activator="{ props }">
          <v-btn v-bind="props" color="white" size="x-large" variant="tonal" density="compact" icon="mdi-account">
          </v-btn>
        </template>
      </v-menu>
      
    </v-app-bar>
  </template>