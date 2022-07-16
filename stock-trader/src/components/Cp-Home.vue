<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
        <v-sheet :elevation="6" class="pa-4 primary" >
            <v-icon class="white--text mr-3" role="img">info</v-icon>
            <span class="headline white--text font-weight-light">Você pode Salvar & Carregar os Dados</span>
        </v-sheet>
        <v-sheet :elevation="6" class="pa-4 success darken-1 mt-3" >
            <v-icon class="white--text mr-3" role="img">info</v-icon>
            <span class="headline white--text font-weight-light">Você pode Salvar & Carregar os Dados</span>
        </v-sheet>
        <v-divider class="my-4"></v-divider>
        <p class="display-1"><strong>Seu Saldo :</strong>{{ funds}}</p>
    </div>
</template>

<script>
   
    export default{
        computed:{
            funds(){
               return this.$store.getters.funds
            }
        }
    }
</script>

<style>

</style>