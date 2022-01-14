<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "Emitter",
  data() {
    return {
      username: "atakan",
      email: "atakantekoglu@gmail.com"
    }
  },
  methods: {
    sendInputValue(val) {
      this.$emit("emitInput",val)
    }
  }
}
</script>
