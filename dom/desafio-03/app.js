new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: 'teste'
    },
    watch: {
        valor () {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});