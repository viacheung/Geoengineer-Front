<template>
  <div
    class="custom-tree-container"
    @contextmenu="onContextMenu($event)"
    @click="hhh"
  >
    <!-- 数据管理器标题模块 -->
    <div class="tabletitle">
      <!-- 点击图标添加结点的加号and井数据管理器标题 -->
      <div class="addNewNode" @click="addTreeNode">
        井数据管理器
        <svg
          t="1686896852511"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3492"
        >
          <path
            d="M874.666667 469.333333H554.666667V149.333333c0-23.466667-19.2-42.666667-42.666667-42.666666s-42.666667 19.2-42.666667 42.666666v320H149.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667s19.2 42.666667 42.666666 42.666667h320v320c0 23.466667 19.2 42.666667 42.666667 42.666666s42.666667-19.2 42.666667-42.666666V554.666667h320c23.466667 0 42.666667-19.2 42.666666-42.666667s-19.2-42.666667-42.666666-42.666667z"
            fill="#ffffff"
            p-id="3493"
          ></path>
        </svg>
      </div>
    </div>
    <!-- 树形显示模块 -->
    <!-- 通过@check-change事件来监听复选框的选中状态变化，并将选中的节点信息传递给父组件 -->
    <el-tree
      :data="treeData"
      class="eltree"
      ref="tree"
      :props="defaultProps"
      @node-click="handleNodeClick"
      @check-change="handleCheckChange"
      @node-contextmenu="rightClick"
      show-checkbox
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node" @contextmenu="onContextMenu($event)">
          <!-- 设置小图标在节点前 -->
          <span style="display: flex; align-items: center"
            ><svg
              v-if="!data.isChild"
              width="14px"
              height="14px"
              t="1686896852511"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3492"
            >
              <path
                d="M874.666667 469.333333H554.666667V149.333333c0-23.466667-19.2-42.666667-42.666667-42.666666s-42.666667 19.2-42.666667 42.666666v320H149.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667s19.2 42.666667 42.666666 42.666667h320v320c0 23.466667 19.2 42.666667 42.666667 42.666666s42.666667-19.2 42.666667-42.666666V554.666667h320c23.466667 0 42.666667-19.2 42.666666-42.666667s-19.2-42.666667-42.666666-42.666667z"
                fill="black"
                p-id="3493"
              ></path>
            </svg>
            <svg
              v-else
              width="14px"
              height="14px"
              t="1687849576558"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1545"
            >
              <path
                d="M959.712 517.536c0.032-1.856 0.288-3.648 0.288-5.536 0-247.04-200.96-448-448-448S64 264.96 64 512c0 1.888 0.256 3.68 0.288 5.536-0.032 0.48-0.288 0.896-0.288 1.408 0 0.832 0.416 1.504 0.48 2.336C69.472 764 268.096 960 512 960s442.528-196 447.52-438.72c0.064-0.832 0.48-1.504 0.48-2.336 0-0.512-0.256-0.928-0.288-1.408zM550.944 894.016v-21.504a32 32 0 1 0-64 0v22.208c-187.104-12.16-338.24-158.496-356.96-343.776h21.504a32 32 0 1 0 0-64H129.28C141.728 295.232 295.232 141.728 486.944 129.28v22.208a32 32 0 0 0 64 0v-21.504c185.28 18.72 331.616 169.856 343.776 356.96h-22.208a32 32 0 1 0 0 64h21.504c-18.272 180.704-162.368 324.8-343.072 343.072z"
                p-id="1547"
                fill="black"
              ></path>
            </svg>
            {{ node.label }}
          </span>
          <!-- 右键菜单内容 -->
          <context-menu v-model:show="data.show" :options="treeMenuOptions">
            <!-- 上传井数据 -->
            <div class="uploadBtn" v-show="data.level == 1">
              <el-upload
                :auto-upload="false"
                :on-change="readFile"
                ref="upload"
                accept=".xls,.xlsx"
                :show-file-list="false"
              >
                <el-icon><Plus /></el-icon>
                <svg
                  t="1686896852511"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3492"
                >
                  <path
                    d="M874.666667 469.333333H554.666667V149.333333c0-23.466667-19.2-42.666667-42.666667-42.666666s-42.666667 19.2-42.666667 42.666666v320H149.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667s19.2 42.666667 42.666666 42.666667h320v320c0 23.466667 19.2 42.666667 42.666667 42.666666s42.666667-19.2 42.666667-42.666666V554.666667h320c23.466667 0 42.666667-19.2 42.666666-42.666667s-19.2-42.666667-42.666666-42.666667z"
                    fill="#ffffff"
                    p-id="3493"
                  ></path>
                </svg>
                <el-button type="text" @click="handleUpload"
                  >上传井数据</el-button
                >
              </el-upload>
            </div>
            <!-- 一级节点新建文件夹 -->
            <!-- <context-menu-item
              label="新建文件夹"
              v-show="data.level == 1"
              @click="newFolder"
            >
              <template #icon>
                <svg
                  t="1687772680534"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2582"
                  width="200"
                  height="25"
                >
                  <path
                    d="M855.04 385.024q19.456 2.048 38.912 10.24t33.792 23.04 21.504 37.376 2.048 54.272q-2.048 8.192-8.192 40.448t-14.336 74.24-18.432 86.528-19.456 76.288q-5.12 18.432-14.848 37.888t-25.088 35.328-36.864 26.112-51.2 10.24l-567.296 0q-21.504 0-44.544-9.216t-42.496-26.112-31.744-40.96-12.288-53.76l0-439.296q0-62.464 33.792-97.792t95.232-35.328l503.808 0q22.528 0 46.592 8.704t43.52 24.064 31.744 35.84 12.288 44.032l0 11.264-53.248 0q-40.96 0-95.744-0.512t-116.736-0.512-115.712-0.512-92.672-0.512l-47.104 0q-26.624 0-41.472 16.896t-23.04 44.544q-8.192 29.696-18.432 62.976t-18.432 61.952q-10.24 33.792-20.48 65.536-2.048 8.192-2.048 13.312 0 17.408 11.776 29.184t29.184 11.776q31.744 0 43.008-39.936l54.272-198.656q133.12 1.024 243.712 1.024l286.72 0z"
                    p-id="2583"
                  ></path>
                </svg>
              </template>
            </context-menu-item> -->
            <!-- 二级节点新建 -->
            <context-menu-item
              label="新建文件夹"
              v-show="data.level == 2"
              @click="newFolder"
            >
              <template #icon>
                <svg
                  t="1687772680534"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2582"
                  width="200"
                  height="25"
                >
                  <path
                    d="M855.04 385.024q19.456 2.048 38.912 10.24t33.792 23.04 21.504 37.376 2.048 54.272q-2.048 8.192-8.192 40.448t-14.336 74.24-18.432 86.528-19.456 76.288q-5.12 18.432-14.848 37.888t-25.088 35.328-36.864 26.112-51.2 10.24l-567.296 0q-21.504 0-44.544-9.216t-42.496-26.112-31.744-40.96-12.288-53.76l0-439.296q0-62.464 33.792-97.792t95.232-35.328l503.808 0q22.528 0 46.592 8.704t43.52 24.064 31.744 35.84 12.288 44.032l0 11.264-53.248 0q-40.96 0-95.744-0.512t-116.736-0.512-115.712-0.512-92.672-0.512l-47.104 0q-26.624 0-41.472 16.896t-23.04 44.544q-8.192 29.696-18.432 62.976t-18.432 61.952q-10.24 33.792-20.48 65.536-2.048 8.192-2.048 13.312 0 17.408 11.776 29.184t29.184 11.776q31.744 0 43.008-39.936l54.272-198.656q133.12 1.024 243.712 1.024l286.72 0z"
                    p-id="2583"
                  ></path>
                </svg>
              </template>
            </context-menu-item>
            <!-- 二级节点第二个右键功能 -->
            <!-- <context-menu-item
              label="hhh"
              v-show="data.level == 2"
              @click="newFolder"
            >
              <template #icon>
                <svg
                  t="1687772680534"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2582"
                  width="200"
                  height="25"
                >
                  <path
                    d="M855.04 385.024q19.456 2.048 38.912 10.24t33.792 23.04 21.504 37.376 2.048 54.272q-2.048 8.192-8.192 40.448t-14.336 74.24-18.432 86.528-19.456 76.288q-5.12 18.432-14.848 37.888t-25.088 35.328-36.864 26.112-51.2 10.24l-567.296 0q-21.504 0-44.544-9.216t-42.496-26.112-31.744-40.96-12.288-53.76l0-439.296q0-62.464 33.792-97.792t95.232-35.328l503.808 0q22.528 0 46.592 8.704t43.52 24.064 31.744 35.84 12.288 44.032l0 11.264-53.248 0q-40.96 0-95.744-0.512t-116.736-0.512-115.712-0.512-92.672-0.512l-47.104 0q-26.624 0-41.472 16.896t-23.04 44.544q-8.192 29.696-18.432 62.976t-18.432 61.952q-10.24 33.792-20.48 65.536-2.048 8.192-2.048 13.312 0 17.408 11.776 29.184t29.184 11.776q31.744 0 43.008-39.936l54.272-198.656q133.12 1.024 243.712 1.024l286.72 0z"
                    p-id="2583"
                  ></path>
                </svg>
              </template>
            </context-menu-item> -->
            <!-- 三级节点右键导入属性 -->
            <context-menu-item
              label="导入"
              v-show="data.level == 3"
              @click="menuClick($event,1)"
            >
              <template #icon>
                <svg 
                  t="1688282059057" 
                  class="icon" 
                  viewBox="0 0 1024 1024" 
                  version="1.1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  p-id="2340" 
                  width="200" 
                  height="25"
                >
                  <path 
                    d="M544.53830029 514.58000029V962H480.3083V514.58000029l-108.51000029 86.78999971a32.13 32.13 0 1 1-40.14-50.19000029l160.71000029-128.54999971a32.15999971 32.15999971 0 0 1 40.14 0l160.71000029 128.54999971a32.13 32.13 0 0 1-40.14 50.19000029l-108.51000029-86.78999971zM383.8283 737v64.28999971H319.53830029a257.13 257.13 0 0 1-92.61-497.09999971 289.37999971 289.37999971 0 0 1 570.96 0 257.13 257.13 0 0 1-92.61 497.09999971h-64.29000058V737h64.29000058a192.87 192.87 0 0 0 54.23999942-378l-21.06-6.14999971-1.94999942-21.84000029a225 225 0 0 0-448.2 0l-1.95000029 21.84000029-21.06 6.14999971a192.87 192.87 0 0 0 54.24000029 378h64.28999971z" 
                    p-id="2341" 
                    fill="#e6e6e6">
                  </path>
                </svg>
              </template>
            </context-menu-item>

            <context-menu-item
              label="导入井信息"
              v-show="data.level == 1"
              @click="wellDialogVisible"
            >
              <template #icon>
                <svg
                  t="1688121432192"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2336"
                  width="200"
                  height="25"
                >
                  <path
                    d="M739.530598 294.52799l0 435.029978c0 24.048719-20.48045 43.594891-44.444235 43.594891L303.417963 773.152858l0 43.425022c0 23.963785 19.800975 43.508933 43.807738 43.508933l434.795641 0c24.006763 0 44.360324-19.545148 44.360324-43.508933L826.381665 207.551056c0-24.048719-20.35356-43.636846-44.360324-43.636846L347.224678 163.91421c-24.006763 0-43.807738 19.588127-43.807738 43.636846l0 44.147476 391.669424 0C719.051171 251.698532 739.530598 270.521227 739.530598 294.52799zM588.693218 556.539402 463.561289 674.320922c-17.334807 16.315594-44.699038 15.551184-61.142545-1.86958-16.315594-17.419741-15.508205-44.783972 1.86958-61.099566l59.357899-55.916521L241.086335 555.435255c-24.006763 0-43.468001-18.951631-43.468001-43.00035 0-24.049742 19.461237-43.020816 43.468001-43.020816l222.559888 0-59.357899-56.257282c-17.377786-16.35755-18.185174-43.934628-1.86958-61.312414 8.583492-9.007141 20.055778-13.680581 31.528064-13.680581 10.621918 0 21.24486 3.823072 29.65746 11.68411l125.08895 117.653607c12.32163 11.535731 19.37528 27.767414 19.37528 44.593638C608.068498 528.836457 601.014848 545.06814 588.693218 556.539402z"
                    fill="#dbdbdb"
                    p-id="2337"
                  ></path>
                </svg>
              </template>
            </context-menu-item>
          </context-menu>
        </span>
      </template>
    </el-tree>

    <!-- 弹出新建工区对话框 -->
    <el-dialog title="新建井工区" v-model="isAddDialogVisible" width="300px">
      <el-form :model="newNode" label-width="80px">
        <el-form-item label="工区名称">
          <el-input v-model="newNode.label"></el-input>
        </el-form-item>
      </el-form>
      <span>
        <el-button @click="closeAddDialog">取消</el-button>
        <el-button type="primary" @click="createTreeNode(newNode.label)">
          确定
        </el-button>
      </span>
    </el-dialog>

    <!-- 弹出井位信息表 -->
    <el-dialog title="井位信息表" v-model="isWellDialogVisible" width="800px">
      <el-table :data="tableData" style="width: 100%">
        <!-- 列定义 -->
        <el-table-column type="selection" width="55" />
        <el-table-column prop="wellName" label="井名称"></el-table-column>
        <el-table-column prop="locationA" label="东西坐标(m)"></el-table-column>
        <el-table-column prop="locationB" label="南北坐标(m)"></el-table-column>
        <el-table-column prop="longitude" label="经度"></el-table-column>
        <el-table-column prop="latitude" label="纬度"></el-table-column>
      </el-table>
      <span>
        <el-button>取消</el-button>
        <el-button type="primary">确定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import * as XLSX from "xlsx";
