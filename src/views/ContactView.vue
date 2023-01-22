<template>
  <div class="global">
      

      <div class="cartes">
        <h1> Listes des contacts </h1>

            <div v-for="contact in AddContact" :key="contact.nom">

               

          <CardContact :contact="contact" />

 
          </div>


          
      </div>

        

  </div>

  <router-link class="plus" to="/creation">+</router-link>
 
</template>


<script>

import CardContact from '@/components/CardContact.vue'



  export default{

      name: 'ContactView',

      


  
  components : {

      CardContact,
  }, 
  
  
  computed: {

      AddContact(){
          
          return this.$store.state.contact
      }
  }

  
 
}

</script>
<style scoped>
.global{

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: wrap;
    gap: 90px;
    
}

.plus{

    text-decoration: none;
    background-color: #9bc1d0;
    border: solid 2px #6294a9;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    color: black;
    border-radius: 5px;
    width: 40px;



}

</style>