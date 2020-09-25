<template>
  <div class="usuario-editar">
    <h1>Usuário Editar</h1>
    <p><strong>Código:</strong> {{$route.params.id}}</p>
    <p><strong>Completo:</strong> {{$route.query.completo? 'Sim' : 'Não'}}</p>
    <p><strong>Língua:</strong> {{$route.query.lingua}}</p>
    <hr>
    <button primario>Confirmar</button>
    <div id="rodape">
      Curso Vue
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      confirmou: false
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmou) {
      next()
    } else {
      if (confirm('Tem certeza?')) {
        next()
      } else {
        next(false)
      }
    }
  }
}
</script>

<style>
  #rodape {
    margin-top: 1000px;
  }
</style>