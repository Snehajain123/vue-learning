const app = Vue.createApp({
	data() {
		return {
			cart:0,
			product: 'flowers',
			brand: 'european',
			selectedVariant: 0,
			details: ['fresh', 'decent fragnance', 'decorative'],
			variants: [
			 { id: 111, color: 'white', image: './image/img1.jpg', quantity: 50 },
			 { id: 222, color: 'yellow', image: './image/img2.jpg', quantity: 0},
			 ]

		}
	},
	methods: {
		addToCart() {
			this.cart +=1
		},
		updateVariant(index) {
			this.selectedVariant = index
		}
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product
		},
		image() {
			return this.variants[this.selectedVariant].image
		},
		inStock() {
			return this.variants[this.selectedVariant].quantity
		}
	}
})