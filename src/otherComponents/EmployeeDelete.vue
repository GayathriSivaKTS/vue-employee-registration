<template>
  <div class="register">
<b-alert  variant="danger" show><p>Are you sure want to Delete Employee</p>
    <button @click="deleteemp" class="btn btn-success">Submit</button>
</b-alert>
  </div>
</template>

<script>
import EmployeeDataService from '../Service/EmployeeDataService'

export default {
  name: 'EmployeeDelete',
 
  data() {
    return {
      id: this.$route.params.id
     
      // id:this.$route.params.id,
  
    }
  },
  methods: {
    deleteemp () {
      EmployeeDataService.delete(this.id)
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
