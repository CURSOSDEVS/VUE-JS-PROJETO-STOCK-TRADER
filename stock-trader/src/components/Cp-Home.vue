<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
   
        <v-alert :elevation="6" type="info" class="white--text mr-3 pa-4 primary">
            <span class="headline white--text font-weight-light">Você pode Salvar & Carregar os Dados</span>
        </v-alert>   
       
        <v-alert :elevation="6" type="info" class="pa-4 mt-3 success darken-1 white--text mr-3">
            <span class="headline white--text font-weight-light">Você pode Salvar & Carregar os Dados</span>
        </v-alert>
            
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