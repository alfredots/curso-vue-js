<template>
  <div class="usuario">
    <h1>Usuário</h1>
    <hr>
    <router-view />
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaInicio () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>