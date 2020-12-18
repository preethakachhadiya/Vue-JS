const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            showList: true,
            tasks: []
        }
    },
    computed: {
        showListCaption() {
            return this.showList ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue);
            this.enteredTaskValue = ''
        },
        toggleList() {
            this.showList = !this.showList;
            // if(this.showList) {
            //     document.getElementById('toggle').textContent = "Hide Tasks";
            //     document.getElementById('list').style.display = "block"; 
            // }
            // else {
            //     document.getElementById('toggle').textContent = "Show Tasks";
            //     document.getElementById('list').style.display = "none"; 
            // }
        }
    }
});

app.mount('#assignment');