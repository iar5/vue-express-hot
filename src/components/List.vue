<template>
  <div>
    <div class="list">
      <div class="listitem" v-for="(item, index) in items" :key="index">{{index}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items: new Array(25)
    }
  }
}
</script>

<style scoped lang="scss">
.list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .listitem{
    width: 23%;
    margin: 0 0 2% 0;

    @media(max-width:1024px){
      width: 31%;
    }
    @media(max-width:720px){
      width: 49%;
    }
  }
}
</style>
