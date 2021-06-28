<template>

<div class="employeeDetails">
    Welcome !!
    <center>
 <table>
    <tr> <td>Employee ID</td><td>{{emp.ID}}</td></tr>
      <tr> <td>First Name</td><td>{{ emp.FirstName }}</td></tr>
       <tr> <td>Last name</td><td> {{ emp.LastName }}</td></tr>
       <tr> <td>Email </td><td>{{emp.Email}}</td></tr>
        <tr><td>Phone No</td><td>{{emp.PhoneNo}}</td></tr>
       <tr> <td>Date of Birth</td><td>{{emp.Dob}}</td></tr>
       <tr> <td>Reports To</td><td>{{emp.ReportsTo}}</td></tr>
      </table>
    
    </center>
  </div>
</template>
<script>
import EmployeeDataService from '../Service/EmployeeDataService'
import Home from './Home.vue'

export default {
  components: { Home },
  name: 'EmployeeByID',
   props : {
        employee : { type: Object, default: () => {} } 
    },
  data () {
    return {
      msg: 'Employee Details',
      empid: this.employee.ID,
      emp: []
    }
  },
  methods: {
    getEmployee (empid) {
      EmployeeDataService.get(empid)
        .then(response => {
          this.emp = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.getEmployee(this.empid)
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
