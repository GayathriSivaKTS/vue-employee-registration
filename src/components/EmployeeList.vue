<template>
<div class="employeemsg">
    <center>
      <h1>{{ msg }}</h1>

      <table id="firstTable">
        <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Employee DOB</th>
          <th>Employee Email ID</th>
          <th>Edit Employee</th>
        </tr>

        <tr v-for="emp in employee" v-bind:key="emp.ID">
          <td>{{ emp.ID }}</td>
          <td>{{ emp.FirstName }} {{ emp.LastName }}</td>
          <td>{{ emp.Dob }}</td>
          <td>{{ emp.Email }}</td>
          <td><button @click="goToEditEmployee()">Edit</button></td>
        </tr>
      </table>
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
    }
  },
  mounted () {
    this.getEmployees()
  }
}
</script>
<style scoped>
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
</style>
