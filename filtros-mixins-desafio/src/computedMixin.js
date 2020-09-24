export default {
  computed: {
    pedroContado () {
			let arr = this.pedro.split(' ')
			let newArr = []
			for (let a of arr) {
				newArr.push(`${a} (${a.length})`)
			}

			return newArr.join(' ')
		}
  }
}