<template>

  <v-hover v-slot="{ hover }">

    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class=" white--text font-weight-medium" width="165" height="49" :style="{ 'background-color': hover ? '#529bee' : '#32acb4' }">
          Register</v-btn>
      </template>

      <v-card color="#dbfbf6bf">
        <v-card-title class="justify-center">
          <span class="text-h4">Register</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    label="Legal first name*"
                    required
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    label="Legal middle name"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12"
                     sm="6"
                     md="4">
                <v-text-field
                    label="ID*"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12"
                     sm="6"
                     md="4">
                <v-text-field
                    label="IIN*"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12"
                     sm="6"
                     md="4">
                <v-combobox
                    label="Bloodgroup*"
                    required
                    :items="['+A', '+B', '+AB', '+O', '-A', '-B', '-AB', '-O',]"
                ></v-combobox>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="Email*"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="Contact Number*"
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
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="date"
                        label="Birth date*"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="date"
                      no-title
                      scrollable
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
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
            Register
          </v-btn>
        </v-card-actions>
        <v-col
            cols="12"
        >
          <v-btn
              variant="outlined"
              icon
              color="secondary"
              to="home"
          >
            <v-icon>mdi-briefcase-check</v-icon>
          </v-btn>
          Staff registration?
        </v-col>
      </v-card>
    </v-dialog>
  </v-hover>
<!--  -->

</template>

<script>
export default {
  name: "RegistrationWindow",

  data: () => ({
    dialog: false,
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
  }),
}
</script>

<style scoped>

</style>