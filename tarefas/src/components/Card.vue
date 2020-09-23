<template>
  <li :class="{finished}" @click="finishedTask">
    <button @click="deleteTask">x</button>
    <span>{{ text }}</span>
  </li>
</template>

<script>
import barramento from '@/barramento'

export default {
  data () {
    return {
      finished: false
    }
  },
  props: ['text'],
  methods: {
    deleteTask() {
      barramento.deleteTask(this.text)
      barramento.deleteFinishedTask(this.text)
    },
    finishedTask() {
      if(!this.finished) {
        barramento.addFinishedTask(this.text)
        this.finished = true
      } else {
        barramento.deleteFinishedTask(this.text)
        this.finished = false
      }
    }
  }
}
</script>

<style>
  .app-tasks {
		width: 95%;
		height: 40%;
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.app-tasks li {
		width: 18%;
		height: 30%;
		background-color: #E25342;
		border-left: 10px solid #5a1c15;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.app-tasks li.finished {
		background-color: #67AA5C;
		border-left: 10px solid #22441c;
	}

	.app-tasks li button {
		width: 20px;
		height: 20px;
		border-radius: 20px;
		border: 0;
		background-color: #5a1c15;
		color: #FFF;
		position: absolute;
		right: 5px;
		top: 5px;
		outline: 0;
		cursor: pointer;
	}

	.app-tasks li.finished button {
		background-color: #22441c;
	}

  .app-tasks li.finished span {
		text-decoration: line-through;
	}
</style>