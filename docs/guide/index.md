# guide

:::demo

```vue

<template>
  <div>
    <button @click="doLogin">登录</button>
  </div>
</template>

<script>
  export default {
      methods:{
          doLogin(){
              fetch('/api/login')
          }
      }
  }
</script>
```
::: 
