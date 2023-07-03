<template>
  <div class="HomePage">
    <grid-layout
        :layout="layout"
        :col-num="24"
        :row-height="1"
        :max-rows="10000"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :auto-size="false"
        :vertical-compact="true"
        :responsive="true"
        :margin="[3, 3]"
        :use-css-transforms="false"
    >
      <grid-item
          v-show="flag_0"
          v-model="layout[0]"
          :static="layout[0].static"
          :x="layout[0].x"
          :y="layout[0].y"
          :w="layout[0].w"
          :h="layout[0].h"
          :i="layout[0].i"
          :key="layout[0].i"
          drag-allow-from=".vue-draggable-handle"
          drag-ignore-from=".no-drag"
      >
        <div class="text">
          <!--<img src="../assets/logo.png" alt="Image">-->
          <MenuBar :options="menuData"/>
        </div>
      </grid-item>
      <grid-item
          id="one-grid"
          v-show="flag_1"
          v-model="layout[1]"
          :static="layout[1].static"
          :x="layout[1].x"
          :y="layout[1].y"
          :w="layout[1].w"
          :h="layout[1].h"
          :i="layout[1].i"
          :key="layout[1].i"
          drag-allow-from=".vue-draggable-handle"
          drag-ignore-from=".no-drag"
      >
        <div class="text1">
          <div class="vue-draggable-handle">
            <div class="vue-draggable-handle-right">
              <el-button @click="fullScreen(layout[1].i)">
                <svg
                    t="1686891331048"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="15043"
                >
                  <path
                      d="M896 85.333333H128a42.666667 42.666667 0 0 0-42.666667 42.666667v768a42.666667 42.666667 0 0 0 42.666667 42.666667h768a42.666667 42.666667 0 0 0 42.666667-42.666667V128a42.666667 42.666667 0 0 0-42.666667-42.666667z m-42.666667 768H170.666667V170.666667h682.666666z"
                      p-id="15044"
                      fill="#ffffff"
                  ></path>
                </svg>
              </el-button>
              <el-button @click="removeItem(layout[1].i)">
                <svg
                    t="1686909851186"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2377"
                >
                  <path
                      d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z"
                      fill="#ffffff"
                      p-id="2378"
                  ></path>
                </svg>
              </el-button>
            </div>
          </div>
          <LeftTree></LeftTree>
        </div>
      </grid-item>
      <grid-item
          v-show="flag_2"
          v-model="layout[2]"
          :static="layout[2].static"
          :x="layout[2].x"
          :y="layout[2].y"
          :w="layout[2].w"
          :h="layout[2].h"
          :i="layout[2].i"
          :key="layout[2].i"
          drag-allow-from=".vue-draggable-handle"
          drag-ignore-from=".no-drag"
      >
        <div class="text2">
          <div class="vue-draggable-handle">
            <div class="vue-draggable-handle-right">
              <el-button @click="fullScreen(layout[2].i)">
                <svg
                    t="1686891331048"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="15043"
                >
                  <path
                      d="M896 85.333333H128a42.666667 42.666667 0 0 0-42.666667 42.666667v768a42.666667 42.666667 0 0 0 42.666667 42.666667h768a42.666667 42.666667 0 0 0 42.666667-42.666667V128a42.666667 42.666667 0 0 0-42.666667-42.666667z m-42.666667 768H170.666667V170.666667h682.666666z"
                      p-id="15044"
                      fill="#ffffff"
                  ></path>
                </svg>
              </el-button>

              <el-button @click="removeItem(layout[2].i)">
                <svg
                    t="1686909851186"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2377"
                >
                  <path
                      d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z"
                      fill="#ffffff"
                      p-id="2378"
                  ></path>
                </svg>
              </el-button>
            </div>
          </div>
          <ProjectView></ProjectView>
        </div>
      </grid-item>
      <grid-item
          v-show="flag_3"
          v-model="layout[3]"
          :static="layout[3].static"
          :x="layout[3].x"
          :y="layout[3].y"
          :w="layout[3].w"
          :h="layout[3].h"
          :i="layout[3].i"
          :key="layout[3].i"
          drag-allow-from=".vue-draggable-handle"
          drag-ignore-from=".no-drag"
      >
        <div class="text3">
          <div class="vue-draggable-handle">
            <div class="vue-draggable-handle-right">
              <el-button @click="fullScreen(layout[3].i)">
                <svg
                    t="1686891331048"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="15043"
                >
                  <path
                      d="M896 85.333333H128a42.666667 42.666667 0 0 0-42.666667 42.666667v768a42.666667 42.666667 0 0 0 42.666667 42.666667h768a42.666667 42.666667 0 0 0 42.666667-42.666667V128a42.666667 42.666667 0 0 0-42.666667-42.666667z m-42.666667 768H170.666667V170.666667h682.666666z"
                      p-id="15044"
                      fill="#ffffff"
                  ></path>
                </svg>
              </el-button>
              <el-button @click="removeItem(layout[3].i)">
                <svg
                    t="1686909851186"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2377"
                >
                  <path
                      d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z"
                      fill="#ffffff"
                      p-id="2378"
                  ></path>
                </svg>
              </el-button>
            </div>
          </div>
          <PropertyComponent></PropertyComponent>
        </div>
      </grid-item>
      <grid-item
          v-show="flag_4"
          v-model="layout[4]"
          :static="layout[4].static"
          :x="layout[4].x"
          :y="layout[4].y"
          :w="layout[4].w"
          :h="layout[4].h"
          :i="layout[4].i"
          :key="layout[4].i"
          drag-allow-from=".vue-draggable-handle"
          drag-ignore-from=".no-drag"
      >
        <div class="text4">
          <div class="vue-draggable-handle">
            <div class="vue-draggable-handle-right">
              <el-button @click="fullScreen(layout[4].i)">
                <svg
                    t="1686891331048"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="15043"
                >
                  <path
                      d="M896 85.333333H128a42.666667 42.666667 0 0 0-42.666667 42.666667v768a42.666667 42.666667 0 0 0 42.666667 42.666667h768a42.666667 42.666667 0 0 0 42.666667-42.666667V128a42.666667 42.666667 0 0 0-42.666667-42.666667z m-42.666667 768H170.666667V170.666667h682.666666z"
                      p-id="15044"
                      fill="#ffffff"
                  ></path>
                </svg>
              </el-button>
              <el-button @click="removeItem(layout[4].i)">
                <svg
                    t="1686909851186"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2377"
                >
                  <path
                      d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z"
                      fill="#ffffff"
                      p-id="2378"
                  ></path>
                </svg>
              </el-button>
            </div>
          </div>
          <ShowChart></ShowChart>
        </div>
      </grid-item>
      <grid-item
          v-show="flag_5"
          v-model="layout[5]"
          :static="layout[5].static"
          :x="layout[5].x"
          :y="layout[5].y"
          :w="layout[5].w"
          :h="layout[5].h"
          :i="layout[5].i"
          :key="layout[5].i"
          drag-allow-from=".vue-draggable-handle"
          drag-ignore-from=".no-drag"
      >
        <div class="text5">
          <div class="vue-draggable-handle">
            <div class="vue-draggable-handle-right">
              <el-button @click="fullScreen(layout[5].i)">
                <svg
                    t="1686891331048"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="15043"
                >
                  <path
                      d="M896 85.333333H128a42.666667 42.666667 0 0 0-42.666667 42.666667v768a42.666667 42.666667 0 0 0 42.666667 42.666667h768a42.666667 42.666667 0 0 0 42.666667-42.666667V128a42.666667 42.666667 0 0 0-42.666667-42.666667z m-42.666667 768H170.666667V170.666667h682.666666z"
                      p-id="15044"
                      fill="#ffffff"
                  ></path>
                </svg>
              </el-button>
              <el-button @click="removeItem(layout[5].i)">
                <svg
                    t="1686909851186"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2377"
                >
                  <path
                      d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z"
                      fill="#ffffff"
                      p-id="2378"
                  ></path>
                </svg>
              </el-button>
            </div>
          </div>
          <Consoles></Consoles>
        </div>
      </grid-item>
      <grid-item
          v-show="flag_6"
          v-model="layout[6]"
          :static="layout[6].static"
          :x="layout[6].x"
          :y="layout[6].y"
          :w="layout[6].w"
          :h="layout[6].h"
          :i="layout[6].i"
          :key="layout[6].i"
          drag-allow-from=".vue-draggable-handle"
          drag-ignore-from=".no-drag"
      >
        <div class="text6">
          <div class="vue-draggable-handle">
            <div class="vue-draggable-handle-right">
              <el-button @click="fullScreen(layout[6].i)">
                <svg
                    t="1686891331048"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="15043"
                >
                  <path
                      d="M896 85.333333H128a42.666667 42.666667 0 0 0-42.666667 42.666667v768a42.666667 42.666667 0 0 0 42.666667 42.666667h768a42.666667 42.666667 0 0 0 42.666667-42.666667V128a42.666667 42.666667 0 0 0-42.666667-42.666667z m-42.666667 768H170.666667V170.666667h682.666666z"
                      p-id="15044"
                      fill="#ffffff"
                  ></path>
                </svg>
              </el-button>
              <el-button @click="removeItem(layout[6].i)">
                <svg
                    t="1686909851186"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2377"
                >
                  <path
                      d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z"
                      fill="#ffffff"
                      p-id="2378"
                  ></path>
                </svg>
              </el-button>
            </div>
          </div>
          <ShowTable></ShowTable>
        </div>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import {MenuBar} from "@imengyu/vue3-context-menu";
