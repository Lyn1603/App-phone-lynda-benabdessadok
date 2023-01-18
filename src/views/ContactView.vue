<template>
  <div>
      <h1> Listes des contacts </h1>

      <div class="cartes">

            <div v-for="contact in AddContact" :key="contact.nom">

          <CardContact :contact="contact" />

          </div>

      </div>
      
          <FormContact :contact="AddContact"  />

        </div>

  
 
</template>


<script>

import FormContact from '@/components/FormContact.vue'
import CardContact from '@/components/CardContact.vue'



  export default{

      name: 'ContactView',


  
  components : {

      FormContact,
      CardContact,
  }, 
  
  
  computed: {

      AddContact(){
          
          return this.$store.state.contact
      }
  }

  
 
}

</script>
