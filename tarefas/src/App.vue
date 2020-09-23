<template>
	<div id="app">
		<text-red>Tarefas</text-red>
		<!-- barra de progresso -->
		<app-progress-bar :progress="progress"/>
		<!-- input de tarefa -->
		<app-input/>
		<!-- novas tarefas -->
		<ul class="app-tasks">
			<app-card v-for="task in tasks" :text="task" :key="task"/>
		</ul>
	</div>
</template>

<script>
import ProgressBar from './components/ProgressBar'
import Card from './components/Card'
import Input from './components/Input'
import barramento from '@/barramento'
import TextRed from 'lib-font-colors/src'

export default {
	components: {
		AppProgressBar : ProgressBar,
		AppCard : Card,
		AppInput: Input,
		TextRed
	},
	data () {
		return {
			progressValue: 50,
			tasks: [],
			finishedTasks: []
		}
	},
	computed: {
		progress () {
			if (this.tasks.length === 0)
				return 0
			else
				return Math.ceil((this.finishedTasks.length / this.tasks.length) * 100);
		}
	},
	created() {
		barramento.whenAddTask((task) => {
			if(!this.tasks.includes(task))
				this.tasks.push(task)
		}),
		barramento.whenDeleteTask((text) => {
			let tempArray = [...this.tasks]
			tempArray = tempArray.filter(e => e != text)
			this.tasks = tempArray
		})
		barramento.whenAddFinishedTask((task) => {
			if(!this.finishedTasks.includes(task) && this.tasks.includes(task))
				this.finishedTasks.push(task)
		}),
		barramento.whenDeleteFinishedTask((text) => {
			let tempArray = [...this.finishedTasks]
			tempArray = tempArray.filter(e => e != text)
			this.finishedTasks = tempArray
		})
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
