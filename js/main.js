const app = new Vue({
    el: '#root',

    data: {
        list: [{
                activity: 'dormire',
                check: false
            },
            {
                activity: 'mangiare',
                check: false
            },
            {
                activity: 'sognare',
                check: false
            },
            {
                activity: 'cadere',
                check: false
            },
            {
                activity: 'giocare',
                check: false
            },
            {
                activity: 'dosaltare',
                check: false
            },

        ],
        done: 'done',
        addTodo: null
    },
    methods: {
        checked: function (index) {
            if (this.list[index].check == false) {
                this.list[index].check = true;
            } else {
                this.list[index].check = false
            }
            console.log(this.list[index].check)
        },
        remove: function (index) {
            this.list.splice(index, 1)
        },

        addActivity: function(){
            if(this.addTodo != ''){
                 this.list.push({
                     activity: this.addTodo,
                     check: false
                 })
            }
            this.addTodo = '';
           
            
        }
       


    },
})

