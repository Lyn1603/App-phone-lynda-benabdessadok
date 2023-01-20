<template>

<div>

    <h1> Ajouter un Contact </h1>

    <form @submit.prevent="ajoutContact" >

        <input type="text" v-model="formContact.nom" placeholder="Nom..">


        <input type="number" v-model="formContact.num" placeholder="Numéro...">


        <button class="submit" type="submit"> Ajouter ce contact  </button>

    </form>



</div>


</template>


<script>


export default{
    
    
    name : 'FormContact',

    props: [
        'contact'
   ],

   data () {
    return{

        error: false,

        formContact: {
            nom: '',
            num: ''
            },



        }
    },



    methods : {

        ajoutContact(){


            if(this.formContact.nom == "" || this.formContact.num == "" ){

                alert('veulliez remplir les champs')
            }
            if(this.contact.find(contact => contact.nom === this.formContact.nom)) return

                this.$store.commit('ajoutContact', this.formContact)

                this.error=false

                this.formContact = {
                nom: "",
                num: ""
                }


            },


    }



    
}



</script>


<style>




</style>