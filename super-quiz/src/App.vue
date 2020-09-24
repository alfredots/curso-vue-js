<template>
	<div id="app">
		<h1>Super Quiz</h1>
		<transition 
			mode="out-in"
			enter-active-class="animated flipInY"
			leave-active-class="animated flipOutY"
		>
			<Result v-if="showResult" :answer="answer" :escolherPergunta="escolherPergunta"/>
			<Question v-else :question="question" :checkAnswerIsCorrect="checkAnswerIsCorrect"/>	
		</transition>	
	</div>
</template>

<script>
import Result from './components/Result.vue'
import Question from './components/Question.vue'
import questions from '@/util/questions'
import animacaoMixin from './mixin/animacaoMixin'

export default {
	components: {
		Result,
		Question
	},
	mixins: [animacaoMixin],
	computed: {
			question () {
					const indexQuestion = Math.floor(Math.random() * (5 - 0) + 0)
					return questions[indexQuestion]
			}
	},
	data () {
		return {
			showResult: false,
			answer: true
		}
	},
	methods: {
		escolherPergunta() {
			this.showResult = false
		},
		checkAnswerIsCorrect(result) {
				this.showResult = true
				if (result) {
						this.answer = true
				} else {
						this.answer = false
				}
		}
	}
}
</script>

<style>
body {
	background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
	font-family: 'Oswald', sans-serif;
	color: #FFF;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}

@keyframes flip-out {
	from { transform: rotateY(0deg); }
	to { transform: rotateY(90deg); }
}

@keyframes flip-in {
	from { transform: rotateY(90deg); }
	to { transform: rotateY(0deg); }
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}

.flip-leave-active {
	animation: flip-out 0.3s ease;
}
</style>
