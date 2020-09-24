export default {
  data () {
    return {
      fruta: '',
      frutas: ['laranja','banana','uva']
    }
  },
  methods: {
    adicionarFruta() {
      this.frutas.push(this.fruta)
    }
  }
}