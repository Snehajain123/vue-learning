const app = Vue.createApp({
	data() {
		return {
			cart:1,
			premium: true
		}
	},
	methods: {
		updateCart() {
			this.cart += 1
		}

	}	
})

