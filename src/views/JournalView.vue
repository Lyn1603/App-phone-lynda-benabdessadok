<template>
  <div class="about">
    <h1>Journal d'appel </h1>

    <div v-for="contact in Call" :key="contact.num">

        <CardContact :contact="contact" />


    </div>


  </div>
</template>


<script>

import CardContact from '@/components/CardContact.vue'


export default{


  name : 'JournalView',

  components : {

      CardContact,
  }, 

  
  computed: {

    Call(){
    
    return this.$store.state.appel
      
  }
}


}


</script>
