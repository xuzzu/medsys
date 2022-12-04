<template>
  <div class="header ">
    <v-container>

<!--      Header-->
      <v-toolbar class="ml-15" color=" transparent  " align-center outlined flat fluid style="width: 2000px">
        <div style="position: absolute; left: -25px; top: 10px">
          <SearchBar />
        </div>

        <v-tabs color="#FF5D00" style="margin-left: 540px">
          <v-tab class=" white--text font-weight-regular text-lg-center" v-for="link in links" :key="link" :to="link.route">{{
              link.name
            }}
          </v-tab>
        </v-tabs>
        <!--        Registration button-->
        <div style="margin-bottom: 5px">
          <RegistrationWindow/>
        </div>


        <!--          Login button-->
        <div style="margin-bottom: 5px">
          <LoginWindow/>
        </div>

      </v-toolbar>
<!--      Header-->
      <template>
        <!--        consultation-->
        <v-card class=" white--text header-cont pa-10" outlined color='transparent' width="540">
          <v-list-item-title class=" text-h2 text-wrap font-weight-medium mt-2 ">
            Medical Services in Astana
          </v-list-item-title>
          <v-list-item-subtitle class=" text-wrap mt-9 font-weight-regular opacity-subtitle">Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-list-item-subtitle>
          <GetConsultation/>
        </v-card>
        <!--        consultation-->
      </template>
    </v-container>
  </div>
</template>
<script>
import RegistrationWindow from "@/components/RegistrationWindow";
import LoginWindow from "@/components/LoginWindow";
import GetConsultation from "@/components/GetConsultation";
import SearchBar from "@/components/SearchBar";

export default {
  components: {SearchBar, GetConsultation, LoginWindow, RegistrationWindow},
  data() {
    return {
      items: [
        {

        },
      ],
      links: [
        {name: "HOME", route: "/"},
        {name: "PROFILE", route: "/profile"},
        {name: "CONTACTS", route: "/contacts"},
        {name: "OUR SERVICES", route: "/services"},
        {name: "PRICING", route: "/pricing"},
      ]
    }
  }
}
</script>

<style>
.header {
  background-image: url('../assets/image/header-bg.png');
  background-repeat: no-repeat;
  height: 100vh;
  background-position: center;
  background-size: cover;
}

.header-cont {
  margin-top: 186px;
}

.opacity-subtitle {
  opacity: 0.7;
}
</style>