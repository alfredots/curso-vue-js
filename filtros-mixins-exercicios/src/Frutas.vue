<template>
  <div>
    <input type="text" v-model="fruta" @keydown.enter="adicionarFruta">
    <ul>
      <li v-for='fruta in frutas' :key="fruta">{{ fruta }}</li>
    </ul>
  </div>
</template>

<script>
import frutasMixin from './frutasMixin'

export default {
  mixins: [frutasMixin],
}
</script>

<style>

</style>