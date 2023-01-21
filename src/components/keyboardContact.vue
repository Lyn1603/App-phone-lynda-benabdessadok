<template>
    <div class="input">
      
    <input type="number" v-model="value" readonly/>

    
  </div>

  <div class="keyboard">

    <button v-for="key in keys" :key="key" @click="press(key)">{{ key }}</button>
      <button  @click="clear">&larr;</button>
      <button  @click="clear('all')">Tout effacer</button>
      <ul>
            {{ contacts }}
      </ul>



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
        

      },
  
  
      clear(type){
        if (type === 'all') this.value = '';
        else this.value = this.value.substring(0, this.value.length - 1);
      },

      
    },
    
  };
  </script>
  
  <style scoped>

  .input{
    display: flex;
    flex-direction: wrap;
    justify-content: center;
    font-size: large;
    
  }

  .input input{
    background-color: #6eb5d1;
    border: solid 2px #6294a9;
    border-radius: 10px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    width: 30%;
    height: 10vh;
  }

  .keyboard{
    display: grid;
    height: 70vh;
    margin-top: 2%;
    grid-template-columns: 10% 10% 10%;
    grid-template-rows: 10% 10% 10%;
    justify-content: center;
    gap: 10px;   
  }

  .keyboard button{
    background-color: #6eb5d1;
    border: solid 2px #6294a9;
    border-radius: 10px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);

  }
  
  </style>