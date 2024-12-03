<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">JYU餅乾店</span>
      <button type="button" class="btn btn-outline-secondary">購物車
        <span class="badge rounded-pill bg-danger text-white">{{ cart.length }}</span>
      </button>
    </div>
  </nav>
</template>
<script setup>
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia'

const { cart } = storeToRefs(useCartStore());

</script>
