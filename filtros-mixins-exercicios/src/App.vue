<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<span> {{ cpf | cpf | inverter }}</span>
		<br>
		<input type="text" :value="cpf | cpf">
		<Frutas/>
		<hr/>
		<div>
			<input type="text" v-model="fruta" @keydown.enter="adicionarFruta">
			<ul>
				<li v-for='fruta in frutas' :key="fruta">{{ fruta }}</li>
			</ul>
  </div>
	</div>
</template>

<script>
import Frutas from './Frutas'
import frutasMixin from './frutasMixin'

export default {
	components: {
		Frutas
	},
	mixins: [frutasMixin],
	filters: {
		cpf(valor) {
			const arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
	data () {
		return {
			cpf: '60835363325'
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
	font-size: 2.5rem;
	
}

input {
	font-size: 2.5rem;
}
</style>
