<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses"
          :class="itemClass"
          class="star-item"
          track-by="$index">
    </span>
  </div>
</template>

<script>
  const LENGTH = 5; // 星星的总个数
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';
  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType () {
        return 'star-' + this.size;
      },
      itemClasses () {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0; // 判断有没有小数，是否有小数
        let integer = Math.floor(score); // 有多少个整数，就有多少个完整的星
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);// 放入整星
        }
        if (hasDecimal) {
          result.push(CLS_HALF);// 放入半星
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF); // 补全灰色的星星
        }
        return result;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../stylus/mixin.styl"
  .star
    font-size: 0
    .star-item
      display: inline-block
      background-repeat: no-repeat
    &.star-48
      .star-item
        width: 20px
        height: 20px
        margin-right: 22px
        background-size: 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('../../img/star/star48_on')
        &.half
          bg-image('../../img/star/star48_half')
        &.off
          bg-image('../../img/star/star48_off')
    &.star-36
      .star-item
        width: 15px
        height: 15px
        margin-right: 16px
        background-size: 15px 15px
        &:last-child
          margin-right: 0
        &.on
          bg-image('../../img/star/star36_on')
        &.half
          bg-image('../../img/star/star36_half')
        &.off
          bg-image('../../img/star/star36_off')
    &.star-24
      .star-item
        width: 10px
        height: 10px
        margin-right: 3px
        background-size: 10px 10px
        &:last-child
          margin-right: 0
        &.on
          bg-image('../../img/star/star24_on')
        &.half
          bg-image('../../img/star/star24_half')
        &.off
          bg-image('../../img/star/star24_off')

</style>
