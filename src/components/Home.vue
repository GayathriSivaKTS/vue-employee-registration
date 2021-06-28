<template>
<div id=layout>
  <!-- navigation bar / header -->
<b-navbar toggleable="lg" type="dark" variant="info" >
     <b-navbar-brand href="#">Employee Portal</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">About</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <b-nav-form>
           <b-button size="sm" class="my-2 my-sm-0"  @click="goToEmployee()" type="submit">Register</b-button>
        </b-nav-form>
        </b-navbar-nav>
    </b-collapse>
</b-navbar>
<!-- sidebar -->
<b-row class="row">
  <b-col class="sidebar" sm="12" lg="2">
   <!-- search button -->
    <form role="search" class="bd-search d-flex align-items-center" style="padding:16px 0px 16px 15px;">
        <input id="bd-search-input" type="search" placeholder="Search..." autocomplete="off"  class="form-control ds-input"   style="position: relative; vertical-align: top;">
    </form>
    <emp-list>
    </emp-list>
  </b-col>
  <!-- middlebar -->
  <b-col class="middlebar" sm="12" lg="7">
    <emp-by-id ></emp-by-id>
  </b-col>
  <!-- rightbar -->
  <b-col class="rightbar " sm="12" lg="3">
    <div class="rightUp">
      rightup
    </div>
    <div class="rightDown">
      rightdown
    </div>
  </b-col> 
</b-row>
  </div>
</template>

<script>
import AboutVue from './About.vue'
import EmployeeListVue from './EmployeeList.vue'
import EmployeeDataService from '../Service/EmployeeDataService'
import EmployeeByID from './EmployeeByID.vue'

export default {
  name: 'Home', 

   data () {
    return {
      msg: 'Employee Details',
      employee: [],
      empdet:[]
    }
  },
    components: {
    'about': AboutVue,
    'emp-list': EmployeeListVue,
       'emp-by-id': EmployeeByID
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
    // onGetEmployees(){
    //   this.empdet=emp
    // }
  },
  mounted () {
    this.getEmployees()
  }

}
</script>
<style scoped>
.row{
  width: 100vw;
  height: 90vh;
  overflow-x:hidden;
  overflow-y:hidden;
}
.sidebar{
  /* margin-left: 10px; */
  padding-left: 15px;
  border-right:1px solid black;
height: 90vh;
}
.middlebar{
  height: inherit;
  border-right:1px solid blue;
}
.rightbar{
  padding: 0;
 
  height: 90vh;
}
.rightUp{
  border-bottom: 1px solid black;
}
.rightUp,.rightDown{
height: 45vh;
margin-left: 5px;
}
#col1{
  background-color: aqua;
  min-height: 100vh;
  padding-left: 2px;
  border: 2px strong green;
}
#col2{
  background-color: aquamarine;
  min-height: 100%;
   min-height: 100vh;
  
    border: 2px green;
}
#col3{
  background-color: bisque;
  min-height: 100%;
    border: 2px green;
}
</style>
