<template>

  <v-hover v-slot="{ hover }">
    <v-dialog v-model="dialog" width="350">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class=" white--text font-weight-medium mt-10" width="200" height="70"
               :style="{ 'background-color': hover ? 'rgba(0,102,255,0.63)' : 'rgb(50,172,180)' }">
          Get Consultation</v-btn>
      </template>

      <v-card color="#b5ffef">
        <v-card-title class="text-h5 justify-center pa-10"> Leave us your number! </v-card-title>
        <v-container style="width: 250px;">
          <v-row>
            <v-text-field
                label="Phone number*"
                required
            ></v-text-field>
          </v-row>
        </v-container>
        <v-container style="width: 250px;">
          <v-row>
            <v-text-field
                label="Reason (optional)"
            ></v-text-field>
          </v-row>
        </v-container>
        <v-card-actions class="justify-center pa-10">
          <v-btn
              class="ma-3"
              color="#ff7d7d"
              variant="outlined"
              @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
              class="ma-3"
              variant="outlined"
              color="#32acb4"
              @click="dialog = false"
          >
            Confrim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-hover>

</template>

<script>
export default {
  name: 'GetConsultation',
  data: () => ({
    dialog: false,
  }),
};
</script>