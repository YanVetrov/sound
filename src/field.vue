<template>
    <div>

        <input type="text" :value='msg' @input='changeMess' />
        <p>{{mess}}</p>
        
        
    </div>
    
    
    
</template>


<script>
    export default {
        props:['msg'],
        data(){
            return{
                mess:''
            }
        },
        methods:{
            changeMess(e){
                this.mess = e.target.value;
                this.$emit('messChange',this.mess)
            }
        }
        
        
        
    }
    
    
</script>