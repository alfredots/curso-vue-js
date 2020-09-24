export default {
  data () {
    return {
      larguraBase: 0
    }
  },
  methods: {
    animar(el, done, negativo) {
      let rodada = 1
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + (negativo? -rodada * 1 : rodada * 1)
        el.style.width = `${novaLargura}%`
        rodada++
        if(rodada > 70) {
          this.larguraBase = novaLargura
          clearInterval(temporizador)
          done()
        }
      }, 20)
    },
    beforeEnter(el) {
      this.larguraBase = 0
      el.style.width = `${this.larguraBase}%`
    },
    enter(el, done) {
      this.animar(el, done, false)
    },
    beforeLeave(el) {
      this.larguraBase = 70
      el.style.width = `${this.larguraBase}%`
    },
    leave(el, done) {
      this.animar(el, done, true)
    },
  }
}