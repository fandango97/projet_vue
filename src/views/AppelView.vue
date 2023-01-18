<template lang="">
    <div>
        <h1>Liste des Appels</h1>
        <div v-for="journals in journal" :key="journals.contact">
        {{journals.contact.pseudo}}
        {{journals.contact.numero}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppelView',
    computed: {
        journal(){
            return this.$store.state.journal
        }
    }
}
</script>
<style lang="">
    
</style>