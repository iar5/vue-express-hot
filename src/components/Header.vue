<template>
     <header>
        <h1><router-link to="/">H1</router-link></h1>
        <nav>
            <ul>
              <li v-for="(route, i) in routen" :key="i" >
                <router-link :to="{ name: route.name }">{{route.title}}</router-link>
              </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  data(){
    return {
      routen: [
        {name: "link1", title: "Link"},
        {name: "link2", title: "Link"},
        {name: "link3", title: "Link"},
      ],
    }
  }
}
</script>

<style scoped lang="scss">
header{
  padding-top: 3%;
  padding-bottom: 20px;
  margin-bottom: 3%;

  h1, nav, ul, li{
    display: inline-block
  }
  
  h1{
    font-size: 2.5em;
    font-weight: bold;
    margin-right: 50px;
    font-family: Ranchers;
  }

  nav{
    li{ padding-right: 25px; }
    a{ font-size: 1.2em; }
  }
}
</style>