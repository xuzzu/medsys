<template>

  <v-hover v-slot="{ hover }">

    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="white--text font-weight-medium ml-3" width="165" height="49" :style="{ 'background-color': hover ? '#529bee' : '#32acb4' }">
          Login</v-btn>
      </template>

      <v-card color="#dbfbf6bf">
        <v-card-title class="justify-center pa-10">
          <span class="text-h4">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    label="Email*"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="Password*"
                    type="password"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions class="justify-center">
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
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-hover>
  <!--  -->

</template>

<script>
export default {
  name: "LoginWindow",

  data: () => ({
    dialog: false,
  }),
}
</script>

<style scoped>

</style>