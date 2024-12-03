<template>
  <div class="bg-light my-4 p-4 ">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <table class="table align-middle" v-else>
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
          <td>
            <a href="#" class="text-dark" @click="removeCartItem(item.id)">x</a>
          </td>
          <td>
            <img class="table-img" :src="item.product.imageUrl" alt="">
          </td>
          <td>{{ item.product.title }}</td>
          <td>
            <select class="form-select" name="" id="" :value="item.qty" @change="(e) => setCartQty(item.id, e)">
              <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
            </select>
          </td>
          <td class="text-end">
            $ {{ item.subtotal }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額: $ {{ cartList.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia'

const { cartList } = storeToRefs(useCartStore());

const { setCartQty, removeCartItem } = useCartStore();

</script>
