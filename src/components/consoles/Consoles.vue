<template>
  <div class="consoles">
    <el-tabs class="workbench" type="border-card" v-model="activeConsoles" @tab-click="handleClick">

      <el-tab-pane label="输出" name="first">
        <el-scrollbar>
          <div v-html="logOutput"></div>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="问题" name="second">
        <el-scrollbar>
          没有问题<br>
          没有问题<br>
          没有问题<br>
          没有问题<br>
          没有问题<br>
          没有问题<br>
          没有问题<br>
          没有问题<br>
          没有问题<br>
          没有问题<br>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="调试控制台" name="third">这里是调试控制台</el-tab-pane>
      <el-tab-pane label="终端" name="fourth">这里是终端</el-tab-pane>
      <el-tab-pane label="端口" name="fifth">这里是端口</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {useConsolesStore} from "@/store/consolesStore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Consoles",

  data() {
    return {
      consolesStore: '',
      logOutput: "",
      activeConsoles: "first",
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  },
  mounted() {
    let that = this;
    //监听 SheetToProjectStore
    that.consolesStore = useConsolesStore();
    that.consolesStore.$subscribe((mutation, state) => {
      /*
        mutation主要包含三个属性值：
          events：当前state改变的具体数据，包括改变前的值和改变后的值等等数据
          storeId：是当前store的id
          type：用于记录这次数据变化是通过什么途径，主要有三个分别是
                “direct” ：通过 action 变化的
                ”patch object“ ：通过 $patch 传递对象的方式改变的
                “patch function” ：通过 $patch 传递函数的方式改变的
      */
      // 我们就可以在此处监听store中值的变化，当变化为某个值的时候，去做一些业务操作之类的
      console.log(mutation);
      let newValue = mutation.events.newValue;
      that.logOutput += (newValue + "</br>");
      console.log(state);
    }, {detached: true});//第二个参数options对象，是各种配置参数
    //detached:布尔值，默认是 false，正常情况下，当订阅所在的组件被卸载时，订阅将被停止删除，
    //如果设置detached值为 true 时，即使所在组件被卸载，订阅依然在生效
    //参数还有immediate，deep，flush等等参数 和vue3 watch的参数是一样的，多的就不介绍了，用到再看文档吧
  }
}
</script>

<style scoped>
.consoles {
  position: absolute;
  width: 100%;
  height: calc(100% - 20px);
  bottom: 0;
  right: 0;
  background-origin: content-box;
  background-color: #616161;
  box-sizing: border-box;
}

.consoles .workbench {
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

.consoles .el-tab-pane {
  color: #e6fdfd;
  height: 100%;
  overflow: auto;
}
</style>