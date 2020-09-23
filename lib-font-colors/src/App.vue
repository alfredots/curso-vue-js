<template>
  <div id="app">
    <TextRed>
      Teste um dois três
    </TextRed>
  </div>
</template>

<script>
import TextRed from './components/TextRed'

export default {
  name: 'App',
  components: {
    TextRed
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
