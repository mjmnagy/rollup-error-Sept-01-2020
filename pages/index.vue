<template>
  <div>
    <h2>Icon</h2>
    <s-icon
      v-bind:icon="icon"
      v-bind:set="iconSet"
      v-bind:size="s + 'em'"
      v-bind:color="c"
      v-bind:round="r"
    ></s-icon>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: 'lemon',
      iconSet: 'light',
      s: 1,
      r: false,
      b: '#31d245',
      c: '#31d245',
      options: [
        'lemon',
        'bell',
        'unicorn',
        'wind',
        'hat-wizard',
        'wreath',
        'waveform',
      ],
    }
  },
}
</script>

<style></style>
