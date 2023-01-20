<template>

<div class="formContact">

    <h1> Ajouter un Contact </h1>

    <form  @submit.prevent="ajoutContact" >

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


<style scoped>

.formContact{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 1rem;
    padding-bottom: 1rem;
    background-color: #eaeae8;
    text-align: center;
    border: solid 2px #89cce8;
    border-radius: 10px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
}


form{
   gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
form input,button{
    border-radius: 9px;
    border: #89cce8 2px solid;
}



</style>