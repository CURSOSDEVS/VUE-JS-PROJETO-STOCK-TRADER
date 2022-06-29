<template>
    <v-flex class="pr-3 pt-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{stock.name}} <small>(Preco: {{stock.price}})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number"
                            v-model.number="quantity"></v-text-field>
                <v-btn class="green darken-3 white--text"
                        :disabled = 'quantity <=0 || !Number.isInteger(quantity)'
                        @click="byStock()">Comprar</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
    export default{
        props:{
            stock:{type: Object, required: true}
        },
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            byStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                console.log(order)
                this.quantity = 0
            }
        },
    }
</script>

<style>

</style>