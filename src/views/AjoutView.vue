<template>

    <div class="contact">

        <div class="form">

        <h1> Création de contacts </h1>

        <FormContact :contact="AddContact"  />

        </div>

    </div>
   

    
</template>

<script>

import FormContact from '@/components/FormContact.vue'



  export default{

      name: 'AjoutView',


  
  components : {

      FormContact,
  }, 
  
  
  computed: {

      AddContact(){
          
          return this.$store.state.contact
      }
  }

  
 
}

</script>

<style scoped>

.contact{

    display: flex;
    justify-content: center;
}



</style>