new Vue({
    el: "#desafio",
    data: {
        nome: 'Alfredo',
        idade: '23',
        linkImage: 'https://vuejs.org/images/logo.png'
    },
    methods: {
        multiplyAgeForThree: function () {
            return Number(this.idade) * 3;
        },
        randomNumber: function () {
            return Math.random();
        }
    }
})