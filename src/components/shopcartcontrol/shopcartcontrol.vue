<template>
  <span class="quantity-wrapper">
    <span class="reduce-one-outer"
          transition="move"
          v-show="food.count > 0"
          @click="reduceOne">
      <i class="fa fa-minus-circle reduce-one"></i>
    </span>
    <span class="quantity" v-show="food.count > 0">{{food.count}}</span>
    <span class="add-one-outer">
      <i class="fa fa-plus-circle add-one" @click="addOne"></i>
    </span>
  </span>
</template>

<script>
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    created () {
      // console.log(this.food);
    },
    methods: {
      addOne (event) {
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$dispatch('cart.add', event.target);
      },
      reduceOne (event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .quantity-wrapper
    position: relative
    .reduce-one-outer
      padding: 3px
      transition: all 0.4s linear
      &.move-transition
        opacity: 1
        transform: translateX(0)
        .reduce-one
          transition: all 0.4s linear
          transform: rotate(0)
      &.move-enter, &.move-leave
        opacity: 0
        transform: translateX(24px)
        .reduce-one
          transition: all 0.4s linear
          transform: rotate(360deg)
    .add-one-outer
      padding: 3px
    .add-one, .reduce-one
      color: #00a0dc
      padding: 3px
    .quantity
      color: rgb(147, 153, 159)
      font-weight: 400
</style>
