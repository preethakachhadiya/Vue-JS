const app = Vue.createApp({
    data() {
        return {
            name: '',
            confirmName: ''
        }
    },
    methods: {
        showAlert() {
            alert('Hello!!!!!');
        },
        setName(event) {
            this.name = event.target.value;
        },
        displayName(event) {
            this.confirmName = this.name;
        }

    }

}).mount('#assignment');