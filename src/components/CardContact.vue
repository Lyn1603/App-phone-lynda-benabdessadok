<template>
    <div>

        <h1 class="nom">{{contact.nom}}</h1>

        <span class="num">{{ contact.num }}</span>

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

        this.$store.commit('appelContacts',this.contact.num)


    }


}
    
}




</script>