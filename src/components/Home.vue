
<template>
  <div class="homemsg">
    <center>
      <h1>{{ msg }}</h1>

      <div>
        <button @click="goToEmployee()">Employee</button>
     <a :href = "hreflink" target = "_blank">Click Me </a>
      </div>
    </center>
    <!-- <router-link v-bind:to = "{path:'/emp', query: { name: 'Gayathri Siva' }}">Employee Name</router-link> -->
    <!-- <router-link :to="{ name: 'employee' }" @click.native="employee()"
        ><i class="fa fa-user"></i
      ></router-link> -->
  </div>
</template>

<script>
import EmployeeVue from './Employee.vue'
// const Emp = { template: "<div This is Employee Page</div>" };
// const routes = [{ path: "/Emp", component: EmployeeVue }];
// const router = new VueRouter({ routes });
export default {
  name: 'Home',
  data () {
    return {
      msg: 'This is home page',
      hreflink: 'http://www.google.com'
    }
  },
  components: {
    emp: EmployeeVue
  },
  methods: {
    goToEmployee () {
      this.$router.push('/employee')
    }
  }
}
</script>
