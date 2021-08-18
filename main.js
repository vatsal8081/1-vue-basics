
// 1
// gear we are creating instance of vue app by createApp method which can get all conf and data 
// as an object inside it
const vueApp = Vue.createApp({

    // as you can notice data property in vue is function itself and also all data
    // property in vue must return a object inside that object we can create
    // any type of data we want
    data() {
        return {
            greet: "Hello there.",
            vueDoc: "https://v3.vuejs.org/",
            counter: 0,
            myName: ''
        };
    },

    // as you can notice methods is a object in vue which contains elements which has to be
    // functions 
    methods: {

        randomString() {
            return Math.random() > 0.5
                ? 'its grater'
                : 'its lower'
        },

        // 6
        test() {
            // we can access any property of vue using this keyword, we can access data
            // properties by this.greet we can access methods with help of this.randomString
            // and many more. but you will wonder that this in function will point to parent
            // that is calling the function then how we are able access the properties of vue 
            // app hear. so in background vue will create some magic and create global object
            // so by doing this we can able to point all properties of vue object 
        },

        addOrReduce(type) {
            type === 'add' ? this.counter++ : this.counter--
        },

        // as a base rule in js if we are passing function to execute on any event that
        // function will get event object by default every time so we don't have to pass
        // it by our own you can see in first input field we are not passing any params
        // but still able to get event hear  
        changeMyName(event) {
            this.myName = event.target.value
        },



    },
})

// 2
// we also have to mount our add to something in html so vue can know that which parts
// it have to handle so we are using id app from html to mount
// all sub childe of that element will be accessible by vue 
vueApp.mount('#app')