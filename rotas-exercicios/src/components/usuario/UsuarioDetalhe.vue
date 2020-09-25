<template>
  <div class="usuario-detalhe">
    <h1>Usuario Detalhe</h1>
    <p><strong>Código:</strong> {{id}}</p>
    <!-- `/usuario/${id}/editar` -->
    <router-link 
      tag="button"
      class="mb-4" 
      primario 
      :to="{
        name: 'editarUsuario', 
        params: $route.params,
        query: { completo: true, lingua: 'pt' },
        hash: '#rodape'
      }">
        Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  beforeRouteEnter (to, from, next) {
    console.log('dentro do componente - usuário detalhe')
    const autenticado = true
    autenticado ? next() : next(false)
  }
}
</script>

<style>

</style>