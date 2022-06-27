<template>
    <v-flex class="pr-3 pt-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{stock.name}} <small>(Preco: {{stock.price}})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number"></v-text-field>
                <v-btn class="green darken-3 white--text">Comprar</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
    export default{
        props:{
            stock:{type: Object, required: true}
        }
    }
</script>

<style>

</style>