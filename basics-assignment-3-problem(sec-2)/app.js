const app1 = Vue.createApp({
    data() {
        return {
            counter: 0
        };
    }, 
    watch: {
        checkValue() {
            const that = this;
            setTimeout(function() {
                that.counter = 0;
            }, 5000);
        }
    },
    computed: {
        checkValue() {
            console.log('inside watcher');
            if(this.counter < 37)
                return 'Not there yet';
            else if(this.counter > 37)
                return 'Too much';
            else
                return '37';
        }
    },
    methods: {
        add5() {
            console.log('5');
            this.counter += 5;
        },
        add1() {
            console.log('1');
            this.counter ++;
        }

    }

}).mount('#assignment');