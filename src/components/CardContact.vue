<template>

    <div class="contact">



            <div>

                <h2> Nom : {{contact.nom}}</h2>

                <p> Tel : {{ contact.num }}</p>


            </div>


        
        <div>

            <button class="button" @click="call"> <img :src="calling" alt="" srcset=""> </button>

        </div>

    </div>
   

    
</template>

<script>
import calling from '../assets/calling.png'

export default{


name:'CardContact',


data(){
    return{

        calling : calling

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
    
}

.contact p {
    margin-top: 30px;
}

.button {
    color: white;
    text-decoration: none;
    background-color: #4092ad;
    border-radius: 7px;
    box-shadow: 1px 1px #c6c6c4;
    margin-top: 40px;
}



</style>