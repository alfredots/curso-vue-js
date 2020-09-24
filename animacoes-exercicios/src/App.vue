<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar mensagem</b-button>

		<b-select v-model="tipoAnimacao" class="my-3">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
		</transition>

		<hr class="my-3">

		<transition name="fade" appear>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>
		<transition name="slide" type="animation" appear>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>
		<transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake"
		>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>

		<hr class="my-3">
		
		<b-button variant="primary" class="mb-4" @click="exibir2 = !exibir2">Mostrar mensagem 2</b-button>

		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled"
		>
			<div class="caixa" v-show="exibir2"></div>
		</transition>

		<hr>
		<div class="mb-4">
			<b-button variant="primary" class="mr-4" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
			<b-button variant="primary" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertência</b-button>
		</div>

		<transition name="fade">
			<component :is="componenteSelecionado"/>
		</transition>

		<hr>
		<b-button variant="primary" class="mb-4" @click="adicionarAluno">AdicionarAluno</b-button>
		<transition-group name="slide">
			<b-list-group v-for="(aluno, posicao) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(posicao)">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>
		
	</div>
</template>

<script>
import AlertaInfo from './AlertaInfo'
import AlertaAdvertencia from './AlertaAdvertencia'

export default {
	components: {AlertaInfo, AlertaAdvertencia},
	data () {
		return {
			alunos: ['Maria','Fernanda','Mateus','Paulo'],
			msg: 'Uma mensagem para o usuário !',
			exibir: false,
			exibir2: false,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo'
		}
	},
	methods: {
		adicionarAluno() {
			const newAluno = Math.random().toString(36)
			this.alunos.push(newAluno)
		},
		removerAluno(posicao) {
			this.alunos.splice(posicao, 1)
		},
		animar(el, done, negativo) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + (negativo? -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30) {
					this.larguraBase = novaLargura
					clearInterval(temporizador)
					done()
				}
			}, 1)
		},
		beforeEnter(el) {
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done) {
			this.animar(el, done, false)
		},
		afterEnter(el) {
			console.log('afterEnter')
		},
		afterCancelled() {
			console.log('enterCancelled')
		},
		beforeLeave(el) {
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done) {
			this.animar(el, done, true)
		},
		afterLeave(el) {
			console.log('afterLeave')
		},
		leaveCancelled() {
			console.log('leaveCancelled')
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}

</style>
