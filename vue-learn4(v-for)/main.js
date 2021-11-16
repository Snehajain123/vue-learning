const app = Vue.createApp({
	data() {
		return {
			product: 'flowers',
			image: './image/img1.jpg',
			inStock: true,
			details: ['fresh', 'decent fragnance', 'decorative'],
			variants: [
			 { id: 111, colour: 'white' },
			 { id: 222, colour: 'yellow'}
			 ]

		}
	}
})