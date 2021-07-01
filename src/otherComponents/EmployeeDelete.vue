<template>
  <div class="register">
<b-alert  variant="danger" show><p>Are you sure want to Delete Employee</p>
    <b-button @click="deleteemp" variant="danger">Yes,Delete</b-button>
    <b-button variant="info" @click="goToBackEmployee()">No</b-button>
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
          // this.$router.push({ name: "Employee" })
        })
        .catch(e => {
          console.log(e)
        })
 },
   goToBackEmployee () {
    this.$emit("close-employee", undefined);
  }

  }
}
</script>
<style scoped>
.inner{
  align-content: center;
}

.register {
  align-content: center;
  
  display: block;
  margin-left: auto;
  margin-right: auto;
   
  border-collapse:separate;
    
    border-radius:12px;
    -moz-border-radius:12px;
  width: 30vw;
  border-radius: 2px;

  padding: 5px;
}

</style>
