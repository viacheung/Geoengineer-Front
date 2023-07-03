<template>
  <div class="showTable">
    <div id="table-area">
      <!-- `checked` 为 true 或 false -->
      <!-- <el-checkbox v-model="checked" @change="checkedChange">分页显示</el-checkbox>-->
      <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit" @tab-click="clickTab" @tab-remove="removeTab">
        <el-tab-pane
            :key="item.name"
            v-for="(item) in editableTabs"
            :label="item.title"
            :name="item.name"
        >
          <!--表格 入口流量 出口流量-->
          <el-table :data="currentData"
                    height="400"
                    border
                    style="width: 100%">
            <el-table-column
                v-for="(col, index) in tableHeader"
                :key="index"
                :prop="col"
                :label="col"
                width="80"
            >
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

import {useChartToTableStore} from "@/store/chartToTableStore";


export default {
  name: "ShowTable",
  data() {
    return {
      chartToTableStore: '', //数据通信
      tableData: [{
        "井深": 1000,
        "入口流量": 1000,
        "出口流量": 1000,
        "扭矩": 1000,
        "立管压力": 1000,
        "转速": 1000,
        "钻压": 1000,
        "钻时": 1000,
      },
        {
          "井深": 2000,
          "入口流量": 2000,
          "出口流量": 2000,
          "扭矩": 2000,
          "立管压力": 2000,
          "转速": 2000,
          "钻压": 2000,
          "钻时": 2000,
        }], // 表格数据(不包括表头)
      tableHeader: ["井深", "入口流量", "出口流量", "扭矩", "立管压力", "转速", "钻压", "钻时"], // 表头
      currentData: [{
        "井深": 1000,
        "入口流量": 1000,
        "出口流量": 1000,
        "扭矩": 1000,
        "立管压力": 1000,
        "转速": 1000,
        "钻压": 1000,
        "钻时": 1000,
      }, {
        "井深": 2000,
        "入口流量": 2000,
        "出口流量": 2000,
        "扭矩": 2000,
        "立管压力": 2000,
        "转速": 2000,
        "钻压": 2000,
        "钻时": 2000,
      }], // 当前页面显示的数据(不包括表头)
      totalTableData: [], // 每生成一个表格后将数据存入，[{}]
      // 标签页数据
      editableTabsValue: '',
      editableTabs: [],
      tabIndex: 2,
      storeValue: {} // 数据通信的数据
    }
  },
  methods: {
    // 表格渲染
    showTable(storeValue) {
      if(storeValue.propertyName !== this.tableHeader[this.tableHeader.length - 1]){
        // console.log(storeValue)
        console.log('store属性不相等')
        console.log(this.tableHeader[this.tableHeader.length - 1])
        console.log(storeValue.propertyName)
        this.storeValue = storeValue;
        let propertyName = [];
        if (storeValue.deepName !== storeValue.propertyName) {
          propertyName.push(storeValue.deepName);
        }
        propertyName.push(storeValue.propertyName);
        let deepData = storeValue.deepData;
        let propertyData = storeValue.propertyData;
        this.tableHeader = propertyName;
        this.tableData = [];
        if (this.tableData.length === 0) {
          console.log("表格显示");
          let tableHeader = this.tableHeader;
          let tableValue = [];
          for (let i = 0; i < deepData.length; i++) { // 数据值,[[]]
            const arrValue = []; // 一行数据
            arrValue.push(deepData[i]);
            arrValue.push(propertyData[i]);
            tableValue.push(arrValue);
            // console.log(arrValue)
            // console.log(tableValue)
          }
          console.log(tableValue)
          for (let i = 0; i < tableValue.length; i++) {
            const value = {};
            for (let j = 0; j < tableHeader.length; j++) {
              // console.log(tableValue[j][i])
              value[tableHeader[j]] = tableValue[i][j];
              // value[j] = tableValue[j][i];  第一列不能正常显示
            }
            // console.log(value)
            this.tableData.push(value);
          }
        }
      }
      // console.log(this.tableData)
      this.currentData = this.tableData;
      const objData = {};
      objData .tableHeader = this.tableHeader;
      objData.currentData = this.currentData;
      this.totalTableData.push(objData);
      console.log("this.totalTableData", this.totalTableData);
      console.log(this.currentData);
    },
    // 标签页
    handleTabsEdit(targetName, action) {
      console.log(targetName);
      if (action === 'add') {
        let newTabName = ++this.tabIndex + '';
        const tab = {};
        tab.title = this.storeValue.propertyName;
        tab.name = newTabName;
        tab.content = '';
        tab.index = this.editableTabs.length;
        this.editableTabs.push(tab);
        console.log(this.editableTabs);
        this.editableTabsValue = newTabName;
        console.log(this.editableTabsValue)
      }
      if (action === 'remove') {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        this.currentData = '';
        console.log(activeName);
      }
    },
    clickTab(e) {
      let totalTableData = this.totalTableData;
      console.log(e.props.label);  // 点击的标签名
      for (let i = 0; i < totalTableData.length; i++) {
        if ((totalTableData[i].tableHeader)[totalTableData[i].tableHeader.length - 1] === e.props.label){
          console.log('相等')
          this.currentData = totalTableData[i].currentData;
          this.tableData = totalTableData[i].currentData;
          this.tableHeader = totalTableData[i].tableHeader;
          this.storeValue.propertyName = e.props.label;
          this.storeValue.propertyData = this.tableData;
          break;
        }
      }
      // console.log('this.editableTabsValue', this.editableTabsValue);
    }
  },
  mounted() {
    let that = this;
    //监听 SheetToProjectStore
    that.chartToTableStore = useChartToTableStore();
    that.chartToTableStore.$subscribe((mutation, state) => {
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
      console.log(state);
      let newValue = state.selected;
      that.showTable(newValue);
      that.handleTabsEdit('0','add');
      // that.showTable();
    }, {detached: true});//第二个参数options对象，是各种配置参数
    //detached:布尔值，默认是 false，正常情况下，当订阅所在的组件被卸载时，订阅将被停止删除，
    //如果设置detached值为 true 时，即使所在组件被卸载，订阅依然在生效
    //参数还有immediate，deep，flush等等参数 和vue3 watch的参数是一样的，多的就不介绍了，用到再看文档吧
  }
}
</script>

<style scoped>

/*表格显示*/
.showTable {
  position: absolute;
  width: 100%;
  height: calc(100% - 20px);
  bottom: 0;
  right: 0;
  background-origin: content-box;
  background-color: #616161;
  box-sizing: border-box;
}

:deep(.el-table--fit) {
  height: calc(100% - 32px) !important;
}

:deep(.el-table__inner-wrapper) {
  height: 100% !important;
}

#table-area {
  width: 100%;
  height: 100%;
  float: left;
  background-color: white;
}

#view-area {
  width: 100%;
  height: 100%;
  float: right;
  background-color: #00ff9d;
}

#show-chart {
  width: 100%;
  height: 100%;
  float: left;
  background-color: white;
}

.el-skeleton {
  padding: 20px;
}
</style>