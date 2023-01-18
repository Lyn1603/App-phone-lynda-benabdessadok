<template>
    <div>

        <h1>{{contact.nom}}</h1>

        <span>{{ contact.num }}</span>


    </div>
    
</template>

<script>

export default{

name:'CartePerso',
props: [

'contact'

]

}

</script>