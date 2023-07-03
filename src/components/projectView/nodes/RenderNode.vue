<template>
  <div class="render-node">
    {{ nodeData.label }}
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "RenderNode",
  inject: ["getNode"],
  data() {
    return {
      node: '',
      nodeData: ''
    };
  },
  mounted() {
    let that = this;
    that.node = that.getNode();
    that.nodeData = that.node.getData();
    that.node.on("change:data", ({cell}) => {
      that.nodeData = cell.getData();
    })
  }
});
</script>
<style scoped>
.render-node {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 169, 64);
  color: white;
  font-size: 14px;
  height: 100%;
  width: 100%;
  box-shadow: 0 0 10px black;
  border-radius: 6px;
}
</style>