import Vue from 'vue';
<template>
  <div class="register">
    <center>
      <h2>{{ msg }}</h2>
    </center>
    <div class="inner">
      <div>
        <label for="firstName">First Name</label>
        <input type="text" v-model="firstName" size="50" />
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input type="text" v-model="lastName" size="50" />
      </div>
      <div>
        <label for="emailid">Email ID</label>
        <input type="text" v-model="emailid" size="50" />
      </div>
      <div>
        <label for="phoneNo">Phone Number</label>
        <input type="text" v-model="phoneNo" size="50" />
      </div>
      <div>
        <label for="dob">Date of Birth</label>
        <input type="date" v-model="dob" size="50" />
      </div>
      <div>
        <label for="id">Reporter ID</label>
        <input type="number" v-model="reportsTo" size="50" />
      </div>

      <div><input type="button" value="Save" v-on:click="save" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data () {
    return {
      msg: 'Employee Registration',

      firstName: '',
      lastName: '',
      emailid: '',
      phoneNo: '',
      dob: '00/00/0000',
      reportsTo: ''
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
