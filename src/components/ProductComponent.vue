<template>
  <div class="row row-cols-3 my-4 bg-light g-4 p-4">
    <div class="col" v-for="product in sortProducts" :key="product.id">
      <div class="card">
        <img class="card-img-top " :src="product.imageUrl" alt="">
        <div class="card-body">
          <h6 class="card-title">{{ product.title }}
            <span class="float-end">$ {{ product.price }}</span>
          </h6>
          <a href="#" class="btn btn-outline-secondary w-100" @click.prevent="addCart(product.id)">加入購物車</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useProductStore } from '@/stores/productsStore';
import { useCartStore } from '@/stores/cartStore';

const { sortProducts } = useProductStore();
const { addCart } = useCartStore();
</script>
