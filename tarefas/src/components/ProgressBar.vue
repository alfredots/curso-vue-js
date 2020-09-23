<template>
  <div class="app-progress-bar">
    <div class="app-progress-fill" :style="{width: progress + '%'}">
    </div>
    <span class="app-progress-value">{{ progress }}%</span>
  </div>
</template>

<script>
export default {
  props: ['progress']
}
</script>

<style>
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
</style>