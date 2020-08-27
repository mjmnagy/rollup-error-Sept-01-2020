<template>
  <i
    ref="iconWrapper"
    class="s-icon"
    v-html="require(`!html-loader!@/icons/${iconSet}/${icn}.svg`)"
    v-bind:style="{
      width: size,
      height: size,
      fill: clr,
    }"
  >
  </i>
</template>

<script>
import _color from '@/mixins/colors'
import _sizing from '@/mixins/sizing'

export default {
  name: 'sIcon',
  //Config
  computed: {
    clr() {
      return _color.getColor(this.color, 1)
    },
    iconSet() {
      return ['brands', 'duotone', 'light', 'regular', 'solid'].includes(
        this.set
      )
        ? this.set
        : 'light'
    },
    icn() {
      return this.icon != null
        ? this.icon
            .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
            .toLowerCase()
            .trim()
        : this.default
    },
  },
  data() {
    return {
      default: 'circle',
    }
  },
  props: {
    icon: {
      default: 'circle',
      type: String,
    },
    color: {
      default: null,
      type: String,
    },
    set: {
      default: 'light',
      type: String,
    },
    size: {
      type: [Number, String],
      default: '1rem',
      validator: (value) => {
        return _sizing.validate(value)
      },
    },
  },
}
</script>

<style scoped>
.s-icon {
  outline: none;
  color: inherit;
  text-align: center;
  position: relative;
  display: inline-block;
  z-index: inherit;
}

.s-icon >>> svg {
  height: inherit;
  width: inherit;
  /* vertical-align: middle; */
}

.round {
  border-radius: 50%;
}
</style>
