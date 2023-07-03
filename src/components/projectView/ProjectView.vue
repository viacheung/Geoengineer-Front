<template>
  <div class="project-view">
    <!--工具栏-->
    <div class="project-view-toolbar">
      <div class="project-view-toolbar-right">
        <el-button size="small" class="button-select" @click="test" type="info">
          <svg t="1686889983883" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="23140">
            <path
                d="M480 112c0 35.346-28.654 64-64 64H176v672h672V578c0-34.993 28.084-63.426 62.942-63.991L912 514v366c0 17.673-14.327 32-32 32H144c-17.673 0-32-14.327-32-32V144c0-17.673 14.327-32 32-32h336z m-22.627 460.118c-17.674 0-32-14.327-32-32v-240c35.346 0 64 28.654 64 64v98.746L821.49 130.745c24.744-24.743 64.708-24.99 89.756-0.742l0.754 0.742-377.371 377.373h98.744c34.992 0 63.426 28.083 63.991 62.941l0.009 1.059h-240z"
                fill="#ffffff" fill-opacity=".65" p-id="23141"></path>
          </svg>
        </el-button>
        <el-button size="small" class="button-position" @click="arrow" type="info">
          <svg t="1686889214709" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="10502">
            <path
                d="M673.408 998.4a25.6 25.6 0 0 1-22.144-12.736l-188.16-324.352-144.192 142.016a25.664 25.664 0 0 1-43.392-15.296L189.44 54.208a25.728 25.728 0 0 1 40.64-23.616l594.368 438.976a25.6 25.6 0 0 1-8.256 45.248l-194.816 54.656 188.16 324.352c3.392 5.888 4.352 12.864 2.624 19.456s-6.016 12.16-11.904 15.552l-113.92 66.048a25.6 25.6 0 0 1-12.864 3.456z m-204.8-404.096a25.28 25.28 0 0 1 22.08 12.8l191.872 330.752 69.632-40.384-191.872-330.816a25.728 25.728 0 0 1 15.168-37.504l176.256-49.472L247.04 106.88l73.088 623.232L450.56 601.6a25.472 25.472 0 0 1 17.92-7.296z"
                p-id="10503" fill="#ffffff"></path>
          </svg>
        </el-button>
        <el-button size="small" class="button-pointer" @click="drag" type="info">
          <svg t="1686889811526" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="4523">
            <path
                d="M917.938963 326.642381l-71.530034 485.537199c-7.104835 36.848805-23.421871 52.98521-35.283333 64.786462-11.500199 11.439989-19.146928 19.026507-19.146928 56.176365V993.774346a30.105233 30.105233 0 0 1-60.210467 0v-60.631939c0-57.500995 16.73851-78.8155 36.969227-98.865586 9.332622-9.272412 14.932196-14.871985 18.303981-32.152389l71.349403-484.031937c1.083788-7.405887 3.070734-32.513652-16.437457-35.223123-6.743572-0.963367-12.222725 0.120421-16.557879 3.431997-5.780205 4.274943-9.874516 12.583987-11.319567 22.759556l-29.924602 199.657906a30.105233 30.105233 0 0 1-46.964164 20.230716c-3.010523 0.481684-8.068202-1.384841-13.125881-4.696416a29.984812 29.984812 0 0 1-13.788197-26.974289l17.159983-318.272524a28.961234 28.961234 0 0 0-26.010921-32.031968 28.118288 28.118288 0 0 0-20.832822 6.562941 28.178498 28.178498 0 0 0-10.055148 19.327559l-27.877445 287.92645a29.503128 29.503128 0 0 1-31.971758 27.15492 297.921387 297.921387 0 0 0-14.811775-0.662315 30.165444 30.165444 0 0 1-29.503128-29.563339l-6.924204-368.427843A28.298919 28.298919 0 0 0 531.267349 60.512121a28.238709 28.238709 0 0 0-28.178498 28.178498l-7.104835 396.54613a30.105233 30.105233 0 0 1-17.220193 26.673236c-3.733049 1.806314-7.345677 3.612628-10.777674 5.539363a30.285864 30.285864 0 0 1-44.796587-23.30145L392.181172 173.286324a28.41934 28.41934 0 1 0-56.537627 4.515785l30.285864 427.313678a30.045023 30.045023 0 0 1-53.587315 20.832821L218.955661 508.357568c-12.222725-20.471558-33.838282-26.191553-50.576791-16.497668a35.042491 35.042491 0 0 0-12.82483 48.108163l212.482735 366.501107c4.816837 8.369255 12.704408 14.20967 22.097242 16.497668a30.105233 30.105233 0 0 1 23.000398 29.262286v41.545222a30.105233 30.105233 0 0 1-60.210467 0v-21.073663a94.410011 94.410011 0 0 1-36.969226-36.005859l-212.542945-366.501107a94.22938 94.22938 0 0 1-9.633675-72.372981 95.433589 95.433589 0 0 1 174.790983-23.24124l30.466496 38.173436-23.421871-330.133986a88.449175 88.449175 0 0 1 145.348065-75.022241c8.790728 7.405887 15.835353 16.196615 21.073663 25.950711l0.842947-45.338481a88.388964 88.388964 0 0 1 176.777928 0.541894l0.842947 44.917008c5.298521-9.814306 12.403356-18.665245 21.254295-26.131342a88.870648 88.870648 0 0 1 145.649117 75.744766l-3.191155 58.885836a81.163708 81.163708 0 0 1 66.171303-18.906086c47.265216 6.562941 75.142662 49.13174 67.556143 103.38137z"
                p-id="4524" fill="#ffffff"></path>
          </svg>
        </el-button>
        <el-button size="small" class="button-magicStick" @click="beautifyLayout" type="info">
          <svg t="1686889870126" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="13953">
            <path
                d="M128 213.333333l85.333333-85.333333 682.666667 682.666667-85.333333 85.333333L128 213.333333z m426.666667 0l42.666666-85.333333 42.666667 85.333333 85.333333 42.666667-85.333333 42.666667-42.666667 85.333333-42.666666-85.333333-85.333334-42.666667 85.333334-42.666667zM213.333333 640l42.666667-85.333333 42.666667 85.333333 85.333333 42.666667-85.333333 42.666666-42.666667 85.333334-42.666667-85.333334-85.333333-42.666666 85.333333-42.666667zM170.666667 384l42.666666 42.666667-42.666666 42.666666-42.666667-42.666666 42.666667-42.666667z m597.333333 42.666667l42.666667 42.666666-42.666667 42.666667-42.666667-42.666667 42.666667-42.666666z"
                fill="#ffffff" p-id="13954"></path>
          </svg>
        </el-button>
      </div>
    </div>
    <!--使用 autoResize 配置时，需要在画布容器外面再套一层宽高都是 100% 的外层容器，在外层容器上监听尺寸改变，当外层容器大小改变时，画布自动重新计算宽高以及元素位置。 -->
    <div class="project-view-main">
      <div style="width:100%; height:100%">
        <div id="container"></div>
        <TeleportContainer/>
      </div>
      <!--垃圾桶-->
      <div v-show="selectedCells.length>0" class="project-view-trash" @click="showDeleteDialog()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-trash"></use>
        </svg>
      </div>
    </div>
    <!--对话框-->
    <div class="project-view-dialog">
      <!-- 节点重命名对话框 -->
      <el-dialog v-model="renameDialogVisible" title="节点重命名" width="30%" draggable>
        <el-form>
          <el-form-item label="新名称" :label-width="formLabelWidth">
            <el-input v-model="reName.newName" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="renameDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="renameNode">确认</el-button>
      </span>
        </template>
      </el-dialog>
      <!-- 节点删除对话框 -->
      <el-dialog v-model="deleteDialogVisible" title="节点删除" width="30%" draggable>
        <span>确定要删除此节点吗？</span>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="batchDeleteNodes()">确认</el-button>
      </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {Graph, Shape} from "@antv/x6";
