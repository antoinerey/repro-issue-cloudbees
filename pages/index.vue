<template>
  <div>Hello {{ flag }}</div>
</template>

<script>
import { flags } from '../cloudbees/config'

export default {
  computed: {
    flag() {
      return flags.testSSR.getValue()
    },
  },
}
</script>
