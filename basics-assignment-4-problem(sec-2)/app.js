const app = Vue.createApp({
    data() {
        return {
            user: '', 
            paraIsVisible: true,
            color: ''
        };
    },
    computed: {
        paraClasses() {
            return {
                user1: this.user === 'user1',
                user2: this.user === 'user2',
                visible: this.paraIsVisible,
                hidden: !this.paraIsVisible
            } 
        }
    },
    methods: {
        toggleParaVisibility() {
            this.paraIsVisible = !this.paraIsVisible;
        }
    }
}).mount('#assignment');