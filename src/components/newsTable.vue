// таблична форма відображення новин
<template>
    <div>
        <p v-if="newss.length==0" class="alert">
            Новини відсутні
        </p>
        
        <table v-if="newss.length>0">
            <tr>
                <th>#</th>
                <th v-on:click="sort('title')">  Заголовок </th>
                <th v-on:click="sort('author')"> Автор  </th>
                <th v-on:click="sort('text')">  Текст </th>
                <th v-on:click="sort('date')"> Дата </th>
                <th v-on:click="sort('stars')"> Кількість зірок </th>
                <th></th>
            </tr>
            <newsTableRow v-for="(news, index) in newss" 
                v-bind:key="news._id" 
                v-bind="{news, index}"       
            >             
            </newsTableRow>
        </table>
    </div> 
</template>

<script>
import newsTableRow from "./newsTableRow";
import { mapGetters, mapMutations} from 'vuex';


export default {
    name:"newsTable",      
    data(){
        return{         
          
        }
    },
    components:{
        newsTableRow
    },
    computed:{
       ...mapGetters({
           newss:"filtredNewss"
       }) 
    },    
    methods:{
        ...mapMutations({
            sort:"sortNewss"
        })
    }    
}
</script>

<style scoped>
    .alert{
        background: yellow;
        color: crimson;
    }

    table, table td{
        border-collapse: collapse;
        border: 1px solid black;
        width: 100%;
    }
</style>