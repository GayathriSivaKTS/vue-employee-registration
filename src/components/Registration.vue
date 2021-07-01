
<template>
  <div class="inner">
    <center>
      <h6>{{ msg }}</h6>
    </center>
    <div class="register">
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

      <div><button @click="save" class="btn btn-success">Submit</button>
      <b-button style="float:right" variant="outline-danger" @click="goToBackEmployee()">Exit</b-button>
</div>
    </div>
  </div>
</template>

<script>
import EmployeeDataService from '../Service/EmployeeDataService'
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Employee Registration',
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

      EmployeeDataService.create(data)
        .then(response => {
          this.employee.id = response.data.id
          console.log(response.data)
          this.submitted = true
        })
        .catch(e => {
          console.log(e)
        })
    },
     goToBackEmployee () {
       
    this.$emit("close-registration", undefined)
  }
  }
}
</script>
<style scoped>
input[type="text"] {
  width: 100%;
  padding: 4px 6px;
  margin: 2px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="number"] {
  width: 100%;
  padding: 4px 6px;
  margin: 2px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
}
input[type="date"] {
  width: 100%;
  padding: 4px 6px;
  margin: 2px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
}
input[type="button"] {
  width: 20%;
  background-color: #4caf50;
  color: white;
  padding: 4px 6px;
  margin: 2px 0;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}

input[type="button"]:hover {
  background-color: #45a049;
}
.inner{
  align-content: center;
}

.register {
  align-content: center;
  border: 3px solid #97d4da;
  display: block;
  margin-left: auto;
  margin-right: auto;
   background-color: #f0f9fa ;
  border-collapse:separate;
    
    border-radius:12px;
    -moz-border-radius:12px;
  width: 30vw;
  border-radius: 2px;

  padding: 5px;
}
</style>
