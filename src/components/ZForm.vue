<!--  -->
<template>
  <div class="form">
    <slot></slot>
  </div>
</template>

<script>
import utils from "../utils/util"
export default {
  provide() {
    return {
      form: this,
    };
  },
  props: {
    rules: {
      type: Object,
      default: () => {
        return {};
      },
    },
    formData: {
      type: Object,
      required: true,
      default: () => {
        return {};
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
    validate(callback) {
      let children=utils.getChildrenByName(this,"ZFormItem")
      let childrenPromise = children.map((child) => {
        child.validate();
      });
      Promise.all(childrenPromise)
        .then((res) => {
          if (res) {
            callback(true);
          }
        })
        .catch((error) => {
          callback(false,error);
        });
    },
  },
  created() {},
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {}, //生命周期 - 销毁完成
};
</script>
<style scoped>
</style>