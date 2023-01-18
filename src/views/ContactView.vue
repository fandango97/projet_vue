<template lang="">
    <div>
        <h1>Liste des Contacts</h1>
    </div>
    <div v-for="contact in contacts" :key="contact.pseudo" class="contact">
        <h2>{{contact.pseudo}}</h2>
        <span>{{contact.numero}}</span>
        <button @click="ajoutJournal(contact)">Appeler</button>
    </div>
</template>

<script>
export default {
    name: 'ContactView',
    computed: {
        contacts(){
            return this.$store.state.contacts
        }
    },
    methods: {
        ajoutJournal(contact){
            this.$store.commit('ajoutJournal', {
                contact,
            })
        }
    }
}
</script>
<style lang="">
    
</style>