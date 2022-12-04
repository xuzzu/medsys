<template>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <the-header/>
    <the-card/>
    
    <the-promo/>
    </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheCard from '@/components/TheCard.vue'
import ThePromo from '@/components/ThePromo.vue'
 

  export default {
    name: 'TheHome',

    components: { TheHeader, TheCard, ThePromo },
  }
</script>
