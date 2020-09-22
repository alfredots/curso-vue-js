new Vue({
	el: '#desafio',
	data: {
        iniciar: false,
        vidaJogador: 100,
        vidaMonstro: 100,
        logs: []
	},
	computed: {
	},
	methods: {
        ataque() {
            const ataqueMonstro = Math.floor(Math.random() * (15 - 12) + 12);
            const ataqueJogador = Math.floor(Math.random() * (10 - 8) + 8);
            this.vidaJogador = this.vidaJogador - ataqueMonstro;
            this.vidaMonstro = this.vidaMonstro - ataqueJogador;
            this.logs.unshift(`jogador atingiu o monstro com ${ataqueJogador}`);
            this.logs.unshift(`monstro atingiu o jogador com ${ataqueMonstro}`);
        },
        especial() {
            const ataqueMonstro = Math.floor(Math.random() * (15 - 12) + 12);
            const ataqueJogador = Math.floor(Math.random() * (16 - 12) + 12);
            this.vidaJogador = this.vidaJogador - ataqueMonstro;
            this.vidaMonstro = this.vidaMonstro - ataqueJogador;
            this.logs.unshift(`jogador atingiu o monstro com ${ataqueJogador}`);
            this.logs.unshift(`monstro atingiu o jogador com ${ataqueMonstro}`);
        },
        curar() {
            const ataqueMonstro = Math.floor(Math.random() * (8 - 6) + 6);
            const cura = Math.floor(Math.random() * (16 - 12) + 12);
            this.vidaJogador = this.vidaJogador + cura;
            this.vidaJogador = this.vidaJogador - ataqueMonstro;
            this.logs.unshift(`jogador se curou com valor de ${cura}`);
            this.logs.unshift(`monstro atingiu o jogador com ${ataqueMonstro}`);
        },
        desistir() {
            this.vidaJogador = 100;
            this.vidaMonstro = 100;
            this.logs = [];
            this.iniciar = !this.iniciar;
        }
	}
})
