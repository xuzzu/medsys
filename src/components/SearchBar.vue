<template>
  <v-toolbar
      dense
      floating
      width="250px"
  >
    <v-text-field
        hide-details
        single-line
    ></v-text-field>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "SearchBar"
}
</script>

<style scoped>

</style>