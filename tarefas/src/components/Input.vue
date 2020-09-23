<template>
  <div class="form">
    <input type=text label="Nova tarefa?" v-model="task"/>
    <button @click="addNewTask">+</button>
  </div>
</template>

<script>
import barramento from '@/barramento'

export default {
  data () {
    return {
      task: ''
    }
  },
  methods: {
    addNewTask () {
      barramento.addTask(this.task)
    }
  }
}
</script>

<style>
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
    cursor: pointer;
	}
</style>