import {getTeleport, register} from "@antv/x6-vue-shape";
import DataNode from "@/components/projectView/nodes/DataNode.vue";
import OperationNode from "@/components/projectView/nodes/OperationNode";
import RenderNode from "@/components/projectView/nodes/RenderNode";
import {useSheetStore} from "@/store/sheetStore";
import {useSheetToProjectStore} from "@/store/sheetToProjectStore"
import {useConsolesStore} from "@/store/consolesStore"
import {useProjectToTrackStore} from "@/store/projectToTrackStore";
import {useProjectToPropertiesStore} from "@/store/projectToPropertiesStore";
import {Selection} from "@antv/x6-plugin-selection";
import {DagreLayout} from '@antv/layout';
import {Keyboard} from "@antv/x6-plugin-keyboard";
import "@/assets/icons/iconfont";
import calculator2 from "@/utils/calculator2.js";

let TeleportContainer = getTeleport();
//画布绑定dom
let container;

export default {
  name: "ProjectView",
  components: {
    TeleportContainer,
  },
  data() {
    return {
      //保存画布配置
      graph: '',
      //节点数据
      nodeData: {
        nodes: [],
        edges: []
      },
      //节点配置
      nodeConfig: {
        //保证id唯一
        renderNodeId: 1,
        DataNodeId: 1,
        operationNodeId: 1,
        width: 120,
        height: 32
      },
      //布局配置-树型布局
      dagreLayout: '',
      //布局化的节点
      newModel: '',
      //store合集
      sheetStore: useSheetStore(),
      sheetToProjectStore: useSheetToProjectStore(),
      projectToTrackStore: useProjectToTrackStore(),
      consolesStore: useConsolesStore(),
      projectToPropertiesStore: useProjectToPropertiesStore(),
      //当前被点击的节点
      onClickNode: '',
      //当前被框选的节点
      selectedCells: [],
      //当前被点击的节点dom
      onClickNodeDom: '',
      //画布右键菜单
      graphMenuOptions: {
        getContainer: () => container, //myMenuContainer 是挂载容器
        theme: "mac dark",
        zIndex: '3',
        items: [
          {
            label: "导入数据节点",
            svgIcon: "#icon-down-arrow",
            svgProps: {
              fill: '#ffffff',
            },
            children: [
              {
                label: "第一工区",
                children: [
                  {
                    label: "第一个井",
                    children: [
                      {
                        label: "属性1",
                        onClick: () => {
                          alert("You click a menu item");
                        }
                      },
                      {
                        label: "属性2",
                        onClick: () => {
                          alert("You click a menu item");
                        }
                      }
                    ]
                  },
                  {
                    label: "第二个井"
                  }
                ]
              },
              {
                label: "第二工区",
              },
            ]
          },
          {
            label: "新建运算节点",
            svgIcon: "#icon-plus",
            svgProps: {
              fill: '#ffffff',
            },
            onClick: ($event) => {
              this.graphMenuClick(event, "新建运算节点");
            }
          },
        ]
      },
      //数据节点右键菜单
      propertyMenuOptions: {
        getContainer: () => container,
        theme: "mac dark",
        zIndex: '3',
        minWidth: '230',
        items: [
          {
            label: "显示",
            svgIcon: "#icon-analytics",
            svgProps: {
              fill: '#ffffff',
            },
            children: [
              {
                label: "柱状图",
                svgIcon: "#icon-zhuzhuangtu",
                svgProps: {
                  fill: '#ffffff',
                },
                onClick: () => {
                  this.propertyMenuClick("显示", "柱状图");
                }
              },
              {
                label: "折线图",
                svgIcon: "#icon-baobiao",
                svgProps: {
                  fill: '#ffffff',
                },
                onClick: () => {
                  this.propertyMenuClick("显示", "折线图");
                }
              }, {
                label: "热力图",
                svgIcon: "#icon-relitu",
                svgProps: {
                  fill: '#ffffff',
                },
                onClick: () => {
                  this.propertyMenuClick("显示", "热力图");
                }
              }, {
                label: "图片列",
                svgIcon: "#icon-tupian",
                svgProps: {
                  fill: '#ffffff',
                },
                onClick: () => {
                  this.propertyMenuClick("显示", "图片列");
                }
              }, {
                label: "表格",
                svgIcon: "#icon-biaoge",
                svgProps: {
                  fill: '#ffffff',
                },
                onClick: () => {
                  this.propertyMenuClick("显示", "表格");
                }
              },
            ]
          },
          {
            label: "重命名",
            svgIcon: "#icon-edit-alt",
            svgProps: {
              fill: '#ffffff',
            },
            onClick: () => {
              this.propertyMenuClick("重命名");
            }
          },
          {
            label: "删除",
            svgIcon: "#icon-trash",
            svgProps: {
              fill: '#ffffff',
            },
            onClick: () => {
              this.propertyMenuClick("删除");
            }
          },
          {
            label: "导出数据节点",
            svgIcon: "#icon-export",
            svgProps: {
              fill: '#ffffff',
            },
            onClick: () => {
              this.propertyMenuClick("导出数据节点");
            }
          }, {
            label: "属性",
            svgIcon: "#icon-ellipsis-v",
            svgProps: {
              fill: '#ffffff',
            },
            onClick: () => {
              this.propertyMenuClick("属性");
            }
          },
        ]
      },
      //运算节点右键菜单
      operationMenuOptions: {
        getContainer: () => container,
        theme: "mac dark",
        zIndex: '3',
        minWidth: '230',
        items: [
          {
            label: "显示",
            svgIcon: "#icon-analytics",
            svgProps: {
              fill: '#ffffff',
            },
            children: [
              {
                label: "第一工区",
                children: [
                  {
                    label: "第一个井",
                    children: [
                      {
                        label: "属性1",
                        onClick: () => {
                          alert("You click a menu item");
                        }
                      },
                      {
                        label: "属性2",
                        onClick: () => {
                          alert("You click a menu item");
                        }
                      }
                    ]
                  },
                  {
                    label: "第二个井"
                  }
                ]
              },
              {
                label: "第二工区",
              },
            ]
          },
          {
            label: "重命名",
            svgIcon: "#icon-edit-alt",
            svgProps: {
              fill: '#ffffff',
            },
            onClick: () => {
              this.operationMenuClick("重命名");
            }
          }, {
            label: "删除",
            svgIcon: "#icon-trash",
            svgProps: {
              fill: '#ffffff',
            },
            onClick: () => {
              this.operationMenuClick("删除");
            }
          }, {
            label: "属性",
            svgIcon: "#icon-ellipsis-v",
            svgProps: {
              fill: '#ffffff',
            },
            onClick: () => {
              this.operationMenuClick("属性");
            }
          },
        ]
      },
      //显示节点右键菜单
      renderMenuOptions: {
        getContainer: () => container,
        theme: "mac dark",
        zIndex: '3',
        minWidth: '230',
        items: [
          {
            label: "显示",
            svgIcon: "#icon-analytics",
            svgProps: {
              fill: '#ffffff',
            },
            children: [
              {
                label: "第一工区",
                children: [
                  {
                    label: "第一个井",
                    children: [
                      {
                        label: "属性1",
                        onClick: () => {
                          alert("You click a menu item");
                        }
                      },
                      {
                        label: "属性2",
                        onClick: () => {
                          alert("You click a menu item");
                        }
                      }
                    ]
                  },
                  {
                    label: "第二个井"
                  }
                ]
              },
              {
                label: "第二工区",
              },
            ]
          },
          {
            label: "重命名",
            svgIcon: "#icon-edit-alt",
            svgProps: {
              fill: '#ffffff',
            },
            onClick: () => {
              this.propertyMenuClick("重命名");
            }
          }, {
            label: "删除",
            svgIcon: "#icon-trash",
            svgProps: {
              fill: '#ffffff',
            },
            onClick: () => {
              this.propertyMenuClick("删除");
            }
          }, {
            label: "属性",
            svgIcon: "#icon-ellipsis-v",
            svgProps: {
              fill: '#ffffff',
            },
            onClick: () => {
              this.propertyMenuClick("属性");
            }
          },
        ]
      },
      //重命名对话框是否显示
      renameDialogVisible: false,
      //重命名
      reName: {
        oldName: '',
        newName: ''
      },
      //节点删除对话框是否显示
      deleteDialogVisible: false,
    }
  },
  methods: {
    //导入测试数据
    test() {
      let that = this;
      // todo：模拟井数据管理器数据更新操作
      let 第一工区 = {
        //表名
        第一个井: {
          //列名和对应顺序的数据
          井深: [1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892],
          钻时: [1.53, 1.52, 1.52, 1.57, 1.63, 1.63, 1.63, 1.63, 1.62, 1.63, 1.67, 1.8, 1.73, 1.75, 1.77, 1.77, 1.77, 1.77, 1.77, 1.78, 1.85, 1.9, 1.9, 2.03, 4.03, 1.52, 1.53, 1.53, 1.52, 1.52, 1.67, 1.55, 1.63, 1.67, 1.65, 1.78, 1.65, 1.63, 1.63, 1.63, 1.65, 1.77, 1.77],
          钻压: [51.6, 66, 51.9, 77.8, 80.9, 77.8, 65.8, 76.8, 67.5, 101.6, 151.3, 69, 81.6, 59, 84.9, 77.9, 73.8, 65.1, 66.8, 65.6, 67.4, 61.3, 78.6, 76.5, 37.9, 86.9, 45.5, 67.2, 67.5, 74.4, 53.3, 51.5, 68.2, 74.6, 75.5, 66.4, 132.4, 79.1, 55.6, 70.9, 70.5, 58.9, 73.8],
        },
        第二个井: {
          井深: [1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937],
          扭矩: [14.3, 15.7, 16.5, 14.7, 14.2, 12.8, 14.6, 11.5, 14.2, 11.2, 12.8, 13, 13.4, 12.7, 12.9, 13.1, 12.6, 12.8, 13, 14.5, 13.1, 12.8, 12.6, 11.8, 11, 12.9, 12.9, 11.8, 12.7, 13.7, 15, 13.8, 12.6, 13.6, 12.6, 13.3, 12.4, 13.2, 16, 16.6, 17.8, 15.2, 16],
          转速: [100, 101, 100, 101, 101, 101, 101, 101, 93, 96, 98, 98, 99, 97, 99, 97, 97, 98, 98, 98, 98, 99, 98, 98, 97, 98, 98, 97, 97, 98, 99, 99, 98, 98, 98, 98, 99, 97, 100, 100, 101, 101, 101],
          立管压力: [24.5, 24.3, 24.3, 24.1, 24.3, 24.1, 24.5, 24.3, 24.3, 23.9, 23.8, 24.2, 24.5, 24.3, 24.6, 25, 24.7, 24.8, 24.5, 24.6, 24.8, 24.9, 24.9, 24.9, 24.7, 24.5, 24.8, 24.9, 24.7, 24.9, 24.7, 24.4, 24.6, 24.7, 24.6, 24.7, 24.7, 23.8, 23.8, 24.8, 24.9, 24.8, 24.7],
        }

      };
      let 第二工区 = {
        //表名
        sheet3: {
          //列名和对应顺序的数据
          property1: [1, 2, 3, 4, 5, 6],
          property2: [1, 2, 3, 4, 5, 6],
          property3: [1, 2, 3, 4, 5, 6],
          property4: [1, 2, 3, 4, 5, 6]
        },
        sheet4: {
          property1: [1, 2, 3, 4, 5, 6],
          property2: [1, 2, 3, 4, 5, 6],
          property3: [1, 2, 3, 4, 5, 6],
          property4: [1, 2, 3, 4, 5, 6],
        }

      };
      that.sheetStore.sheetData = {
        第一工区, 第二工区
      };
      // todo:模拟井数据管理器发送数据给当前组件
      第一工区 = {
        //表名
        //列名和对应顺序的数据
        第一个井: ["井深", "钻时", "钻压"],
        第二个井: ["井深", "扭矩", "转速", "立管压力"]
      };
      that.sheetToProjectStore.selected = {第一工区};
      //console.log(useSheetStore().sheetData.第一工区.第一个井);
    },
    //画布初始化，注册自定义节点
    initGraph() {
      let that = this;
      //注册自定义节点
      //绿色的数据节点
      register({
        shape: "DataNode",
        width: 120, //默认宽度
        height: 32, //默认高度
        component: DataNode,
        ports: {
          groups: {
            //输出链接桩群组定义
            out: {
              position: 'right',
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,//使链接桩在连线交互时可以被连接上
                  stroke: '#31d0c6',
                  strokeWidth: 1,
                  fill: '#fff',
                },
              },
            },
          },
          items: [
            {
              id: 'out-port-1',
              group: 'out',
            },
          ],
        },
      });
      //红色的运算节点
      register({
        shape: "OperationNode",
        width: 120, // 默认宽度
        height: 32, // 默认高度
        component: OperationNode,
        ports: {
          groups: {
            // 输出链接桩群组定义
            in: {
              position: 'left',
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,//使链接桩在连线交互时可以被连接上
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                },
              },
            },
            out: {
              position: 'right',
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,//使链接桩在连线交互时可以被连接上
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                },
              },
            }
          },
          items: [
            {
              id: 'in-port-1',
              group: 'in',
            }, {
              id: 'in-port-2',
              group: 'in',
            },
            {
              id: 'out-port-1',
              group: 'out',
            },
          ],
        }
      });
      //黄色的显示节点
      register({
        shape: "RenderNode",
        width: 120, // 默认宽度
        height: 32, // 默认高度
        component: RenderNode,
        ports: {
          groups: {
            // 输出链接桩群组定义
            in: {
              position: 'left',
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,//使链接桩在连线交互时可以被连接上
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                },
              },
            },
          },
          items: [
            {
              id: 'in-port-1',
              group: 'in',
            },
          ],
        }
      });
      //注册自定义的边
      Graph.registerEdge('myEdge', {
        inherit: 'edge',
        connector: {name: 'smooth'},
        attrs: {
          line: {
            stroke: "#ffffff",
            strokeWidth: 2,
            targetMarker: {
              name: "block",
              size: 5,
            },
          },
        },
      })
      //画布绑定
      container = document.getElementById("container");
      //配置画布信息
      that.graph = new Graph({
        //画布的容器
        container: container,
        //是否监听容器大小改变，并自动更新画布大小。
        autoResize: true,
        //画布是否可以拖拽平移
        panning: false,
        //鼠标滚轮缩放。
        mousewheel: false,
        //背景
        background: {color: "#212121"},
        //网格
        grid: {
          //是否启用
          visible: true,
          // 网格大小 10px
          size: 10,
          //网格类型，双线网状网格
          type: 'doubleMesh',
          args: [
            {
              color: 'rgba(65,65,65,0.57)', // 主网格线颜色
              thickness: 1, // 主网格线宽度
            },
            {
              color: '#414141', // 次网格线颜色
              thickness: 1, // 次网格线宽度
              factor: 4, // 主次网格线间隔
            },
          ],
        },
        //对连线过程进行控制
        connecting: {
          //连线的过程中距离节点或者连接桩 10px 时会触发自动吸附
          snap: {
            radius: 10,
          },
          allowBlank: false,
          allowMulti: false,
          allowLoop: false,
          allowNode: false,
          allowEdge: false,
          highlight: true,
          connector: 'smooth',
          //通过该方法可以自定义新建的边的样式
          createEdge() {
            return new Shape.Edge({
              shape: 'myEdge',
              attrs: {
                line: {
                  stroke: "#ffffff",
                  strokeWidth: 2,
                  targetMarker: {
                    size: 5,
                  },
                },
              },
            });
          },
        },
        highlighting: {
          // 连接桩可以被连接时在连接桩外围围渲染一个包围框
          magnetAvailable: {
            name: "stroke",
            args: {
              attrs: {
                fill: "#fff",
                stroke: "#A4DEB1",
                strokeWidth: 4,
              },
            },
          },
          // 连接桩吸附连线时在连接桩外围围渲染一个包围框
          magnetAdsorbed: {
            name: "stroke",
            args: {
              attrs: {
                fill: "#fff",
                stroke: "#31d0c6",
                strokeWidth: 4,
              },
            },
          },
        },
      });
      //启用框选插值
      that.graph.use(
          new Selection({
            enabled: true,
            rubberband: true,
            showNodeSelectionBox: true
          })
      );
      //启用快捷键功能
      that.graph.use(
          new Keyboard({
            enabled: true,
            /*
            是否为全局键盘事件，设置为 true 时键盘事件绑定在 document 上，否则绑定在画布容器上
            当绑定在画布容器上时，需要容器获得焦点才能触发键盘事件
            */
            global: false
          })
      );
      //节点布局的配置-树型
      that.dagreLayout = new DagreLayout({
        type: 'dagre',
        //布局的方向
        rankdir: 'LR',
        //节点对齐方式
        align: 'UL',
        //节点间距
        ranksep: 40,
        //层间距
        nodesep: 5,
        //是否保留布局连线的控制点
        controlPoints: true,
      })
      //画布的居中显示
      that.graph.centerContent();
    },
    //根据store中的数据来更新画布与数据
    updateGraph(selected) {
      let that = this;
      for (let key1 in selected) {
        //工区名
        let workArea = key1;
        for (let key2 in selected[workArea]) {
          //井名
          let well = key2;
          //属性列表
          let propertyList = selected[workArea][well];
          for (let i = 0; i < propertyList.length; i++) {
            let newNode = {
              //String，可选，节点的唯一标识
              id: well + "-" + propertyList[i],
              //与节点/边关联的业务数据
              data: {
                //工区名
                workArea: workArea,
                //井名
                well: well,
                //属性名
                attributes: propertyList[i],
                //展示的标签
                label: well + "-" + propertyList[i],
                //节点类型
                nodeType: "dataNode",
                //节点大小
                largeness: "width:120px,height:32px",
                //坐标
                coordinate: "x:78,y:43",
                nodeId: well + "-" + propertyList[i],
              },
              //节点类型
              shape: 'DataNode'
            }
            that.nodeData.nodes.push(newNode);
          }
        }
      }
      // 节点布局处理
      that.newModel = that.dagreLayout.layout(that.nodeData)
      // 渲染元素
      that.graph.fromJSON(that.newModel)
      that.graph.zoomToFit({maxScale: 1});
      //画布的居中显示
      that.graph.centerContent();
    },
    //工具栏-箭头选择按钮
    arrow() {
      let that = this;
      //更新画布，不可拖动画布，不可缩放
      that.graph.disablePanning();
      that.graph.disableMouseWheel();
      //启用框选
      that.graph.enableRubberband();
    },
    //工具栏-手型拖动按钮
    drag() {
      let that = this;
      //更新画布，可拖动画布，可缩放
      that.graph.enablePanning();
      that.graph.enableMouseWheel();
      //禁用框选
      that.graph.disableRubberband();
    },
    //工具栏-美化布局按钮
    beautifyLayout() {
      let that = this;
      // 节点布局处理
      that.newModel = that.dagreLayout.layout(that.nodeData);
      // console.log(that.newModel);
      // 渲染元素
      that.graph.fromJSON(that.newModel)
      that.graph.zoomToFit({maxScale: 1});
      that.graph.centerContent();
    },
    //展示空白画布处的右键菜单
    showGraphContextMenu(e) {
      let that = this;
      that.graphMenuOptions.x = e.offsetX;
      that.graphMenuOptions.y = e.offsetY;
      //显示组件菜单
      that.$contextmenu(that.graphMenuOptions);
    },
    //画布右键菜单功能
    graphMenuClick(event, command) {
      let that = this;
      //新建运算节点
      if (command === "新建运算节点") {
        //坐标变换，坑死我了，antv狗都不用
        let position = that.graph.graphToLocal(event.clientX - container.getBoundingClientRect().left, event.clientY - container.getBoundingClientRect().top);
        let newNode = new Object({
          id: "运算节点" + that.nodeConfig.operationNodeId,// String，可选，节点的唯一标识
          //与节点/边关联的业务数据
          data: {
            label: "运算节点"
          },
          shape: 'OperationNode',
          x: position.x,
          y: position.y
        })
        that.nodeConfig.operationNodeId++;
        that.nodeData.nodes.push(newNode);
        that.graph.addNode(newNode);
      }
    },
    //展示数据节点处的右键菜单
    showPropertyContextMenu({e, distanceX, distanceY}) {
      let that = this;
      //显示组件菜单
      that.propertyMenuIsShow = true;
      that.propertyMenuOptions.x = distanceX + e.offsetX;
      that.propertyMenuOptions.y = distanceY + e.offsetY;
      that.$contextmenu(that.propertyMenuOptions);
    },
    //数据节点右键菜单功能
    propertyMenuClick(command, pram) {
      let that = this;
      if (command === "显示") {//显示
        let position = that.graph.graphToLocal(that.onClickNodeDom.getBoundingClientRect().left - container.getBoundingClientRect().left, that.onClickNodeDom.getBoundingClientRect().top - container.getBoundingClientRect().top);
        let newNode = new Object({
          id: pram + "-" + that.nodeConfig.renderNodeId,
          data: {
            label: pram,
          },
          shape: 'RenderNode',
          x: position.x + 160,
          y: position.y
        })
        let newEdge = new Object(
            {
              shape: 'myEdge',
              // 这里的cell如果不写id，拖动被连接点的时候，线条会出问题
              source: {cell: that.onClickNode.id, port: "out-port-1"}, // 源节点和连接桩 ID
              target: {cell: newNode.id, port: "in-port-1"}, // 目标节点 ID 和连接桩 ID
            }
        )
        that.nodeConfig.renderNodeId++;
        that.nodeData.nodes.push(newNode);
        that.nodeData.edges.push(newEdge);
        that.graph.addEdge(newEdge);
        that.graph.addNode(newNode);
        //给数据道显示区发送数据
        that.updateProjectToTrackStore(that.onClickNode);
      } else if (command === "重命名") {//重命名
        //获取旧名字
        let nodeData = that.onClickNode.getData();
        that.reName.oldName = nodeData.label;
        that.reName.newName = that.reName.oldName;
        that.renameDialogVisible = true;
      } else if (command === "删除") {//删除
        that.deleteDialogVisible = true;
      } else if (command === "导出数据节点") {//导出数据节点

      } else if (command === "属性") {//属性
      }
    },
    //呼出运算节点处的右键菜单
    showOperationContextMenu({e, distanceX, distanceY}) {
      let that = this;
      //显示组件菜单
      that.operationMenuIsShow = true;
      that.operationMenuOptions.x = distanceX + e.offsetX;
      that.operationMenuOptions.y = distanceY + e.offsetY;
      that.$contextmenu(that.operationMenuOptions);
    },
    //运算节点右键菜单功能
    operationMenuClick(command) {
      let that = this;
      //显示
      if (command === "显示") {
        let position = that.graph.graphToLocal(that.onClickNodeDom.getBoundingClientRect().left - container.getBoundingClientRect().left, that.onClickNodeDom.getBoundingClientRect().top - container.getBoundingClientRect().top);
        let newNode = new Object({
          id: "折线图-" + that.nodeConfig.renderNodeId,// String，可选，节点的唯一标识
          data: {
            label: "折线图"
          }, // label 继承于基类的自定义选项
          shape: 'RenderNode',
          x: position.x + 160,
          y: position.y
        })
        let newEdge = new Object(
            {
              shape: 'myEdge',
              // 他妈的有bug，这里的cell如果不写id，拖动被连接点的时候，线条会出问题
              source: {cell: that.onClickNode.id, port: "out-port-1"}, // 源节点和连接桩 ID
              target: {cell: newNode.id, port: "in-port-1"}, // 目标节点 ID 和连接桩 ID
            }
        )
        that.nodeConfig.renderNodeId++;
        that.nodeData.nodes.push(newNode);
        that.nodeData.edges.push(newEdge);
        that.graph.addEdge(newEdge);
        that.graph.addNode(newNode);
      } else if (command === "重命名") {//重命名
        that.dialogVisible = true;
      }
    },
    //呼出显示节点处的右键菜单
    showRenderContextMenu({e, distanceX, distanceY}) {
      let that = this;
      //显示组件菜单
      that.renderMenuIsShow = true;
      that.renderMenuOptions.x = distanceX + e.offsetX;
      that.renderMenuOptions.y = distanceY + e.offsetY;

      that.$contextmenu(that.renderMenuOptions);
    },
    //显示节点右键菜单功能
    renderMenuClick(command) {
      let that = this;
      if (command === "删除") {
        //new
        that.nodeData.nodes.push();
      } else if (command === "属性") {
        that.nodeData.nodes.push();
      }
    },
    //展示删除对话框
    showDeleteDialog() {
      let that = this;
      if (that.selectedCells.length) {
        that.deleteDialogVisible = true;
      }
      return false
    },
    //批量删除节点
    batchDeleteNodes() {
      let that = this;
      //修改data
      that.nodeData.nodes = that.nodeData.nodes.filter(obj => !that.selectedCells.some(a => a.id === obj.id));
      that.graph.removeCells(that.selectedCells);
      //当前被点击的节点
      that.onClickNode = '';
      //当前被框选的节点
      that.selectedCells = [];
      //当前被点击的节点dom
      that.onClickNodeDom = '';
      that.deleteDialogVisible = false;
    },
    //重命名节点
    renameNode() {
      let that = this;
      //获取节点id
      let nodeId = that.onClickNode.id;
      let newName = that.reName.newName;
      let nodeData = {
        label: newName
      }
      //更新画布
      let cell = that.graph.getCellById(nodeId);
      cell.setData(nodeData);
      //修改data
      let targetNode = that.nodeData.nodes.find(obj => obj.id === nodeId);
      if (targetNode) {
        targetNode.data.label = newName;
      }
      that.renameDialogVisible = false;
    },
    //显示属性
    showProperty(node) {
      //todo
      let that = this;
      that.consolesStore.logOutput.projectView.push("您点击了节点：" + node.id);
      that.projectToPropertiesStore.nodeInfo = node.getData();
    },
    //给数据道显示区发送数据
    updateProjectToTrackStore(node) {
      let that = this;
      //获取业务数据
      let nodeData = node.getData();
      //获取工区名
      let workArea = nodeData.workArea;
      //获取井名
      let well = nodeData.well;
      //获取属性名
      let property = nodeData.property;
      //获取数据
      let deepData = that.sheetStore.sheetData[workArea][well].井深;
      let propertyData = that.sheetStore.sheetData[workArea][well][property];
      that.projectToTrackStore.selected = {
        renderType: "line",
        well: well,
        deepName: "深度",
        propertyName: property,
        deepData: deepData,
        propertyData: propertyData
      };
      //console.log(that.projectToTrackStore.selected);
    }
  },
  mounted() {
    let that = this;
    //画布初始化，注册自定义节点
    that.initGraph();
    //监听画布空白处的单击事件
    that.graph.on("blank:click", () => {
      //当前被点击的节点
      that.onClickNode = '';
      //当前被框选的节点
      that.selectedCells = [];
      //当前被点击的节点dom
      that.onClickNodeDom = '';
    });
    //监听画布空白处的右键菜单
    that.graph.on("blank:contextmenu", ({e}) => {
      that.showGraphContextMenu(e);
    });
    //监听节点左键单击的事件
    that.graph.on("node:click", ({node}) => {
      if (node.shape === "DataNode") {
        console.log(node);
        that.showProperty(node);
      } else if (node.shape === "OperationNode") {
        console.log(node);
      } else if (node.shape === "RenderNode") {
        console.log(node);
      }
    });
    //监听节点右键按下的事件
    that.graph.on("node:contextmenu", ({e, node}) => {
      //console.log(e);
      let targetNode = e.target;
      let distanceX = targetNode.getBoundingClientRect().left - container.getBoundingClientRect().left;
      let distanceY = targetNode.getBoundingClientRect().top - container.getBoundingClientRect().top;
      that.onClickNode = node;
      that.selectedCells = [node];
      that.onClickNodeDom = targetNode;
      if (node.shape === "DataNode") {
        that.showPropertyContextMenu({e, distanceX, distanceY});
      } else if (node.shape === "OperationNode") {
        that.showOperationContextMenu({e, distanceX, distanceY});
      } else if (node.shape === "RenderNode") {
        that.showRenderContextMenu({e, distanceX, distanceY});
      }
    });
    //监听节点被框选的事件
    that.graph.on('node:selected', ({node}) => {
      that.onClickNode = node;
      that.selectedCells.push(node);
    })
    //监听快捷键事件
    //批量删除
    that.graph.bindKey('Delete', () =>
        that.showDeleteDialog()
    )
    //节点重命名
    that.graph.bindKey('F2', () => {
      that.selectedCells = that.graph.getSelectedCells()
      if (that.selectedCells.length === 1) {
        let nodeId = that.selectedCells [0].id;
        //获取旧名字
        that.reName.oldName = nodeId;
        that.reName.newName = nodeId;
        that.renameDialogVisible = true;
      }
      return false
    })

    //接收井数据管理器传来的数据
    that.sheetToProjectStoreSubscribe = that.sheetToProjectStore.$subscribe((mutation, state) => {
      //获取当前被选中的表和列名
      let selected = state.selected;
      //根据store中的数据来更新画布与数据
      that.updateGraph(selected);
    }, {detached: true});
  }
}
</script>

