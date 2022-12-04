/* eslint-disable */
<template>
  <v-hover>

    <v-dialog v-model="dialog" width="700">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" elevation="2" style="width: 273px">
          Appointment
        </v-btn>
      </template>

      <v-card color="#8dc7da99">
        <v-container>
          <v-card>
            <v-toolbar
                color="#8dc7dacc"
                dark
                flat
            >

              <template v-slot:extension>
                <v-tabs
                    v-model="currentItem"
                    fixed-tabs
                    slider-color="white"
                >
                  <v-tab
                      v-for="item in items"
                      :key="item"
                      :href="'#tab-' + item"
                  >
                    {{ item }}
                  </v-tab>
                </v-tabs>
              </template>
            </v-toolbar>

            <v-tabs-items v-model="currentItem">
              <v-tab-item
                  v-for="item in items.concat(more)"
                  :key="item"
                  :value="'tab-' + item"
              >
                <v-card flat style="max-height: 370px">
                  <v-card-text>

                    <div id="app">

                      <v-app id="inspire">
                        <v-card>
                          <v-card-title>
                            <header>Doctors</header>
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
                          </v-card-title>
                          <v-data-table v-bind:headers="headers" v-bind:items="getDataForTab(item)" v-bind:search="search" >
                            <template v-slot:[`item.name`]="{ item }">
                              <div>
                                {{ getName(item) }}
                              </div>
                            </template>
                            <template v-slot:[`item.specialization`]="{ item }">
                              <div> {{ item.specialization }}</div>
                            </template>
                            <!-- eslint-disable-next-line -->
                            <template v-slot:[`item.detail`]="{ item }">
                              <!-- eslint-disable-next-line -->
                              <ChooseDoctorAppointment />
                            </template>
                            <template v-slot:no-data>
                              <div icon="warning">
                                {{ gridEmpty }}
                              </div>
                            </template>
                          </v-data-table>
                        </v-card>
                      </v-app>
                    </div>

                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-container>
        <v-card-actions class="justify-center">
          <v-btn
              class="ma-3"
              color="#ff7d7d"
              variant="outlined"
              @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </v-hover>
  <!--  -->

</template>

<script>
import ChooseDoctorAppointment from "@/components/ChooseDoctorAppointment";

export default {
  name: "AppointmentPage",
  components: {ChooseDoctorAppointment},


  data: () => ({
    dialog: false,
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    currentItem: 'tab-Web',
    items: [
      'Medical', 'Surgery', 'Dental', 'Radiology',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
        'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
        ' consequat.',
    search: "",
    gridEmpty: "No employee data found",
    headers: [
      { align: 'center', text: 'Name', value: 'name' },
      { align: 'center', text: 'Specialization', value: 'specialization' },
      { align: 'center', text: '', value: 'detail'},

    ],
    medEmployees: [
      {
        specialization: "first",
        name: {
          first: "My",
          last: "Tester"
        }
      },
      {
        specialization: "first",
        name: {
          first: "My",
          last: "Tester"
        }
      },
    ],
    surEmployees: [
      {
        specialization: "second",
        name: {
          first: "My",
          last: "Tester"
        }
      },
      {
        specialization: "second",
        name: {
          first: "RAWR",
          last: "XD"
        }
      },
    ],
    denEmployees: [
      {
        specialization: "third",
        name: {
          first: "My",
          last: "Tester"
        }
      },
      {
        specialization: "third",
        name: {
          first: "RAWR",
          last: "XD"
        }
      },
    ],
    radEmployees: [
      {
        specialization: "fourth",
        name: {
          first: "My",
          last: "Tester"
        }
      },
      {
        specialization: "fourth",
        name: {
          first: "RAWR",
          last: "XD"
        }
      },
    ],
  }),

  methods: {
    getName(item){
      if (item.name) {
        return (item.name.first + " " + item.name.last)
      } else {
        return "TBD"
      }

    },
    getDataForTab(tab){
      if (tab === "Medical") {
        return this.medEmployees
      }
      if (tab === "Surgery") {
        return this.surEmployees
      }
      if (tab === "Dental") {
        return this.denEmployees
      }
      if (tab === "Radiology") {
        return this.radEmployees
      }
    }
  }


}
</script>

<style scoped>

</style>
/* eslint-disable */
