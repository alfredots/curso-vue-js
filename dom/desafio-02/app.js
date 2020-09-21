new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('exibir alerta')
        },
        salvarValor(event) {
            this.valor = event.target.value
        }
    }
})