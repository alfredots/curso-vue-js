new Vue({
	el: '#desafio',
	data: {
		classeCSS:'',
		aplicarDestaque: false,
		cor: 'red',
		valorProgresso: 0
	},
	computed: {
		meuEstilo () {
			return {
				border: '1px solid #000',
				width: '300px',
				height: '50px'
			}
		},
		meuEstilo2 () {
			return {
				backgroundColor: 'red',
				width: this.valorProgresso + '%',
				height: '100%'
			}
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				let flag = true
				const div = document.getElementById('efeito')
				if(flag) {
					div.classList.toggle('destaque')
				} else {
					div.classList.toggle('encolher')
				}
			},3000)
		},
		iniciarProgresso() {
			setInterval(() => {
				if(this.valorProgresso < 100) {
					this.valorProgresso = this.valorProgresso + 10;
				} else {
					clearInterval();
				}
			},1000)
		}
	}
})
