const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            enteredTaskValue: '',
        }    
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredTaskValue)
        }
    }
});


app.mount("#assignment")