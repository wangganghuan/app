<template>
  <div id="APPapp">
    <router-view />
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

img {
  display: block;
  height: 100%;
  width: 100%;
}
.df {
  display: flex;
}
div {
  box-sizing: border-box;
}
#APPapp {
  height: 100%;
}
</style>
