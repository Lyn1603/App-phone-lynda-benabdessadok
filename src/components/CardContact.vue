<template>
    <div class="contact">

        <h1 class="nom"> Nom : {{contact.nom}}</h1>

        <span class="num"> Numéro : {{ contact.num }}</span>

        <button @click="call"> Appeler </button>


    </div>
    
</template>

<script>


export default{

name:'CardContact',

props: [

'contact'

],

methods :{

    call(){

        this.$store.commit('appelContacts',this.contact)


    }


}
    
}




</script>


<style scoped>

.contact {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 90%;
    background-color: #eaeae8;
    text-align: center;
    border: solid 2px #89cce8;
    border-radius: 10px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
}


.contact button {
    color: white;
    font-size: 1rem;
    text-decoration: none;
    background-color: #4092ad;
    border-radius: 7px;
    box-shadow: 1px 1px #c6c6c4;
}

</style>