import ProjectView from "@/components/projectView/ProjectView";
import Consoles from "@/components/consoles/Consoles";
import LeftTree from "@/components/leftTree/LeftTree";
import ShowChart from "@/components/showChart/ShowChart";
import PropertyComponent from "@/components/properties/PropertyComponent";
import ShowTable from "@/components/showTable/ShowTable";

export default {
  name: "HomePage",
  components: {
    PropertyComponent,
    ShowChart,
    LeftTree,
    Consoles,
    ProjectView,
    MenuBar,
    ShowTable
  },
  data() {
    return {
      layout: [
        {x: 0, y: 0, w: 12, h: 10, i: "0", static: true},
        {x: 0, y: 2, w: 1, h: 241, i: "1", static: false},
        {x: 1, y: 2, w: 5, h: 184, i: "2", static: false},
        {x: 1, y: 2, w: 5, h: 56, i: "3", static: false},
        {x: 6, y: 2, w: 5, h: 184, i: "4", static: false},
        {x: 6, y: 2, w: 5, h: 56, i: "5", static: false},
        {x: 11, y: 22, w: 1, h: 241, i: "6", static: false},
      ],
      layout0: [
        {x: 0, y: 0, w: 12, h: 10, i: "0", static: true},
        {x: 0, y: 2, w: 1, h: 230, i: "1", static: false},
        {x: 1, y: 2, w: 5, h: 195, i: "2", static: false},
        {x: 1, y: 2, w: 5, h: 35, i: "3", static: false},
        {x: 6, y: 2, w: 5, h: 195, i: "4", static: false},
        {x: 6, y: 2, w: 5, h: 35, i: "5", static: false},
        {x: 11, y: 22, w: 1, h: 230, i: "6", static: false},
      ],
      layout1: [
        {x: 0, y: 0, w: 12, h: 10, i: "0", static: true},
        {x: 0, y: 2, w: 12, h: 185, i: "1", static: false},
        {x: 1, y: 2, w: 12, h: 150, i: "2", static: false},
        {x: 1, y: 2, w: 12, h: 35, i: "3", static: false},
        {x: 6, y: 2, w: 12, h: 150, i: "4", static: false},
        {x: 6, y: 2, w: 12, h: 35, i: "5", static: false},
        {x: 11, y: 22, w: 12, h: 185, i: "6", static: false},
      ],

      layoutw: [
        {x: 0, y: 0, w: 12, h: 10, i: "0", static: true},
        {x: 0, y: 2, w: 1, h: 230, i: "1", static: false},
        {x: 1, y: 2, w: 5, h: 195, i: "2", static: false},
        {x: 1, y: 2, w: 5, h: 35, i: "3", static: false},
        {x: 6, y: 2, w: 5, h: 195, i: "4", static: false},
        {x: 6, y: 2, w: 5, h: 35, i: "5", static: false},
        {x: 11, y: 22, w: 1, h: 230, i: "6", static: false},
      ],


      flag_0: true,
      flag_1: true,
      flag_2: true,
      flag_3: true,
      flag_4: true,
      flag_5: true,
      flag_6: true,
      menuData: {
        items: [


          {
            label: "文件",
            children: [
              {label: "新建文件"},
              {label: "打开文件"},
              {
                label: "打开最近文件",
                children: [
                  {label: "文件 1...."},
                  {label: "文件 2...."},
                  {label: "文件 3...."},
                  {label: "文件 4...."},
                  {label: "文件 5...."},
                ],
              },
              {label: "保存", divided: true},
              {label: "保存为..."},
              {label: "关闭"},
              {label: "退出"},
            ],
          },
          {
            label: "编辑",
            children: [
              {label: "撤销"},
              {label: "恢复"},
              {label: "剪贴", divided: true},
              {label: "粘贴"},
              {label: "查找", divided: true},
              {label: "替换"},
            ],
          },

          {
            label: "视图",
            children: [
              {
                label: "侧边数据库栏", id: 1, onClick: () => {
                  this.handleItemClick(1)
                }
              },
              {
                label: "工程视图区", id: 2, onClick: () => {
                  this.handleItemClick(2)
                }
              },
              {
                label: "属性区", id: 3, onClick: () => {
                  this.handleItemClick(3)
                }
              },
              {
                label: "数据道显示区", id: 4, onClick: () => {
                  this.handleItemClick(4)
                }
              },
              {
                label: "信息输出区", id: 5, onClick: () => {
                  this.handleItemClick(5)
                }
              },
              {
                label: "表格区", id: 6, onClick: () => {
                  this.handleItemClick(6)
                }
              },
            ],
          },
          {
            label: "帮助",
            children: [{label: "版本"}, {label: "关于"}],
          },
        ],
        theme: "mac dark",
        zIndex: 3,
        minWidth: 230,
      },
    };
  },
  mounted() {
    //this.layout[1].h = 241;

    //this.layout[1].h = 201;
    // this.$gridlayout.load();
    //this.index = this.layout.length;
  },


  methods: {
    handleItemClick(item) {
      console.log(item);


      if (this["flag_" + item] == false) {
        this["flag_" + item] = true;
        console.log(item);
      }

    },

    fullScreen(val) {
      // if(flag){
      //   this["flag_"+val]=
      // }else{

      // }

      if (this["flag_" + (7 - val)] == false) {
        this.flag_0 = true;
        this.flag_1 = true;
        this.flag_2 = true;
        this.flag_3 = true;
        this.flag_4 = true;
        this.flag_5 = true;
        this.flag_6 = true;
        this["flag_" + val] = false;
        this.layout[val] = this.layout0[val];
      } else {
        this.flag_0 = true;
        this.flag_1 = false;
        this.flag_2 = false;
        this.flag_3 = false;
        this.flag_4 = false;
        this.flag_5 = false;
        this.flag_6 = false;
        this["flag_" + val] = true;

        this.layout[val] = this.layout1[val];
      }
    },
    removeItem(val) {
      this["flag_" + val] = false;
      // this.one = val <= 0 ? true : false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 100%;
}

.vue-grid-item .text {
  font-size: 16px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid #ccc 1px;
  background-color: #ccc;
}

/*防止拖动按钮被覆盖，由于引入了第三方组件，所以需要穿透*/
:deep(.vue-grid-item .vue-resizable-handle) {
  z-index: 2147483647;
}

.vue-draggable-handle {
  position: absolute;
  width: 100%;
  height: 20px;
  top: 0;
  right: 0;
  background-origin: content-box;
  background-color: #2a3a48;
  box-sizing: border-box;
  cursor: move;
}

.vue-draggable-handle-right {
  height: 100%;
  position: absolute;
  right: 5px;
}

.vue-draggable-handle-right .el-button {
  width: 18px;
  height: 18px;
  line-height: 18px;
  background-color: rgb(255 255 255 / 0%);
  border: none;
}

.vue-draggable-handle-right .el-button svg {
  width: 15px;
  height: 15px;
}

.vue-draggable-handle-right .el-button + .el-button {
  margin-left: 0;
}
</style>
