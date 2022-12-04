<template>

  <v-hover>
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" rounded outlined small color="blue" dark>choose</v-btn>
      </template>

      <v-card color="white">
        <v-card-title class="text-h5 justify-center pa-10"> Choose from available dates </v-card-title>
        <!--        calentar-->

        <v-container style="width: 400px;">
          <AppointmentCalendar />
        </v-container>
        <!--        calentar-->

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
import AppointmentCalendar from "@/components/AppointmentCalendar";


export default {
  name: 'ChooseDoctorAppointment',
  components: {AppointmentCalendar},

  data: () => ({
    dialog: false,
  }),
};
</script>