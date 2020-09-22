<template>
	<div id="app">
		<h1>Tarefas</h1>
		<!-- barra de progresso -->
		<div class="app-progress-bar">
			<div class="app-progress-fill">
			</div>
			<span class="app-progress-value">100%</span>
		</div>
		<!-- input de tarefa -->
		<div class="form">
			<input type=text label="Nova tarefa?"/>
			<button>+</button>
		</div>
		<!-- novas tarefas -->
		<ul class="app-tasks">
			<li>teste</li>
		</ul>
	</div>
</template>

<script>
export default {

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

	.app-progress-bar {
		width: 90%;
		height: 20px;
		border: 1px solid #ffffff;
		border-radius: 8px;
		margin-bottom: 16px;
		position: relative;
	}

	.app-progress-fill {
		width: 30%;
		height: 100%;
		background-color: #67AA5C;
		border-radius: 8px;
		align-self: flex-start;
	}

	.app-progress-value {
		position: absolute;
		top: 0;
		left: 50%;
	}

	.form input {
		width: 300px;
		height: 40px;
		background-color: transparent;
		color: #FFF;
		font-size: 16px;
		outline: 0;
		border: 1px solid #FFF;
		border-radius: 8px 0px 0px 8px;
	}

	.form button {
		width: 40px;
		height: 44px;
		background-color: transparent;
		color: #FFF;
		font-size: 16px;
		outline: 0;
		border: 1px solid #FFF;
		border-radius: 0px 8px 8px 0px;
	}

	.app-tasks {
		width: 95%;
		height: 40%;
		list-style: none;
	}

	.app-tasks li {
		width: 18%;
		height: 30%;
		background-color: #67AA5C;
		border-left: 10px solid #22441c;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;

	}

</style>
