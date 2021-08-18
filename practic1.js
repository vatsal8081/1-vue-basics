const app = Vue.createApp({

    data() {
        return {
            user: {
                name: 'vatsal',
                age: 23
            },
            imgSrc: 'https://picsum.photos/200/300'
        };
    },

    methods: {

        getFavNum() {
            return Math.random()
        }

    }
})


app.mount('#app')