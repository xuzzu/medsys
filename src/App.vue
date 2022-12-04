<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.v-container{
  max-width: 1169px;
    margin: 0 auto;
    padding: 0 15px;
}
.opacity-subtitle {
  opacity: 0.7;
}
</style>
