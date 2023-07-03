<template>
  <div class="showchart">
    <div class="showchart-toolbar">

      <div class="showchart-toolbar-right">

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

    <div class="show-chart" v-show="isVisible">
      <table class="custom-table">
        <thead>
          <tr class="firstHead">
            <th colspan="1" rowspan="2" class="deepth-head">
              深度
            </th>
            <th v-for="(header, index) in firstLevelHeaders" :colspan="header.colspan" :rowspan="header.rowspan"
              :key="index">
              {{ header.label }}
            </th>
          </tr>
          <tr class="twoHead">
            <th v-for="(header, index) in secondLevelHeaders" :key="index">
              {{ header.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- 表格内容 style="weight:400px; height: 200px":colspan="header.colspan || 1"-->
          <tr>
            <td>
              <div id="deepth-line"></div>
            </td>
            <td v-for="(header, index) in secondLevelHeaders" :key="index" class="data-line">

              <el-scrollbar>
                <div :id="'chartContainer' + index" class="chart-container" @dblclick="handleDoubleClick(index)"></div>
              </el-scrollbar>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.showchart {
  position: absolute;
  width: 100%;
  height: calc(100% - 20px);
  bottom: 0;
  right: 0;
  background-origin: content-box;
  background-color: #616161;
  box-sizing: border-box;
}

.showchart-toolbar {
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

.showchart-toolbar-right {
  height: 100%;
  position: absolute;
  right: 10px;
}

.showchart-toolbar-right .el-button {
  width: 18px;
  height: 18px;
  line-height: 18px;
}

.showchart-toolbar-right .el-button svg {
  width: 15px;
  height: 15px;
}



.showchart .show-chart {
  position: absolute;
  width: 100%;
  height: calc(100% - 22px);
  bottom: 0;
  right: 0;
  background-origin: content-box;
  background-color: #616161;
  box-sizing: border-box;
  /*overflow-y: auto;*/
  overflow-x: auto;
}

.custom-table {

  border-spacing: 0;
}

.custom-table th {
  border: 1px solid #ccc;
  padding: 8px;
  position: sticky;
  top: 0;
  text-align: center;
}

.custom-table td {
  border: 1px solid #ccc;
  padding: 0px;

  text-align: center;
  background-color: #ffffff;


}


.firstHead th {
  background-color: #f0f0f0;
  height: 30px;
  position: sticky;

  z-index: 2;
}

.twoHead th {
  background-color: #f9f9f9;
  height: 20px;
  position: sticky;
  top: 46.9px;
  z-index: 2;
}



#deepth-line {
  width: 55px;
  height: 1000px;

}

.chart-container {
  width: 200px;
  height: 1000px;

}
</style>

<script>
import { left, right } from '@antv/x6/lib/registry/port-layout/line';
import * as echarts from 'echarts';
import * as XLSX from 'xlsx'; // vue3可用此引入
import { useProjectToTrackStore } from "@/store/projectToTrackStore";
import { useChartToTableStore } from "@/store/chartToTableStore"


export default {
  name: "ShowChart",
  data() {
    return {
      projectToTrackStore: '',
      chartToTableStore: '',
      firstLevelHeaders: [],
      secondLevelHeaders: [],
      tableHeadData: {},
      depth: [],
      deepth: '',
      myTableData: {},
      readDepth: false,
      chartInstances: [], // 用于保存图表实例的数组
      optionData: []

    };
  },

  methods: {
    //画图表
    drawChart() {
      const vm = this;
      let chartContainerDeepth = document.getElementById('deepth-line');
      let chartDeepth = echarts.init(chartContainerDeepth);
      let optionDeepth = {

        grid: [{
          top: '2%',
          left: '100%',   // 右边距占容器宽度的百分比
          right: '0%',
        }],

        xAxis: {
          gridIndex: 0,
          show: false
        },
        yAxis: {
          gridIndex: 0,
          type: 'category',
          data: vm.depth,
          inverse: true,
          // axisLabel: {
          //   // interval: 3, // 设置刻度标签全部显示，不进行间隔
          //   formatter: function (value, index) {
          //     // 自定义刻度标签的格式化函数
          //     // value 表示刻度标签的值
          //     // index 表示刻度标签的索引
          //     // 可根据自己的需求进行刻度标签的格式化
          //     // 返回格式化后的刻度标签
          //     if (index % 4 === 0) {
          //       return value;
          //     } else {
          //       return "";
          //     }
          //   }
          // }
        },
      };
      // 绘制图表
      chartDeepth.setOption(optionDeepth);
      vm.chartInstances.push(chartDeepth);

      let index = 0;
      for (let i = 0; i < vm.firstLevelHeaders.length; i++) {
        // console.log(index);
        let firstHead = vm.firstLevelHeaders[i]['label'];
        let valueCount = Object.keys(vm.myTableData[firstHead]).length;
        let start = index;
        let end = start + valueCount;
        // console.log('aa' + valueCount);
        for (let j = start; j < end; j++) {
          let secondHead = vm.secondLevelHeaders[j]['label'];
          console.log(index);
          // console.log(this.firstLevelHeaders[i]);
          let chartContainer = document.getElementById('chartContainer' + index);
          let chart = echarts.init(chartContainer);
          let option = {
            toolbox: {
              show: true,
              feature: {
                dataZoom: {
                  yAxisIndex: 'none',

                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
              }
            },
            tooltip: {
              trigger: 'axis'
            },
            grid: [{

              top: '2%',
              left: '0%',
              right: '0%',

            }],

            xAxis: {
              gridIndex: 0,
              type: 'value',
              show: false,
              splitLine: {
                //网格线
                show: true
              },
              // data: vm.myTableData[firstHead][secondHead],
            },
            yAxis: {
              gridIndex: 0,
              type: 'category',
              data: vm.depth,
              inverse: true,
              show: false,
              splitLine: {
                //网格线
                show: true
              }

            },
            dataZoom: [
              {
                type: 'inside',
                xAxisIndex: [0],
                start: 0,
                end: 100,
                // moveOnMouseWheel: true,
                zoomOnMouseWheel: true
              },

            ],

            series: [
              {
                type: vm.myTableData[firstHead][secondHead]['type'],
                data: vm.myTableData[firstHead][secondHead]['data'],

              }
            ]
          };
          // 绘制图表
          chart.setOption(option);
          index = index + 1;
          vm.chartInstances.push(chart);
          // vm.optionData.push(option);
        }
      }
    },


    dataHandle(value) {
      console.log(value);
      let that = this;
      const renderType = value.renderType;
      const well = value.well;
      const deepName = value.deepName;
      const propertyName = value.propertyName;
      const deepData = value.deepData;
      const propertyData = value.propertyData;
      // 若该深度列未进行显示，添加
      if (that.myTableData[well] == undefined) {
        // that.myTableData[deepName] = deepData;
        that.myTableData[well] = {};
        that.deepth = deepName;
        that.depth = deepData;
      }
      let data = 'data';
      let type = 'type';
      if (that.myTableData[well][propertyName] == undefined) {
        that.myTableData[well][propertyName] = {};
      }
      that.myTableData[well][propertyName][data] = propertyData;
      that.myTableData[well][propertyName][type] = renderType;

      //显示表格
      that.isVisible = true;

      that.chartInstances.forEach(chartInstance => {
        //console.log(chartInstance);
        chartInstance.dispose(); // 销毁图表实例

      });
      that.chartInstances = [];
      that.optionData = [];

      //根据myTableData来更新表头
      that.firstLevelHeaders = [];
      that.secondLevelHeaders = [];
      console.log(that.myTableData);
      Object.keys(that.myTableData).forEach((key_1) => {
        const colNumber = Object.keys(that.myTableData[key_1]).length;
        // console.log(colNumber);
        that.firstLevelHeaders.push({ label: key_1, colspan: colNumber, rowspan: 1 });
        Object.keys(that.myTableData[key_1]).forEach((key_2) => {
          //console.log(key_2);
          that.secondLevelHeaders.push({ label: key_2 });
        })
      });

      console.log(that.firstLevelHeaders);
      console.log(that.secondLevelHeaders);

      setTimeout(() => {
        that.drawChart();
      }, 0);
    },

    handleDoubleClick(target) {
      let vm = this;
      let index = 0;
      for (let i = 0; i < vm.firstLevelHeaders.length; i++) {
        let firstHead = vm.firstLevelHeaders[i]['label'];
        let valueCount = Object.keys(vm.myTableData[firstHead]).length;
        let start = index;
        let end = start + valueCount - 1;
        if (target <= end) {
          let secondHead = vm.secondLevelHeaders[target]['label'];
          // console.log(firstHead + secondHead);
          vm.chartToTableStore.selected = {
            well: firstHead,
            deepName: "深度",
            propertyName: secondHead,
            deepData: vm.depth,
            propertyData: vm.myTableData[firstHead][secondHead]['data']
          };
          // console.log(vm.chartToTableStore.selected);
          break;
        }
        index = index + valueCount;
      }

      // 执行其他操作...
    }



  },

  mounted() {
    let that = this;
    //监听 SheetToProjectStore
    that.chartToTableStore = useChartToTableStore();
    that.projectToTrackStore = useProjectToTrackStore();
    that.projectToTrackStore.$subscribe((mutation, state) => {
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

      let newValue = mutation.events.newValue;

      that.dataHandle(newValue);
    }, { detached: true });//第二个参数options对象，是各种配置参数
    //detached:布尔值，默认是 false，正常情况下，当订阅所在的组件被卸载时，订阅将被停止删除，
    //如果设置detached值为 true 时，即使所在组件被卸载，订阅依然在生效
    //参数还有immediate，deep，flush等等参数 和vue3 watch的参数是一样的，多的就不介绍了，用到再看文档吧
  }

};

</script>
