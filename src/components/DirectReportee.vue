<template>

<div class="reportee">
    Welcome !!
     <center>
 <ul v-for="emp in employee" v-bind:key="emp.ID">
  <li> {{ emp.FirstName }} {{ emp.LastName }}</li>   
        </ul>
      
    </center>
  </div>
</template>
<script>
import EmployeeDataService from '../Service/EmployeeDataService'
export default {
  name: 'DirectReportee',
  data () {
    return {
      id: this.$route.params.id,
      employee: []
    }
  },
  methods: {
    getReportee () {
      EmployeeDataService.getdr(this.id)
        .then(response => {
          this.employee = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.getReportee()
  }
}

</script>
<style scoped>
.reportee{
    border: 2px solid #66a3f1;
    background-color: antiquewhite;
    
}

</style>