import { ContextMenu, ContextMenuItem } from "@imengyu/vue3-context-menu";
import { useSheetStore } from "@/store/sheetStore";
import { useSheetToProjectStore } from "@/store/sheetToProjectStore";
export default {
  name: "LeftTree",
  data() {
    return {
      showRightMenu: false,
      // 树形右键菜单
      treeMenuIsShow: false,
      treeMenuOptions: {
        theme: "mac dark",
        zIndex: "3",
        minWidth: "230",
        x: "",
        y: "",
      },

      treeProps: {
        children: "children",
        label: "label",
        disabled: "disabled",
      },
      // 添加工区弹窗是否可见
      isAddDialogVisible: false,
      // 井位信息弹窗是否可见
      isWellDialogVisible: false,
      newNode: {
        label: "",
      },
      logOutput: "",
      sheetStore: "",
      sheetToProjectStore: "",
      treeData: [],
      sheetData: [],
      selectedNodes: [], // 用于存储选中节点的数组
      defaultProps: {
        // 树形控件的树形绑定对象
        children: "children", // 设置通过chiledren树形展示节点信息
        label: "label", // 通过label设置树形节点文本展示
      },
      tableData: [
        // el-table 数据
        {
          wellName: "博孜1801",
          locationA: 19502438.053,
          locationB: 4317704.248,
          longitude: "111°1′41.31″",
          latitude: "38°59′33.99″",
        },
        {
          wellName: "博孜1302",
          locationA: 19508196.269,
          locationB: 4297867.447,
          longitude: "111°5′39.73″",
          latitude: "38°48′50.59″",
        },
        {
          wellName: "博孜701",
          locationA: 19504637.391,
          locationB: 4287101.467,
          longitude: "111°3′11.95″",
          latitude: "38°43′1.55″",
        },
        {
          wellName: "博孜105",
          locationA: 19497822.7,
          locationB: 4293750.6,
          longitude: "110°58′29.80″",
          latitude: "38°46′37.21″",
        },
        {
          wellName: "博孜104",
          locationA: 19504389.255,
          locationB: 4282676.94,
          longitude: "111°3′1.58″",
          latitude: "38°40′38.07″",
        },
        {
          wellName: "博孜104-2",
          locationA: 19502077.912,
          locationB: 4302422.992,
          longitude: "111°1′26.17″",
          latitude: "38°51′18.45″",
        },
        {
          wellName: "博孜102",
          locationA: 19505360.0,
          locationB: 4284931.5,
          longitude: "111°3′41.81″",
          latitude: "38°41′51.16″",
        },
        {
          wellName: "博孜102-4",
          locationA: 19509327.5,
          locationB: 4285022.7,
          longitude: "111°6′25.99″",
          latitude: "38°41′54.00″",
        },
      ],
    };
  },
  methods: {
    hhh() {
      this.treeData.map((item) => (item.show = false));
    },
    menuClick(event,num){
      console.log(event);
      if (num === 1) {
        console.log(11111);
      }
    },
    doUpload() {},
    rightClick(event, data, node, json) {
      console.log(event);
      console.log("data", data);
      // if (!data.isTop) {
      //   return;
      // }
      // this.treeData.map((item) => (item.show = false));
      data.show = !data.show;
      // data["show"] = !data["show"];
    },
    // rightClick(){
    //   console.log("rightClick")
    //   this.treeMenuIsShow = true;
    // },
    //画布右键菜单功能
    handleUpload1(data) {
      //console.log("handleUpload",id)
      data.show = false;
    },
    onContextMenu(e) {
      console.log("onContextMenu");
      this.treeData.map((item) => (item.show = false));
      e.preventDefault();
      this.treeMenuIsShow = true;
      this.treeMenuOptions.x = e.x;
      this.treeMenuOptions.y = e.y;
    },

    // 处理复选框的选中状态变化，并更新选中信息的数据
    handleCheckChange(checkedNodes) {
      // 输出1测试一下
      console.log(1);
      this.selectedNodes = checkedNodes;
      // const selectedNodes = {
      // workArea1: {
      //   sheet1: {},
      //   sheet2: {}
      // }
    },
    // 处理树节点的点击事件
    handleNodeClick() {
      this.treeData.map((item) => (item.show = false));
    },
    showAddDialog() {
      this.isAddDialogVisible = true;
    },
    closeAddDialog() {
      this.isAddDialogVisible = false;
      this.newNode.label = "";
    },

    //将是否弹出新建工区弹窗设置为true
    addTreeNode() {
      // console.log(1);
      // console.log(this.isAddDialogVisible);
      this.isAddDialogVisible = true;
      // console.log(this.isAddDialogVisible);
    },

    wellDialogVisible() {
      this.isWellDialogVisible = true;
      // console.log(1223);
    },

    // 新建工区节点
    createTreeNode(label) {
      // const newNode = {
      //   label: '新节点',
      //   children: [],
      //   showIcon: true
      // };
      if (!label) {
        return;
      }
      const newNode = {
        id: this.treeData.length,
        label: label,
        children: [],
        isChild: false,
        show: false,
        isTop: true,
        level: 1,
      };
      console.log("newNode", newNode);
      // 将新节点添加到树形数据的根节点下
      this.treeData.push(newNode);
      console.log("treeData", JSON.stringify(this.treeData));
      this.closeAddDialog();
    },

    // 新建文件夹
    newFolder() {
      // newFolder(parentNode)
      // const newNode = {
      //   id: this.treeData.length,
      //   label: label,
      //   children: [],
      //   isChild: false,
      //   show: false,
      //   isTop: true,
      // };
      // parentNode.children.push(newNode);
      console.log(123);
    },

    // 新增结点（暂时没用到）
    append(data) {
      let newChild = {
        id: this.id++,
        label: "testtest",
        children: [],
      };
      if (!data.children) {
        data.children = [];
      }
      data.children.push(newChild);
      this.dataSource.value = [...this.dataSource.value];
    },

    // 删除结点（暂时没用到）
    remove(node, data) {
      let parent = node.parent;
      let children = parent.data.children || parent.data;
      let index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
      this.dataSource.value = [...this.dataSource.value];
    },
    readFile1() {
      let that = this;
      let fileReader = new FileReader();
      let data;
      let workbook;
      let sheet;
      let output = []; // 存储获取到的数据
      return new Promise((resolve, reject) => {
        fileReader.onload = function (e) {
          try {
            workbook = XLSX.read(e.target.result, {
              type: "buffer",
            }); // 以二进制流方式读取得到整份excel表格对象
          } catch (e) {
            console.log("文件类型不正确");
            return;
          }
          sheet = workbook.SheetNames[0];
          console.log("表名：" + sheet);
          // 默认填充值
          // output = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {range: 1 , defval: 0});
          output = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {
            range: 1,
          });
          //在控制台打印出来表格中的数据
          console.log(output);
          data = {};
          for (let i = 0; i < Object.keys(output[0]).length; i++) {
            data[Object.keys(output[0])[i]] = [];
          }
          console.log(data);
          let newSheet = new Object({
            sheet: sheet.split("-")[0],
            property: Object.keys(output[0]),
            data: data,
          });
          for (let i = 0; i < output.length; i++) {
            for (let j = 0; j < newSheet.property.length; j++) {
              newSheet.data[newSheet.property[j]].push(
                output[i][[newSheet.property[j]]]
              );
            }
          }
          that.sheetData.push(newSheet);
          that.logOutput = that.logOutput.concat("Excel数据已导入<br>");
          resolve(); // 数据更新完毕后调用resolve
        };
        //fileReader.readAsArrayBuffer(f.raw);
      }).then(() => {
        //更新树形图
        that.updateTreeData();
      });
    },

    //文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
    readFile(f) {
      let that = this;
      let fileReader = new FileReader();
      let data;
      let workbook;
      let sheet;
      let output = []; // 存储获取到的数据
      return new Promise((resolve, reject) => {
        fileReader.onload = function (e) {
          try {
            workbook = XLSX.read(e.target.result, {
              type: "buffer",
            }); // 以二进制流方式读取得到整份excel表格对象
          } catch (e) {
            console.log("文件类型不正确");
            return;
          }
          sheet = workbook.SheetNames[0];
          console.log("表名：" + sheet);
          // 默认填充值
          // output = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {range: 1 , defval: 0});
          output = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {
            range: 1,
          });
          //在控制台打印出来表格中的数据
          console.log(output);
          data = {};
          for (let i = 0; i < Object.keys(output[0]).length; i++) {
            data[Object.keys(output[0])[i]] = [];
          }
          console.log(data);
          let newSheet = new Object({
            sheet: sheet.split("-")[0],
            property: Object.keys(output[0]),
            data: data,
          });
          for (let i = 0; i < output.length; i++) {
            for (let j = 0; j < newSheet.property.length; j++) {
              newSheet.data[newSheet.property[j]].push(
                output[i][[newSheet.property[j]]]
              );
            }
          }
          that.sheetData.push(newSheet);
          that.logOutput = that.logOutput.concat("Excel数据已导入<br>");

          resolve(); // 数据更新完毕后调用resolve
        };
        fileReader.readAsArrayBuffer(f.raw);
      }).then(() => {
        //更新树形图
        that.updateTreeData();
        console.log("treeData", JSON.stringify(this.treeData));
      });
    },
    //更新树形图
    updateTreeData() {
      let that = this;
      console.log("sheetData", that.sheetData);
      // that.treeData = [];
      for (let i = 0; i < that.sheetData.length; i++) {
        let parentsLeaf = new Object({
          id: "",
          label: "",
          children: [],
          level: 2,
        });
        parentsLeaf.label = that.sheetData[i].sheet;
        for (let j = 0; j < that.sheetData[i].property.length; j++) {
          let childLeaf = new Object({
            id:"",
            label: that.sheetData[i].property[j],
            level: 3,
          });
          parentsLeaf.children.push(childLeaf);
        }
        // 检查是否有勾选的节点（被选中的复选框）
        if (this.$refs.tree.getCheckedNodes().length > 0) {
          // 用于遍历勾选的节点数组中的每个节点
          for (
            let i = 0;
            i < this.$refs.tree.getCheckedNodes().map((item) => item.id).length;
            i++
          ) {
            that.treeData[
              this.$refs.tree.getCheckedNodes().map((item) => item.id)[i]
            ].children.push({
              // 将parentsLeaf对象的属性全部复制到新的子节点对象中
              ...parentsLeaf,
              // 添加以下三个额外的属性
              isChild: true,
              isTop: false,
              show: false,
            });
            that.treeData[
              this.$refs.tree.getCheckedNodes().map((item) => item.id)[i]
            ].show = false;
          }
        } else {
          // that.treeData[0].children.push(parentsLeaf);
          alert("请选择节点");
          that.treeData.map((item) => (item.show = false));
        }
      }
      that.logOutput = that.logOutput.concat("树形图已更新<br>");
      that.sheetData = [];
    },
  },
  mounted() {
    let that = this;
    //监听 SheetToProjectStore
    that.sheetStore = useSheetStore();
    that.sheetToProjectStore = useSheetToProjectStore();
    that.sheetToProjectStoreSubscribe = that.sheetToProjectStore.$subscribe((mutation, state) => {
      //获取当前被选中的表和列名
      let selected = state.selected;
      //根据store中的数据来更新画布与数据
      that.updateGraph(selected);
    }, {detached: true});
  },
};
</script>

