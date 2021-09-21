<template>
  <div class="ref">
    <h1>Quantas wins você teve hoje?</h1>
    <button @click="addCounter()">
      {{ counterRef }}
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const counterRef = ref(0);// função ref para tornar em reativo
    
    function addCounter () {
      counterRef.value ++
    }

    return {
      counterRef,
      addCounter
    }
  }
}
</script>

<style>

</style>