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
          <td> <router-link :to="{ name: 'EmployeePut', params: {id: emp.ID } }">Edit</router-link> </td>
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
    // goToEditEmployee (id:emp.ID) {
    //   this.$router.push({
    //     path: '/put',
    //     // eslint-disable-next-line no-undef
    //     params: {id: emp.ID}
    //   })
    // },
    goToDeleteEmployee (id) {
      this.$router.push({
        path: '/delete',
        params: {ID: id}
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
