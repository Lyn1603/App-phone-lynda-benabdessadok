<template>
    <div class="contact">

        <h1 class="nom"> Nom : {{contact.nom}}</h1>

        <p class="num"> Tel : {{ contact.num }}</p>

        <p class="date"> {{ date }}</p>

        <button @click="call"> Appeler </button>


    </div>
    
</template>

<script>


export default{

name:'CardContact',

data() {
            return {
                date: new Date()
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
    background-color: #eaeae8;
    border: solid 2px #89cce8;
    justify-content: center;    
    border-radius: 10px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    width: 60vw;
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
    margin-top: 5%;
}

</style>