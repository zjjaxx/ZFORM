<!--  -->
<template>
  <div class="z-form-item">
    <slot></slot>
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  name: "ZFormItem",
  inject: ["form"],
  props: {
    prop: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  components: {},
  data() {
    return {
      error: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    validate() {
      return new Promise((resolve, reject) => {
        let formDataItem = this.form.formData[this.prop];
        let rule = this.form.rules[this.prop];
        const validator = new Schema({ [this.prop]: rule });
        validator
          .validate({ [this.prop]: formDataItem })
          .then(() => {
            this.error = "";
            resolve(true);
          })
          .catch(({ errors }) => {
            if (errors) {
              this.error = errors[0].message;
              reject(false);
            }
          });
      });
    },
  },
  created() {
    this.$on("execValidate", () => {
      this.validate().catch((res) => {
        console.log(res);
      });
    });
  },
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  destroyed() {}, //生命周期 - 销毁完成
};
</script>
<style  scoped>
</style>