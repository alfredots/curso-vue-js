<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="Nome completo (Nome e Sobrenome)">
					<input type="text" placeholder="nome" v-model="usuario.nome"/>
					<br>
					<input type="text" placeholder="sobrenome" v-model="usuario.sobrenome" />
				</Rotulo>
				<Rotulo nome="Email">
					<input type="text" placeholder="email" v-model="usuario.email" />
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" placeholder="senha" v-model="usuario.senha" />
				</Rotulo>
				<Rotulo nome="Armazenar Dados?">
					<Escolha v-model="escolha"/>
				</Rotulo>
				<button @click.prevent="enviar">Enviar</button>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Nome completo (Nome e Sobrenome)">
					<nome-completo :nome="usuario.nome" :sobrenome="usuario.sobrenome"/>
				</Rotulo>
				<Rotulo nome="Email">
					<span>{{ usuario.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ usuario.senha }}</span>
				</Rotulo>
				<Rotulo nome="Armazenar Dados?">
					<span>{{ escolha }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha, NomeCompleto },
	data () {
		return {
			enviado: false,
			escolha: false,
			usuario: {}
		}
	},
	methods: {
		enviar() {
			this.enviado = !this.enviado
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
