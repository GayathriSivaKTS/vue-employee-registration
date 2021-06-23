<template>
  <div class="aboutmsg">
    <center>
      <h1>{{ msg }}</h1>
    </center>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'This is About page'
    }
  }
}
</script>
