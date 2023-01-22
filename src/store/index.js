import { createStore } from 'vuex'

export default createStore({
  state: {


    contact : [



    ],

    appel :[
        

    ],

    encours:[
    
    ]

    
  },
  getters: {
  },
  mutations: {

    ajoutContact(state, contact){
      
      state.contact.push(contact)

    },

    appelContacts(state, contact){
      
      state.appel.push(contact)
      
    },

    clavierContacts(state , contact){
      
      state.encours.push(contact)

      
    }

   

  },
  actions: {
  },
  modules: {
  }
})
