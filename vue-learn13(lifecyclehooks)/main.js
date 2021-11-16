const app = Vue.createApp({
	data() {
		return {
			product: 'flowers'
		}
	},
	created() {
    // `this` points to the vm instance
    alert('count is: ' + this.product) // => "count is: 1"
  },
  export default {
  setup() {
    // mounted
    onMounted(() => {
      console.log('Component is mounted!')
    })
  }
}
})