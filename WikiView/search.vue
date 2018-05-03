<template>
<form @submit.prevent="saveProduct">
  <div>
    <div class="title">
      <input type="text" placeholder="Search for" v-model="model.name" v-validate="'required'" name="name" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data () {
      return {
        msg: 'Welcome to the Search Page'
      }
    }
  }
</script>
<script>
export default {
  methods: {
    saveProduct() {
      // prints all the errors
      console.log(this.errors);
    }
  }
}
</script>