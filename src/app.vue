<template>
  <div id="app">    
    <messageSystem></messageSystem>
    <hr>
    <input type="button" @click="showAddForm" value=" Додати кнгу" />
    <newsTable></newsTable>
    <newsForm></newsForm>
  </div>
</template>

<script>
import Vue from "vue";
import newsTable from "./components/newsTable";
import newsForm from "./components/newsForm";
import queryForm from "./components/queryForm";
import messageSystem from "./components/messageSystem";
import axios from "axios";
import { mapActions } from 'vuex';

export default {
  //назва компоненту, співпадає із назвою файла  
  name: "app",
  //компоненти які використовуються в додатку
  components: {
    newsTable,
    newsForm,
    queryForm,
    messageSystem
  },
  //дані компонента на початку
  data() {
    return {        
    };
  },
  //коли додаток створено то треба завантажити список новин із сервера 
  mounted() {    
    this.getNewss(); 
  },  //методи 
  methods: {
    ...mapActions(["showMessageForTime", "getNewss", "showAddForm"]),   
  },
  
};
</script>

<style scoped>
#app {
  margin: 0;
  padding: 0;
}
</style>