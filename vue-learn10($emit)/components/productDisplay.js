app.component('product-display', {
	props: {
		premium: {
			type: Boolean,
			required: true

		}
	},
	template:
	`<div class="product-display">
		<div class="product-container">
			<div class="product-image">
				<img v-bind:src="image">
			</div>
			<div class="product-info">
				<h1>{{ title }}</h1>
				<p v-if='inStock'>in stock</p>
				<p v-else>out of stock</p>

				<p>Shipping: {{ shipping }}</p>
				<ul>
					<li v-for="detail in details">{{ detail }}</li>
				</ul>

			<div v-for="(variant, index) in variants" 
				:key="variant.id" 
				@mouseover="updateVariant(index)"
				class="color-circle"
				:style="{ backgroundColor: variant.color }">
			</div>

				<button 
				class="button"
				v-on:click="addToCart">Add to Cart</button>
			</div>
		</div>
	</div>`,
		data() {
		return {
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
			//this.cart +=1
			this.$emit('add-to-cart')   
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
		},
		shipping() {
			if(this.premium) {
				return 'free'
			}
			return 2.99
		}
	}
})