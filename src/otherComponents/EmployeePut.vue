<template>
  <div class="register">
    <center>
      <h2>{{ msg }}</h2>
    </center>
    <div class="inner">
      <div>
        <label for="firstName">First Name</label>
        <input
        type= "text"
        class="form-control"
        id="firstName"
        required
        v-model="employee.firstName"
        name="firstName"
        size="50" />
      </div>
      <div>
        <label for="lastName">Last Name</label>
         <input
        type= "text"
        class="form-control"
        id="lastName"
        required
        v-model="employee.lastName"
        name="lastName"
        size="50" />

      </div>
      <div>
        <label for="emailid">Email ID</label>
         <input
        type= "text"
        class="form-control"
        id="emailid"
        required
        v-model="employee.emailid"
        name="emailid"
        size="50" />
      </div>
      <div>
        <label for="phoneNo">Phone Number</label>
         <input
        type= "text"
        class="form-control"
        id="phoneNo"
        required
        v-model="employee.phoneNo"
        name="phoneNo"
        size="50" />
      </div>
      <div>
        <label for="dob">Date of Birth</label>
        <input
        type= "date"
        class="form-control"
        id="dob"
        required
        v-model="employee.dob"
        name="dob"
        size="50" />
      </div>
      <div>
        <label for="reportsTo">Reporter ID</label>
         <input
        type= "text"
        class="form-control"
        id="reportsTo"
        required
        v-model="employee.reportsTo"
        name="reportsTo"
        size="50" />
      </div>

      <div><button @click="save" class="btn btn-success">Submit</button></div>
    </div>
  </div>
</template>

<script>
import EmployeeDataService from '../Service/EmployeeDataService'

export default {
  name: 'EmployeePut',
 
  data() {
    return {
      id: this.$route.params.id,
      msg: 'Employee Registration',
      // id:this.$route.params.id,
      employee: {
        firstName: '',
        lastName: '',
        emailid: '',
        phoneNo: '',
        dob: '',
        reportsTo: ''
      },
      submitted: false
    }
  },
  methods: {
    save () {
      
      var data = {
        FirstName: this.employee.firstName,
        LastName: this.employee.lastName,
        Email: this.employee.emailid,
        PhoneNo: this.employee.phoneNo,
        Dob: this.employee.dob,
        ReportsTo: this.employee.reportsTo

      }

      EmployeeDataService.update(this.id, data)
        .then(response => {
         console.log(response.data)
          this.$router.push({ name: "Employee" })
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
<style scoped>
input[type="text"] {
  width: 100%;
  padding: 8px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="number"] {
  width: 100%;
  padding: 8px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
}
input[type="date"] {
  width: 100%;
  padding: 8px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
}
input[type="button"] {
  width: 20%;
  background-color: #4caf50;
  color: white;
  padding: 8px 10px;
  margin: 8px 0;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}

input[type="button"]:hover {
  background-color: #45a049;
}
.inner {
  align-content: center;
}
.register {
  border: 3px solid green;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  width: 30%;
  border-radius: 2px;

  padding: 5px;
}
</style>
