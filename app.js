const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            enteredTaskValue: '',
            showList: true
        }    
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredTaskValue)
        },
        toggleShowList(){
            this.showList=!this.showList;
        }

    }
});


app.mount("#assignment")