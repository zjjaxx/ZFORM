<template>
  <div id="app">
    <z-form ref="form" :formData="formData" :rules="rules">
      <Test>
        <z-form-item prop="username">
          <label for="username">username</label>
          <z-input id="username" v-model="formData.username"></z-input>
        </z-form-item>
      </Test>

      <z-form-item prop="password">
        <label for="password">password</label>
        <z-input
          id="password"
          type="password"
          v-model="formData.password"
        ></z-input>
      </z-form-item>
      <z-form-item>
        <button @click="submit">提交</button>
      </z-form-item>
    </z-form>
  </div>
</template>

<script>
import ZForm from "./components/ZForm";
import ZInput from "./components/ZInput";
import ZFormItem from "./components/ZFormItem";
import Test from "./components/test"
export default {
  name: "App",
  components: {
    ZForm,
    ZInput,
    ZFormItem,
    Test
  },
  data() {
    return {
      formData: {
        password: "",
        username: "",
      },
      rules: {
        password: {
          type: "string",
          required: true,
          message: "password is required",
        },
        username: {
          type: "string",
          required: true,
          message: "username is required",
        },
      },
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(valid);
          return;
        }
        console.log("error submit!!");
        return false;
      });
    },
  },
};
</script>

<style>
</style>
