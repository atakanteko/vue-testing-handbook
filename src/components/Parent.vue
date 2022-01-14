<template>
  <div>
    <Child/>
    <Emitter />
  </div>
</template>

<script>
import Child from "./Child";
import Emitter from "./Emitter";
export default {
  name: 'Parent',
  components: {
    Emitter,
    Child,
  },
};
</script>

