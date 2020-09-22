import Vue from 'vue'

export default new Vue({
    methods: {
        selecionarUsuario(usuario) {
            this.$emit('selecionoUsuario', usuario)
        },
        quandoSelecionarUsuario(callback) {
            this.$on('selecionoUsuario', callback)
        }
    }
})