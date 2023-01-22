<template>

<div class="formContact">

    <h1> Ajouter un Contact </h1>

    <form  @submit.prevent="ajoutContact" >

        <input type="text" v-model="formContact.nom" placeholder="Nom.." maxlength="10">


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


<style scoped>

.formContact{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    margin: 1rem;
    padding-bottom: 1rem;
    background-color: #9bc1d0;
    text-align: center;
    border: solid 2px #6294a9;
    border-radius: 10px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
}


form{
   gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
form input,button{
    background-color: #73b2cb;
    border-radius: 9px;
    border: #6294a9 2px solid;
}



</style>