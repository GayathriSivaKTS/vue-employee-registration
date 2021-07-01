<template>

<div >
  <b-row>

 <b-col class="empdetails" lg="8">
    Welcome {{employee.FirstName}} {{employee.LastName}} !!
        <center>
      
 <table >
    <tr> <td>Employee ID</td><td>{{employee.ID}}</td></tr>
      <tr> <td>First Name</td><td>{{ employee.FirstName }}</td></tr>
       <tr> <td>Last name</td><td> {{ employee.LastName }}</td></tr>
       <tr> <td>Email </td><td>{{employee.Email}}</td></tr>
        <tr><td>Phone No</td><td>{{employee.PhoneNo}}</td></tr>
       <tr> <td>Date of Birth</td><td>{{employee.Dob}}</td></tr>
       <tr> <td>Reports To</td><td>{{employee.ReportsTo}}</td></tr>
      </table>
     
    <!-- <router-link :to="{ name: 'EmployeePut', query: { emp: employee } }" >Edit</router-link> -->
     <b-button variant="outline-success" @click="goToEditEmployee(employee.ID)" >Edit</b-button>
    <b-button variant="outline-success" @click="goToDeleteEmployee(employee.ID)" >Delete</b-button>
    <b-button  variant="outline-danger" @click="goToBackEmployee()">Exit</b-button>

    </center>
    </b-col>
<b-col  v-if="dreportee.length" class="rightbar" lg="4">
<div class="dreportee" >
   <b-card header="Direct Reportee" class="bcardup">
     
  <b-list-group v-for="drep in dreportee" v-bind:key="drep.ID">
  <b-list-group-item class="list">{{ drep.FirstName }} {{ drep.LastName }}</b-list-group-item>
</b-list-group>
   </b-card>
    
  </div>

  <div v-if="idreportee.length" class="idreportee">
  <b-card header="Indirect Reportee"  class="bcarddown">
    
 <!-- <ul v-for="idrep in idreportee" v-bind:key="idrep.ID">
  <li> {{ idrep.FirstName }} {{ idrep.LastName }}</li>   
        </ul> -->
      <b-list-group v-for="idrep in idreportee" v-bind:key="idrep.ID">
  <b-list-group-item class="list">{{ idrep.FirstName }} {{ idrep.LastName }}</b-list-group-item>
</b-list-group>
  </b-card>
  </div>
  </b-col>
    <!-- <div class="emp right">
        <div class="reportee rightup" >
          <ul> v-for="drep in dreportee" v-bind:key="drep.ID">
          <li>{{ drep.FirstName }} {{ drep.LastName }}</li>
          </ul>
        </div>
        <div class="reportee righdown">
           <ul> v-for="idrep in idreportee" v-bind:key="idrep.ID">
           <li>{{ idrep.FirstName }} {{ idrep.LastName }}</li> 
           </ul>
        </div>
    </div> -->
    </b-row>
  </div>
</template>
<script>
import EmployeeDataService from '../Service/EmployeeDataService'
export default {
  name: 'EmployeeByID',
  data () {
    return {
      id: this.$route.params.id,
      msg: 'Employee Details',
      employee: [],
      dreportee:[],
      idreportee:[]
    }
  },
  methods: {
    getEmployees () {
      EmployeeDataService.get(this.id)
        .then(response => {
          this.employee = response.data
          console.log(response.data)
          
        })
        .catch(e => {
          console.log(e)
        })
    },
    getDirectReportee () {
      EmployeeDataService.getdr(this.id)
        .then(response => {
          this.dreportee = response.data
          console.log(response.data)
          
        })
        .catch(e => {
          console.log(e)
        })
    },
    getIndirectReportee () {
      EmployeeDataService.getidr(this.id)
        .then(response => {
          this.idreportee = response.data
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
  },
  goToBackEmployee () {
    this.$emit("close-employee", undefined);
  },
  getEmployee (emp) {
    // console.log(this.$router.params)
    this.$emit("get-employee", emp)
  },
  closeEmployee (emp) {
    this.$emit('close-employee', emp)
  }},
  mounted () {
    this.getEmployees()
    this.getDirectReportee()
    this.getIndirectReportee()
  }
  // watch:{
  //   if(dreportee==null)
  //   {
      
  //   }
  // }

}
</script>
<style scoped>
.tablecard{
  width: 70%;
}
b-card{
  height: 45vh;
}
.dreportee,.idreportee{
  overflow: auto;
 height: 45vh;
  border-collapse:separate;
    
    
   border-bottom: 1px solid black;
}
.dreportee{
  margin-top:10px ;
   margin-bottom: 10px;
   border-bottom: 1px solid #aae4e6;
}
.editb{
  text-decoration-line: none;
  text-decoration-color: white;
}


.rightbar{
  border-left: 1px solid gray;
  padding-left: 10px;
  padding-right: 0%;
}
.emp{
    height: 100%;
  position: fixed;
}
.list{
  border: none;
  background-color: #f0f9fa ;
}
.left {
width:70%;
  left: 0;
  background-color: aqua;
}

.right {
width:30%;
  right: 0;
 background-color: rgb(63, 150, 121);
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.empdetails{
  
 
  }

.emp-namelist{
  text-decoration: none;
  color: black;
}
/* .bcardup,.bcarddown{
  overflow: scroll;
} */
table {
 
  margin: 5px 5px 5px 5px;
  /* background-color: white; */
  background-color: #f0f9fa ;
  border-collapse:separate;
    
    border-radius:12px;
    -moz-border-radius:12px;

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
