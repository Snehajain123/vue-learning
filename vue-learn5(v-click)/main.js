const app = Vue.createApp({
	data() {
		return {
			cart:0,
			product: 'flowers',
			image: './image/img1.jpg',
			inStock: true,
			details: ['fresh', 'decent fragnance', 'decorative'],
			variants: [
			 { id: 111, colour: 'white', image: './image/img1.jpg' },
			 { id: 222, colour: 'yellow', image: './image/img2.jpg'},
			 ]

		}
	},
	methods: {
		addToCart() {
			this.cart +=1
		},
		updateImage(variantImage) {
			this.image = variantImage
		}
	}
})