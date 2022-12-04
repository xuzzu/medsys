<template>
  <div style="width: 1800px; height: 760px; margin-top: 30px; margin-left: -30px; border: rgba(119,118,118,0.44) solid 2px; border-radius: 20px;">
    <v-main style="background:#7ac7c9cc;color:white;border-radius: 10px;">
      <v-container>
        <v-row style="height: 760px">
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item
                    v-for="n in 5"
                    :key="n"
                    link
                >
                  <v-list-item-title>
                    List Item {{ n }}
                  </v-list-item-title>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                    link
                    color="grey-lighten-4"
                >
                  <v-list-item-title>
                    Log out
                  </v-list-item-title>
                </v-list-item>
              </v-list>
              <AppointmentPage />
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
                min-height="78vh"
                rounded="lg"
            >

              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>

</template>

<script>
import AppointmentPage from "@/components/AppointmentPage";

export default {
  components: {
    AppointmentPage,
  },
  name: "ProfileTemplate",
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
}
</script>