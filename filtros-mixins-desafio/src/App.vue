<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<span> {{ text1 | virgulas }} </span>
		<hr>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<span> {{ pedro | contar }} </span>
		<hr>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<span> {{ textoVirgulado }} </span>
		<br>
		<span> {{ pedroContado }} </span>
		<hr>
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<span> {{ pedroContado }} </span>
	</div>
</template>

<script>
import computedMixin from './computedMixin'

export default {
	data () {
		return {
			text1: 'lorem ipsum teste teste',
			pedro: 'Pedro é legal'
		}
	},
	mixins: [computedMixin],
	computed: {
		textoVirgulado () {
			return this.text1.split(' ').join(',')
		},
	},
	filters: {
		virgulas (valor) {
			return valor.split(' ').join(',')
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
</style>
