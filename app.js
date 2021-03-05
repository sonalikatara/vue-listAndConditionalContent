const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            enteredTaskValue: '',
            showList: true
        }    
    },
    computed: {
        listButtonText(){
            return this.showList? 'Hide List': 'Show List'
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