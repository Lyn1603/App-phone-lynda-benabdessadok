<template>
    <div class="contact">

        <h1 class="nom"> Nom : {{contact.nom}}</h1>

        <p class="num"> Tel : {{ contact.num }}</p>

        <button @click="call"> {{calling}} </button>


    </div>
    
</template>

<script>


export default{

name:'CardContact',


data() {
        return {
            calling: './img/calling.png'
        }
    },


props: [

'contact'

],

methods :{

    call(){

        this.$store.commit('appelContacts',this.contact)



    },


}
    
}




</script>


<style scoped>

.contact {
    display: flex;
    flex-direction: row;
    gap: 30px;
    background-color: #9bc1d0;
    border: solid 2px #6294a9;
    justify-content: center;    
    border-radius: 10px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    width: 36vw;
}

.contact p {
    margin-top: 30px;
}

.contact button {
    color: white;
    text-decoration: none;
    background-color: #4092ad;
    border-radius: 7px;
    box-shadow: 1px 1px #c6c6c4;
    height: 50%;
    margin-top: 4.75%;
}

</style>