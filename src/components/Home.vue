<template>
<div id=layout>
  <!-- navigation bar / header -->
<b-navbar toggleable="lg" type="dark" style="background-color:#aae4e6"  >
     <b-navbar-brand href="#" style="padding-left:15px">Employee Portal</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">About</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="navbar-nav flex-row">
        <b-nav-form>
           <b-button size="sm" class="my-2 my-sm-0"  @click="goToRegister()" type="submit">Register</b-button>
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
         <b-button style="background-color:#aae4e6" @click="goToRegister()" >+</b-button>
    </form>
    <emp-list v-on:get-employee="onGetEmployee">
    </emp-list>
  </b-col>
  <!-- middlebar -->
  <b-col class="middlebar" sm="12" lg="10">
    <registration v-if="!!empreg" :empreg="empreg" v-on:close-registration="onCloseRegistration"></registration>
      
    <router-view  v-if="!!empdet" :empdet="empdet" v-on:close-employee="onCloseEmployee"></router-view>

    
  </b-col>
  <!-- rightbar -->
  <!-- <b-col class="rightbar " sm="12" lg="3">
    <div class="rightUp">
      rightup
    </div>
    <div class="rightDown">
      rightdown
    </div>
  </b-col>  -->
</b-row>
  </div>
</template>

<script>
import AboutVue from './About.vue'
import EmployeeListVue from './EmployeeList.vue'
import EmployeeDataService from '../Service/EmployeeDataService'
import EmployeeByID from './EmployeeByID.vue'
import Registration from './Registration.vue'

export default {
  name: 'Home', 

   data () {
    return {
      msg: 'Employee Details',
      employee: [],
      empdet: undefined,
      empreg:undefined
    }
  },
    components: {
    'about': AboutVue,
    'emp-list': EmployeeListVue,
       'emp-by-id': EmployeeByID,
       'registration': Registration
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
    onGetEmployee (emp) {
      this.empdet = emp
    },
    onCloseEmployee (emp) {
      this.empdet = emp
    },
  goToRegister () {
 this.empreg = 'yes'
  },
   onCloseRegistration (emp) {
      this.empreg = emp
    }

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
  border-right:1px solid rgb(0, 0, 0);
height: 90vh;
}
.middlebar{

  height: inherit;
  
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
.navbar-nav{
  float: right;
}
</style>