<style scoped>
.project-view {
  position: absolute;
  width: 100%;
  height: calc(100% - 20px);
  bottom: 0;
  right: 0;
  background-origin: content-box;
  background-color: #616161;
  box-sizing: border-box;
}

.project-view-toolbar {
  position: absolute;
  width: 100%;
  height: 22px;
  top: 0;
  right: 0;
  background-origin: content-box;
  background-color: #2b303b;
  box-sizing: border-box;
  border-width: 1px;
  border-color: #414141;
}

.project-view-toolbar-right {
  height: 100%;
  position: absolute;
  right: 10px;
}

.project-view-toolbar-right .el-button {
  width: 18px;
  height: 18px;
  line-height: 18px;
}

.project-view-toolbar-right .el-button svg {
  width: 15px;
  height: 15px;
}

.project-view-main {
  position: absolute;
  width: 100%;
  height: calc(100% - 22px);
  bottom: 0;
  right: 0;
  background-origin: content-box;
  background-color: #616161;
  box-sizing: border-box;
}

.project-view-trash {
  position: absolute;
  bottom: 16px;
  right: 33px;
  width: 22px;
  height: 22px;
  cursor: pointer;
  z-index: 999;
}

.project-view-trash svg {
  width: 20px;
  height: 20px;
}

:deep(.x6-widget-selection-box) {
  border: 2px dashed #239edd;
  box-shadow: none;
}

:deep(.x6-widget-selection-inner) {
  border: 1px solid #239edd;
  box-shadow: none;
}
</style>