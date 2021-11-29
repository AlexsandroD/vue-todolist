const app = new Vue({
    el:'#root',

    data:{
        list:[
            {
                activity:'dormire',
                check:false
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
        counter:0,
        
        done:'done'
    },
    methods:{
        checked:function(){
            if (this.check == false){
             this.check = true;
            }else{
                   this.check = false;
            }
            console.log(this.check)
    }
  },
})


