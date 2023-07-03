<template>
  <div class="operationComponent">
    <!-- <el-transfer
        filterable
        :filter-method="filterMethod"
        filter-placeholder="请输入所需计算列名拼音"
        v-model="value1"
        :data="data1">
    </el-transfer> -->
    <El-form :model="form" :rules="addRules" ref="ruleForm">
      <el-form-item prop="proportion" label="公式输入" label-width="80">
        <el-col :span="20">
          <el-input v-model="form.proportion" autocomplete="off"/>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm(form)">清空</el-button>
        <el-button>校验</el-button>
        <el-button type="primary" @click="submitForm(form)">确定</el-button>
      </el-form-item>
    </El-form>
  </div>
</template>
<script>

export default {
  name: "OperationComponent",
  components: {},

  data() {
    return {
      addRules: {
        proportion: [
          {required: true, message: '请输入公式', trigger: ['blur']},
          {pattern: /\$[A-Z]\d\${1,}/, message: '非法输入公式（列数据表示方式：$A1$）', trigger: ['blur']},
          {pattern: /\(\$[A-Z]\d\$\){1,}/, message: '列数据表示错误', trigger: ['blur']}
        ],
        // /^\$[A-Z]\d\$$/
      },
      form: {
        name: '',
        customFontSize: '',
        date1: '',
        date2: '',
        distance: '',
        color: '',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      },
      value1: '',
      data1: this.generateData(),
      value2: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      }
    }
  },
  computed: {
    computedFontSize() {
      return parseInt(this.customFontSize);
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onSubmit() {
      console.log('submit!')
    },
    updateFontSize() {
      // 在这里执行根据选项或手动输入更新字体大小的逻辑
      // 你可以根据实际需求修改这个方法
      console.log('字体大小已更新为', this.computedFontSize, 'px');
    },
    handleColorChange(color) {
      // 处理颜色变化事件
      console.log('选中的颜色：', color);
    },
    selectColor(color) {
      // 选中颜色
      this.selectedColor = color;
      // 处理选中颜色事件
      console.log('选中的颜色：', color);
    },
    generateData() {
      const data = [];
      const cities = ['井深', '钻时', '钻压', '扭矩', '转速', '立管压力', '入口流量', '出口流量'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu', 'chukouliuliang'];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data
    },
  }
}
</script>

<style scoped>
.totalComponent {
  position: absolute;
  width: 100%;
  height: calc(100% - 20px);
  bottom: 0;
  right: 0;
  background-origin: content-box;
  background-color: #616161;
  box-sizing: border-box;
}

.color-palette {
  display: flex;
}

.color-palette button {
  width: 20px;
  height: 20px;
  margin: 5px;
  cursor: pointer;
}

.custom-form .el-form-item__label {
  font-size: 13px;
  text-align: left;
}

.custom-form .el-input__inner {
  border-color: #ccc;
  /* 设置输入框的边框颜色为 #ccc */
  border-radius: 4px;
  /* 设置输入框的边框圆角半径为 4px */
  height: 22px;
  /* 设置输入框的高度为 50px */
}

.totalComponent .workbench {
  height: 100%;
}

:deep(.el-tabs__header) {
  background-color: #2b303b !important;
  border-bottom: 1px solid #000000 !important;
  --el-tabs-header-height: 27px;
  height: 27px;
}

:deep(.el-tabs__item) {
  padding: 0 10px;
}

:deep(.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover) {
  color: #e6fdfd;
  background-color: #3f3f3f;
  border-right-color: #3f3f3f;
  border-left-color: #3f3f3f;
}

:deep(.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active) {
  color: #e6fdfd;
  background-color: #3f3f3f;
  border-right-color: #3f3f3f;
  border-left-color: #3f3f3f;
  border-bottom-color: #c57908;
}

:deep(.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2)) {
  padding: 0 10px;
}

:deep(.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child) {
  padding: 0 10px;
}

:deep(.el-tabs__content) {
  font-size: 14px;
  text-align: left;
  height: calc(100% - 37px);
  overflow: auto;
  padding: 5px !important;
}

:deep(.el-tabs--border-card) {
  background: #212121;
  border: 1px solid #000000;
}

.totalComponent .el-tab-pane {
  color: #e6fdfd;
  height: 100%;
  overflow: auto;
}
</style>