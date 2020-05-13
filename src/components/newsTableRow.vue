// рядок що відбражає 1 новину
<template>
    <tr>        
        <td> {{index+1}} </td>
        <td> {{news.title}} </td>
        <td> {{news.author}} </td>
        <td> {{news.text}} </td>
        <td> {{new Date(news.published).toLocaleDateString()}} </td>
        <td> {{news.stars}} </td>
        <td>
            <input type="button" value="Вилучити" @click="deleteNews(news)">
            <input type="button" value="Редагувати" @click="showUpdateForm(news)">
        </td>        
    </tr>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:"newsTableRow",
    props:{
        index:Number,
        news:Object        
    },
    data(){   
        return{

        }
    },
    methods:{ 
        ...mapActions(["deleteNews", "showUpdateForm"]),
        updated(){
        console.log(this.news);
        }            
    }
}
</script>

<style scoped>
    td{
        border: 1px solid black;
    }
</style>