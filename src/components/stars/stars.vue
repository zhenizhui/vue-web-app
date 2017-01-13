<template>
  <span class="star">
    <span v-for="starClass in starNumber" :class="starClass" class="star-item" track-by="$index">
      <i class="fa fa-star" aria-hidden="true" v-if="starClass == 'on' "></i>
      <i class="fa fa-star-half-o" aria-hidden="true" v-if="starClass == 'half' "></i>
      <i class="fa fa-star" aria-hidden="true" v-if="starClass == 'off' "></i>
    </span>
  </span>
</template>

<script type="text/ecmascript-6">
  const STARON = 'on';
  const STAROFF = 'off';
  const StarNumber = 5;
  export default {
    props: {
      score: {
        type: Number
      }
    },
    data () {
      return {

      };
    },
    computed: {
      starNumber () {
        let result = [];
        let score = parseInt(this.score);
        // 满星
        for (let i = 0; i < score; i++) {
          result.push(STARON);
        }
        // 没星
        for (let i = 0; i < StarNumber - score; i++) {
          result.push(STAROFF);
        }
        return result;
      }

    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .star
    .star-item
      font-size: 12px
      &.on
        i
          color: #FF8400
      &.half
        i
          color: #FF8400
      &.off
        i
          color: #F3F3F3
</style>