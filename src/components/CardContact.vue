<template>
    <div>

        <h1 class="nom">{{contact.nom}}</h1>

        <span class="num">{{ contact.num }}</span>

          <button @click="Calling"> Appeler </button>



    </div>
    
</template>

<script>


export default{

name:'CartePerso',
props: [

'contact'

],


methods : {
    
}

    
}



</script>