<style>
.rightMenu {
  position: fixed;
  z-index: 99999999;
  cursor: pointer;
  border: 1px solid #eee;
  box-shadow: 0 0.5em 1em 2px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  color: #1a1a1a;
}
.rightMenu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 6px;
}
.rightMenu ul li {
  padding: 6px 10px;
  background: #fff;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.rightMenu ul li:last-child {
  border: none;
}
.rightMenu ul li:hover {
  transition: all 1s;
  background: #92c9f6;
}
.uploadBtn {
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 16px;
  text-align: center;
}
.custom-tree-container {
  position: absolute;
  width: 100%;
  /* 减去工具栏的高度（但是我好像没有工具栏） */
  height: calc(100%-20px);
  bottom: 0;
  right: 0;
  background-origin: content-box;
  background-color: #616161;
  box-sizing: border-box;
  /* display: flex; */
  align-items: flex-start;
  position: absolute;
  top: 20px;
  left: 0;
}

/* 添加结点的加号大小 */
.custom-tree-container .tabletitle .addNewNode svg {
  width: 15px;
  height: 15px;
}

/* 井数剧管理器字体颜色 */
.custom-tree-container .tabletitle .addNewNode {
  color: whitesmoke;
}

/* 树形结构的背景色 */
.custom-tree-container .eltree {
  /* background-color: #616161; */
  background-color: white;
  /* background-color: rgba(135, 206, 235, 0.2); */
  /* color:whitesmoke !important; */

}

/* ::v-deep .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node_content {
  background-color: #616161;
  color:#409eff !important;
  font-weight: bold;
} */


</style>
