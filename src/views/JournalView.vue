<template>
<div class="global">

  <h1>Journal d'appel </h1>

  <div class="journal">

    <div v-for="contact in Call" :key="contact.num">

        <CardContact :contact="contact" />
        <p class="date"> Date : {{ date }} </p>



    </div>


  </div>


</div>

</template>


<script>

import CardContact from '@/components/CardContact.vue'


export default{


  name : 'JournalView',

  data() {
            return {
                date: new Date()
            }
        },

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
  align-items: center;
  gap: 15px;

}

.date{
  text-align: center;

}




</style>
