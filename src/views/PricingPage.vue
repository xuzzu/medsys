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
        <RegistrationWindow/>
        <!--          Login button-->
        <LoginWindow/>
      </v-toolbar>
      <!--      Header-->

    </v-container>
  </div>
</template>
<script>
import RegistrationWindow from "@/components/RegistrationWindow";
import LoginWindow from "@/components/LoginWindow";
import SearchBar from "@/components/SearchBar";

export default {
  components: {SearchBar, LoginWindow, RegistrationWindow},
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