const app = Vue.createApp({

    data() {
        return {
            textOne: '',
            textTwo: ''
        };
    },

    methods: {
        showAlert() {
            alert('btn pressed.')
        },

        changeTextOne(event) {
            this.textOne = event.target.value
        },

        changeTextTwo(event) {
            this.textTwo = event.target.value
        }
    }
})


app.mount('#app')