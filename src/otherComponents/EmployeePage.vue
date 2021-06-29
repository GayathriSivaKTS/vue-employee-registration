<template>
<div class="employeepage">
    <center>
    <table>
        <tr>
            <th>Employee Name</th>
            <th>Employee Email</th>
            <th>Employee PhoneNo</th>
            <th>Employee DOB</th>
            <th>Reports To</th>
        </tr>
 <tr v-for="emp in employee" v-bind:key="emp.ID">
          <td>{{emp.FirstName}} {{emp.LastName}}</td>
          <td>{{emp.Email}}</td>
          <td>{{emp.PhoneNo}}</td>
          <td>{{emp.Dob}}</td>
          <td>{{emp.ReportsTo}}</td>
          <td><button @click="goToEditEmployee(emp.ID)">Edit</button></td>
          <td><button @click="goToDeleteEmployee(emp.ID)">Delete</button></td>
        </tr>
      </table></center>
      <div>
      <router-link to="/registration">Register Employee</router-link></div>
   
  </div>
</template>
<script>
import EmployeeDataService from '../Service/EmployeeDataService'

export default {
  name: 'Employeepage',
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
    goToEditEmployee (ID) {
      this.$router.push({
        name: 'EmployeePut',
        // eslint-disable-next-line no-undef
        params: {id: ID}
      })
    },
    goToDeleteEmployee (ID) {
      this.$router.push({
        name: 'EmployeeDelete',
        params: {id: ID}
      })
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
    text
      height: 100vh;
      overflow: auto;
}
table {
    align-content: center;
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
