//редагування множини 
<template>
  <div>
    <ul v-if="set.length>0">
      <li v-for="(element, index) in set" v-bind:key="index">
        {{element}}
        <input type="button" @click="remove(index)" value="X">
      </li>
    </ul>
    <p v-else>Нема елементів</p>
    <input type="text" v-model="newElement" />
    <input type="button" @click="add()" value="Додати">
  </div>
</template>

<script>
export default {
  name: "setInput",
  props: {
    value: {
        type: Array,
        default: ()=>[]
    }

  },
  data() {
    return {
      set: this.value,
      newElement: ""
    };
  },
  methods: {
    add() {
      console.log(this.newElement);  
      this.set.push(this.newElement);
      this.$emit('input', this.set); 
      this.newElement = "";
    }
  }
};
</script>

<style scoped>
    li {
        margin: 10px;
    }
</style>