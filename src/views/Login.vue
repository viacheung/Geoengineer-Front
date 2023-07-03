<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h1>
          <img class="logo" src="@/assets/imgs/logo.png" alt="钻井数据处理与展示平台">
          GeoEngineer
        </h1>
        <!--        <p class="title">
                  Drilling Data Processing And Display Platform
                </p>-->
      </el-header>
      <el-main>
        <el-row :gutter="10">
          <el-col :span="7">
            <img class="pic" src="@/assets/imgs/login.jpg">
          </el-col>
          <el-col :span="7">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <!--          用户名和密码-->
              <el-form-item prop="username">
                <el-icon>
                  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8="">
                    <path fill="currentColor"
                          d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"></path>
                  </svg>
                </el-icon>
                <el-input
                    placeholder="请输入用户名"
                    v-model="ruleForm.username"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-icon>
                  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8="">
                    <path fill="currentColor"
                          d="M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"></path>
                    <path fill="currentColor"
                          d="M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"></path>
                  </svg>
                </el-icon>
                <el-input
                    show-password
                    type="password"
                    v-model="ruleForm.password"
                    placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-checkbox v-model="checked">记住密码</el-checkbox>
              <el-link :underline="false" class="link2">忘记密码</el-link>
              <!--          登录身份选择-->
              <el-form-item prop="identity" class="title2">
                <el-icon>
                  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8="">
                    <path fill="currentColor"
                          d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"></path>
                  </svg>
                </el-icon>
                <el-select v-model="identity" placeholder="请选择登录身份">
                  <el-option label="管理员" value="admin"></el-option>
                  <el-option label="审核员" value="approver"></el-option>
                  <el-option label="普通用户" value="user"></el-option>
                </el-select>
              </el-form-item>
              <!--          表单按钮-->
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" class="button1">点此登录</el-button>
                <el-button @click="resetForm('ruleForm')" class="button2">重置</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <p class="copyright">Copyright © 2023 版权所有</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      user: {},
      identity: '',
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入您的密码', trigger: 'blur'},
          {min: 4, message: '密码不能少于4位数', trigger: 'blur'}
        ],
      },
      checked: true
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/homePage")//登录成功后跳转到主页面
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
}
</script>

<style scoped>

.common-layout {
  border: none;
  background-color: #e5e5e5;
  min-width: 1050px;
  min-height: 100px;
  height: 100%;
  margin: 0px;
}

.el-header {
  text-align: center;
  line-height: 10px;
  height: 110px;
}

.logo {
  top: 22px;
  width: 60px;
  position: relative;
}

h1 {
  text-align: center;
  font-size: 35px;
  top: 20px;
  position: relative;
  color: #505050;
  right: 28px;
  position: relative;
}

/*.title {
  text-align: center;
  font-size: 13px;
  top: 35px;
  position: relative;
  color: #505050;
}*/

.el-main {
  margin-top: 40px;
  height: 520px;
  min-width: 1050px;
  position: relative;
  background-color: rgba(142, 170, 202, 0.8);
}

.pic {
  width: 600px;
  height: 400px;
  margin-top: 50px;
  margin-left: 70px;
  position: relative;
  border-radius: 20px;
}

.demo-ruleForm {
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
  width: 470px;
  height: 380px;
  margin-top: 55px;
  margin-left: 400px;
  position: relative;
  background-color: #ffffff;
  border-radius: 20px;
}

.el-footer {
  text-align: center;
  line-height: 10px;
  height: 120px;
  font-size: 13px;
  color: #505050;
}

.copyright {
  margin-top: 30px;
  position: relative;
}

.link1 {
  margin-top: 20px;
  color: #ffffff;
  float: right;
  right: -350%;
  position: relative;
  font-size: 15px;
}

.link2 {
  float: right;
  margin-top: 10px;
  margin-right: 90px;
  position: relative;
  font-size: 14px;
}

.el-form-item {
  margin-top: 10px;
  border-radius: 16px;
  background-color: #e5e5e5;
  margin-left: 10px;
  height: 50px;
  width: 420px;
}

.el-checkbox {
  margin-top: 5px;
  margin-left: 45px;
  position: relative;
}

.el-input {
  float: left;
  position: relative;
  margin-left: 20px;
  width: 300px;
}

.el-select {
  float: left;
  position: relative;
  margin-left: 20px;
  width: 300px;
}

.button1 {
  margin-left: -10px;
  margin-top: 3px;
  position: relative;
}

.button2 {
  margin-top: 3px;
  left: 100px;
  position: relative;
}

.el-icon {
  float: left;
  position: relative;
  font-size: 28px;
  color: #8c8c8c;
  margin-left: -60px;
}

body > .el-container {
}

</style>
