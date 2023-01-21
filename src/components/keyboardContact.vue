<template>
   <p class="list">
            {{ contacts }}
   </p>

    <div class="input">
      
    <input class="list" type="number" v-model="value" readonly/>

    
  </div>

  <div class="keyboard">

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
    background-color: #9bc1d0;
    border: solid 2px #6294a9;
    border-radius: 10px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    width: 30%;
    height: 5vh;
  }

  .keyboard{
    display: grid;
    margin-top: 2%;
    height: 30vh;
    grid-template-columns: 10% 10% 10%;
    justify-content: center;
    gap: 10px;   
  }

  .keyboard button{
    background-color: #9bc1d0;
    border: solid 2px #6294a9;
    border-radius: 10px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);

  }
  
  </style>