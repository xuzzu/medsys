<template>
  <v-container>
    <v-list class=" transparent d-flex justify-space-between  mt-16">
      <v-hover v-slot="{ hover }" open-delay="100">
        <v-card class="rounded-lg " width="263" color="#312F30" to="/med-dep" :class="{ 'on-hover': hover }" :elevation="hover ? 12 : 2">
          <v-img class=" mt-auto rounded" src="../assets/image/slider-1.png" height="200" width="263"> </v-img>
          <v-list-item-content class="  justify-center">
            <v-card-title class=" justify-center  text-center white--text font-weight-medium text-lg-h6  pa-0">
              Medicine
               </v-card-title>
            <v-card-subtitle
              class=" font-weight-regular opacity-subtitle white--text pa-0 text-center mt-3 mb-4 text-sm-body-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </v-card-subtitle>
          </v-list-item-content>
        </v-card>
      </v-hover>

 <v-hover v-slot="{ hover }" open-delay="100">
    <v-card class="rounded-lg " width="263" color="#312F30" to="/surgery-dep" :class="{ 'on-hover': hover }" :elevation="hover ? 12 : 2">
        <v-img class=" mt-auto rounded" src="../assets/image/slider-2.png" height="200" width="263"> </v-img>
        <v-list-item-content class="  justify-center">
          <v-card-title class=" justify-center  text-center white--text font-weight-medium text-lg-h6  pa-0">
            Surgery
          </v-card-title>
          <v-card-subtitle
            class=" font-weight-regular opacity-subtitle white--text pa-0 text-center mt-3 mb-4 text-sm-body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </v-card-subtitle>
        </v-list-item-content>
      </v-card>
 </v-hover>
<v-hover v-slot="{ hover }" open-delay="100">
  <v-card class="rounded-lg " width="263" color="#312F30" to="/radiology-dep" :class="{ 'on-hover': hover }" :elevation="hover ? 12 : 2">
        <v-img class=" mt-auto rounded" src="../assets/image/slider-3.png" height="200" width="263"> </v-img>
        <v-list-item-content class="  justify-center">
          <v-card-title  class=" justify-center  text-center white--text font-weight-medium text-lg-h6  pa-0">
            Radiology
          </v-card-title>
          <v-card-subtitle
            class=" font-weight-regular opacity-subtitle white--text pa-0 text-center mt-3 mb-4 text-sm-body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </v-card-subtitle>
        </v-list-item-content>
      </v-card>
</v-hover>
    
<v-hover v-slot="{ hover }" open-delay="100">
   <v-card class="rounded-lg " width="263" color="#312F30" to="/dental-dep" :class="{ 'on-hover': hover }" :elevation="hover ? 12 : 2">
        <v-img class=" mt-auto rounded" src="../assets/image/slider-4.png" height="200" width="263"> </v-img>
        <v-list-item-content class="  justify-center">
          <v-card-title class=" justify-center  text-center white--text font-weight-medium text-lg-h6  pa-0">
            Dental
          </v-card-title>
          <v-card-subtitle
            class=" font-weight-regular opacity-subtitle white--text pa-0 text-center mt-3 mb-4 text-sm-body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </v-card-subtitle>
        </v-list-item-content>
      </v-card>
</v-hover>
<v-hover v-slot="{ hover }" open-delay="100">
  <v-card class="rounded-lg " width="263" color="#312F30" to="/cardiology-dep" :class="{ 'on-hover': hover }" :elevation="hover ? 12 : 2">
    <v-img class=" mt-auto rounded" src="../assets/image/slider-5.png" height="200" width="263"> </v-img>
    <v-list-item-content class="  justify-center">
      <v-card-title class=" justify-center  text-center white--text font-weight-medium text-lg-h6  pa-0">
        Cardiology
      </v-card-title>
      <v-card-subtitle
          class=" font-weight-regular opacity-subtitle white--text pa-0 text-center mt-3 mb-4 text-sm-body-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </v-card-subtitle>
    </v-list-item-content>
  </v-card>
</v-hover>
<v-hover v-slot="{ hover }" open-delay="100">
  <v-card class="rounded-lg " width="263" color="#312F30" to="/pediatrics-dep" :class="{ 'on-hover': hover }" :elevation="hover ? 12 : 2">
    <v-img class=" mt-auto rounded" src="../assets/image/slider-6.png" height="200" width="263"> </v-img>
    <v-list-item-content class="  justify-center">
      <v-card-title class=" justify-center  text-center white--text font-weight-medium text-lg-h6  pa-0">
        Pediatrics
      </v-card-title>
      <v-card-subtitle
          class=" font-weight-regular opacity-subtitle white--text pa-0 text-center mt-3 mb-4 text-sm-body-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </v-card-subtitle>
    </v-list-item-content>
  </v-card>
</v-hover>
    </v-list>
  </v-container>

</template>

<script>
export default {

}

</script>

<style>
</style>