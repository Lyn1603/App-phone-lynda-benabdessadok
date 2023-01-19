<template>
    <div class="keyboard">
        <ul>
            {{ contacts }}
        </ul>
    <input type="text" v-model="value"/>
      <button v-for="key in keys" :key="key" @click="press(key)">{{ key }}</button>
      <button  @click="clear">&larr;</button>
      <button  @click="clear('all')">Tout effacer</button>

    </div>

  </template>
  
  <script>

  
  export default {

    name : 'KeyboardContact',

    data() {
      return {
        value: '',
        keys: [...Array(10).keys()],
        contacts:[

        this.$store.state.contact

        ]
        
      };
    },

   
  
 
    methods: {
      
      press(key) {
        this.value = `${this.value}${key}`;
        if(this.value.contains(this.$store.state.contact)){
            alert('numéro trouvé ! ')
        }
        
      },
  
  
      clear(type) {
        if (type === 'all') this.value = '';
        else this.value = this.value.substring(0, this.value.length - 1);
      },

      
    },
    
  };
  </script>
  
  <style scoped>
  
  </style>