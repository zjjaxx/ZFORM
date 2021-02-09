<!--  -->
<template>
  <div class="z-input-wrapper">
    <input
      v-bind="$attrs"
      v-bind:value="value"
      v-on:input="onInput"
    />
  </div>
</template>

<script>
import utils from "../utils/util"
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      required: true,
      default: () => {
        return "";
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    onInput(e){
      this.$emit('input', e.target.value)
      let parent=utils.getParentByName(this,"ZFormItem")
      if(parent){
        parent.$emit("execValidate")
      }
    }
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {}, //生命周期 - 销毁完成
};
</script>
<style scoped>
</style>