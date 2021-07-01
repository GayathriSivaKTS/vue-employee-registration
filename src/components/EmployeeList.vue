<template>
 <div class="employeelist">
  
 <!-- <p v-for="emp in employee" v-bind:key="emp.ID">
          <router-link :to="{ name: 'EmployeeByID', params:{id: emp.ID} }" @click.native="getEmployee(emp)"  class="emp-namelist" > {{ emp.FirstName }} {{ emp.LastName }}</router-link>      
        </p> -->
    <form role="db-search" class="bd-search d-flex align-items-center" style="padding:16px 0px 16px 15px;">
        <input  type="text" v-model="search" name="name" placeholder="Search..." autocomplete="off"  class="form-control "  />
         
           <router-link :to="{ path: '/Register' }" @click.native="getEmployee(emp)"  class="emp-namelist" ><b-button style="background-color:#aae4e6" >+</b-button></router-link>
         
    </form> 
    <div class="employeemsg">
        <center>
    <b-list-group v-for="emp in filterEmployee" v-bind:key="emp.ID">
      <b-list-group-item class="list"><router-link :to="{ name: 'EmployeeByID', params:{id: emp.ID} }" @click.native="getEmployee(emp)"  class="emp-namelist" > {{emp.FirstName}}</router-link>      
      </b-list-group-item>
    </b-list-group>
      <div>
      <router-link to="/Register">Register Employee</router-link></div>
    </center>
   </div>
  </div>
</template>
<script>
import EmployeeDataService from '../Service/EmployeeDataService'

export default {
  name: 'EmployeeList',
  data () {
    return {
      
      msg: 'Employee Details',
      employee: [],
      search:''
    }
  },
  
  computed:{
  filterEmployee: function (){
      return this.employee.filter((emp)=>{
        return emp.FirstName.toLowerCase().includes(this.search.toLowerCase());
      });
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
    getEmployee (emp) {
      // console.log(this.$router.params);
      this.$emit('get-employee', emp)
    }
    // EmployeeByID (emp){
    //  this.$emit("get-employee", emp);
    // }
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
.list{
  border:none;

}
</style>
