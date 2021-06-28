<template>
<div class="employeemsg">
    <center>
 <p v-for="emp in employee" v-bind:key="emp.ID">
          <router-link :to="{ name: 'Empbyid', params: emp }" @click.native="EmployeeByID(emp)"  class="emp-namelist" > {{ emp.FirstName }} {{ emp.LastName }}</router-link>      
        </p>
      
      <div>
      <router-link to="/registration">Register Employee</router-link></div>
    </center>
  </div>
</template>
<script>
import EmployeeDataService from '../Service/EmployeeDataService'

export default {
  name: 'EmployeeList',
  data () {
    return {
      msg: 'Employee Details',
      employee: []
    }
  },
  methods: {
    getEmployees () {
      EmployeeDataService.getAll()
        .then(response => {
          this.employee = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    EmployeeByID (emp){
     this.$emit("get-employee", emp);
    }
  },
  mounted () {
    this.getEmployees()
  }
}
</script>
<style scoped>
.emp-namelist{
  text-decoration: none;
  color: black;
}
.employeemsg{
      height: 70vh;
      overflow: auto;
}
table {
  border-collapse: collapse;
  border: 3px solid green;
}
th,
td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
::-webkit-scrollbar{
  width: 3px;
}
::-webkit-scrollbar-thumb{
  background: gray;
}

</style>
