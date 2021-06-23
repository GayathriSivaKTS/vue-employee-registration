<template>
  <div class="employeemsg">
    <center>
      <h1>{{ msg }}</h1>

      <table id="firstTable">
        <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Employee DOB</th>
          <th>Employee Email ID</th>
          <th>Edit Employee</th>
        </tr>

        <tr v-for="emp in employee" v-bind:key="emp.id">
          <td>{{ emp.id }}</td>
          <td>{{ emp.firstName }} {{ emp.lastName }}</td>
          <td>{{ emp.dob }}</td>
          <td>{{ emp.email }}</td>
          <td><button @click="goToEditEmployee()">Edit</button></td>
        </tr>
      </table>
      <div>
      <router-link to="/registration">Register Employee</router-link></div>
    </center>
  </div>
</template>

<script>
import EditEmployeeVue from './EditEmployee.vue'
export default {
  name: 'Employee',
  data () {
    return {
      employee: [
        {
          id: 101,
          firstName: 'gayathri',
          lastName: 'siva',
          email: 'gayathris@gmail.com',
          gender: 'Female',
          phone: '453245555',
          dob: '11-8-1999',
          reportsTo: 100
        },
        {
          id: 102,
          firstName: 'sangavi',
          lastName: 'ram',
          email: 'sangavir@gmail.com',
          gender: 'Female',
          phone: '2345454465',
          dob: '22-4-2000',
          reportsTo: 101
        }
      ]
    }
  },
  components: {
    'emp-edit': EditEmployeeVue
  },
  methods: {
    goToEditEmployee () {
      this.$router.push('/EditEmployee')
    }
  }
}
</script>
<style scoped>
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
</style>
