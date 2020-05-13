//система для відображення повідомлень
<template>
    <div class="message" v-if="areSomeMessages">
        <p> Непрочитаних повідомлень: {{messagesCount}} </p>
        <p> {{firstMessage}} </p>
        <input type="button" @click="removeMessage" value="Ок">
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
    name:"messageSystem",   
    data(){
        return{                   
        }
    },
    computed:{     
        ...mapState(['messages']),
        ...mapGetters(['firstMessage','areSomeMessages','messagesCount'])
    },
    methods:{
        //закрити перше повідомлення
        ...mapMutations(['removeMessage'])
    }
}
</script>
<style scoped>
    .message{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: greenyellow;
        font: bold "Arial" 14px;
        padding: 10px;
        border: 1px solid green;
    }
</style>