<template>
  <div id="app" style="max-height: 300px; width: 400px">
    <v-switch v-model="month" class="ma-4" label="Choose Month"></v-switch>

    <v-date-picker
        style="margin-right: 150px"
        v-model="picker"
        :landscape="true"
        :reactive="reactive"
        :flat="false"
        :full-width="true"
        :show-current="showCurrent"
        :type="month ? 'month' : 'date'"
        :multiple="false"
        :readonly="false"
        :disabled="false"
        :events="enableEvents ? functionEvents : null"
        :no-title="true"
        :weekday-format="weekDayFormat"
        :header-date-format="dateFormat"
        :width="350"
        :show-week="true"

    ></v-date-picker>
  </div>
</template>

<script>
export default {
  name: "AppointmentCalendar",

  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
    showCurrent: true,
    month: false,
    reactive: true,
    range: ['2019-09-10', '2019-09-20'],
  }),
  computed: {
    functionEvents () {
      return this.month ? this.monthFunctionEvents : this.dateFunctionEvents
    },
  },

  methods: {
    dateFunctionEvents (date) {
      const [,, day] = date.split('-')
      if ([12, 17, 28].includes(parseInt(day, 10))) return true
      if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
      return false
    },
    monthFunctionEvents (date) {
      const month = parseInt(date.split('-')[1], 10)
      if ([1, 3, 7].includes(month)) return true
      if ([2, 5, 12].includes(month)) return ['error', 'purple', 'rgba(0, 128, 0, 0.5)']
      return false
    },
    weekDayFormat(date) {
      const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      let i = new Date(date).getDay(date)
      return daysOfWeek[i];
    },
    dateFormat(date) {
      const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug' ];
      const [ year, month ] = date.split('-');

      return months[month - 1] + ' ' + year;
    },
    debug(...args) {
      console.log(args);
    }
  }
}

</script>

<style scoped>

</style>