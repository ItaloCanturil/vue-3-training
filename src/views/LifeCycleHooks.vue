<template>
  <h1>Lifecycle hooks</h1>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
  setup () {
    onMounted (() => {
      console.log('foi montado')
    })
  }  
}
</script>

<style>
</style>
