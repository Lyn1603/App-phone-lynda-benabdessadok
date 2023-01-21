<template>

<h1>Journal d'appel </h1>

  <div class="journal">

    <div v-for="contact in Call" :key="contact.num">

        <CardContact :contact="contact" />
        <p class="date"> </p>


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
      
  },


  
}


}


</script>


<style scoped>

.journal{
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  gap: 15px;
}




</style>
