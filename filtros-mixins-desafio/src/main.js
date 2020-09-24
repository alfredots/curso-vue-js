import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contar', function(valor) {
	let arr = valor.split(' ')
	let newArr = []
	for (let a of arr) {
		newArr.push(`${a} (${a.length})`)
	}

	return newArr.join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
