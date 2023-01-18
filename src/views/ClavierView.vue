<template>
  <div class="keyboard">
    <input
          type="text"
          class="form-control"
          v-model="value"
          id="txtBox"
          placeholder="Composer votre numéro"
        />
    <button v-for="key in keys" :key="key" @click="press(key)">{{ key }}</button>
    <button  @click="clear">&larr;</button>
    <button  @click="clear('all')">C</button>
    <button @click="showcontact"> Call </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: '',
      keys: [...Array(10).keys()],
      
    };
  },
  methods: {
    
    press(key) {
      this.value = `${this.value}${key}`;
      // if(this.value >=  10 ){
      //   alert('le numéro ne doit pas dépasser 10 chiffres.')
      // }
    },


    clear(type) {
      if (type === 'all') this.value = '';
      else this.value = this.value.substring(0, this.value.length - 1);
    },


    showcontact(){
      if (this.key === this.$store.state.contact) {

        alert('un num est associé à ce que vous avez taper')
        
      }
    }
  },
  
};
</script>

<style scoped>

</style>