<template>
  <div class="chart-show">
    <div class="style-vue" style="display: inline-block; margin-left: 20px;" >
      <table>
        <tbody>
        <tr :key="1" style="height: 50px">
          <td style="width: 150px">
            <svg
                t="1688019242482"
                class="icon"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2276"
                width="20"
                height="20"
            >
              <path d="M951.296 424.96L1024 352.256 671.744 0 599.04 72.704l70.144 70.656-168.96 168.96a296.96 296.96 0 0 0-286.72 75.264L143.36 458.24 72.704 387.584 0 460.8l245.248 245.248-139.776 139.776 72.704 72.704 140.288-140.288L563.2 1024l72.704-72.704-70.144-70.656 70.144-70.144a296.96 296.96 0 0 0 75.776-287.232l168.96-168.96z" fill="#e6e6e6"
                    p-id="2277">
              </path>
            </svg>
          </td>
          <td style="width: 200px" class="second">
            <lable style="color: white"  class="seconds" >{{'Choose chart:'}}</lable>
          </td>
          <td style="width: 300px" class="third">
            <select v-model="value" class="input-select">
              <option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </option>
            </select>
            <!--            <input type="text" :value="getContent(row)" @input="updateContent($event, row)" class="input-style">-->
          </td>
        </tr>
        <tr :key="2" style="height: 50px">
          <td style="width: 100px">
            <svg
                t="1688019242482"
                class="icon"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2276"
                width="20"
                height="20"
            >
              <path d="M951.296 424.96L1024 352.256 671.744 0 599.04 72.704l70.144 70.656-168.96 168.96a296.96 296.96 0 0 0-286.72 75.264L143.36 458.24 72.704 387.584 0 460.8l245.248 245.248-139.776 139.776 72.704 72.704 140.288-140.288L563.2 1024l72.704-72.704-70.144-70.656 70.144-70.144a296.96 296.96 0 0 0 75.776-287.232l168.96-168.96z" fill="#e6e6e6"
                    p-id="2277">
              </path>
            </svg>
          </td>
          <td style="width: 150px" class="second">
            <!-- 在这里设置输入框 -->
            <lable style="color: white"  class="seconds" >{{'Chart width:'}}</lable>
          </td>
          <td style="width: 300px" class="third">
            <select v-model="value1" class="input-select">
              <option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </option>
            </select>
          </td>
        </tr>
        <tr :key="3" style="height: 50px">
          <td style="width: 100px">
            <svg
                t="1688019242482"
                class="icon"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2276"
                width="20"
                height="20"
            >
              <path d="M951.296 424.96L1024 352.256 671.744 0 599.04 72.704l70.144 70.656-168.96 168.96a296.96 296.96 0 0 0-286.72 75.264L143.36 458.24 72.704 387.584 0 460.8l245.248 245.248-139.776 139.776 72.704 72.704 140.288-140.288L563.2 1024l72.704-72.704-70.144-70.656 70.144-70.144a296.96 296.96 0 0 0 75.776-287.232l168.96-168.96z" fill="#e6e6e6"
                    p-id="2277">
              </path>
            </svg>
          </td>
          <td style="width: 150px" class="second">
            <lable style="color: white" class="seconds" >{{'Chart color:'}}</lable>
          </td>
          <td style="width: 300px" class="third">
            <input type="color" v-model="color" class="input-select">
          </td>
        </tr>
        <tr :key="4" style="height: 50px">
          <td style="width: 100px">
            <svg
                t="1688019242482"
                class="icon"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2276"
                width="20"
                height="20"
            >
              <path d="M951.296 424.96L1024 352.256 671.744 0 599.04 72.704l70.144 70.656-168.96 168.96a296.96 296.96 0 0 0-286.72 75.264L143.36 458.24 72.704 387.584 0 460.8l245.248 245.248-139.776 139.776 72.704 72.704 140.288-140.288L563.2 1024l72.704-72.704-70.144-70.656 70.144-70.144a296.96 296.96 0 0 0 75.776-287.232l168.96-168.96z" fill="#e6e6e6"
                    p-id="2277">
              </path>
            </svg>
          </td>
          <td style="width: 150px" class="second">
            <lable style="color: white" class="seconds" >{{'Line size:'}}</lable>
          </td>
          <td style="width: 300px" class="third">
            <input type="text" v-model="table.four" class="input-style">
          </td>
        </tr>
        <tr :key="5" style="height: 50px">
          <td style="width: 100px">
            <svg
                t="1688019242482"
                class="icon"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2276"
                width="20"
                height="20"
            >
              <path d="M951.296 424.96L1024 352.256 671.744 0 599.04 72.704l70.144 70.656-168.96 168.96a296.96 296.96 0 0 0-286.72 75.264L143.36 458.24 72.704 387.584 0 460.8l245.248 245.248-139.776 139.776 72.704 72.704 140.288-140.288L563.2 1024l72.704-72.704-70.144-70.656 70.144-70.144a296.96 296.96 0 0 0 75.776-287.232l168.96-168.96z" fill="#e6e6e6"
                    p-id="2277">
              </path>
            </svg>
          </td>
          <td style="width: 150px" class="second">
            <lable style="color: white"  class="seconds" >{{'deep'}}</lable>
          </td>
          <td style="width: 300px" class="third">
            <div >
              <input v-model="table.five" placeholder="low" style="width: 45px" class="small" />
              <span class="text-gray-500" style="color: white; text-align: center"> - </span>
              <input v-model="table.six" placeholder="high" style="width: 45px" class="small" />
            </div>
          </td>
        </tr>
        <tr :key="6" style="height: 50px">
          <td style="width: 100px">
            <svg
                t="1688019242482"
                class="icon"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2276"
                width="20"
                height="20"
            >
              <path d="M951.296 424.96L1024 352.256 671.744 0 599.04 72.704l70.144 70.656-168.96 168.96a296.96 296.96 0 0 0-286.72 75.264L143.36 458.24 72.704 387.584 0 460.8l245.248 245.248-139.776 139.776 72.704 72.704 140.288-140.288L563.2 1024l72.704-72.704-70.144-70.656 70.144-70.144a296.96 296.96 0 0 0 75.776-287.232l168.96-168.96z" fill="#e6e6e6"
                    p-id="2277">
              </path>
            </svg>
          </td>
          <td style="width: 150px" class="second">
            <!-- 在这里设置输入框 -->
            <lable style="color: white" class="seconds" >{{'Depth interval:'}}</lable>
          </td>
          <td style="width: 300px" class="third">
            <input type="text" v-model="table.seven" class="input-style" >
          </td>
        </tr>
        <tr :key="7" style="height: 50px">
          <td style="width: 100px">
            <svg
                t="1688019242482"
                class="icon"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2276"
                width="20"
                height="20"
            >
              <path d="M951.296 424.96L1024 352.256 671.744 0 599.04 72.704l70.144 70.656-168.96 168.96a296.96 296.96 0 0 0-286.72 75.264L143.36 458.24 72.704 387.584 0 460.8l245.248 245.248-139.776 139.776 72.704 72.704 140.288-140.288L563.2 1024l72.704-72.704-70.144-70.656 70.144-70.144a296.96 296.96 0 0 0 75.776-287.232l168.96-168.96z" fill="#e6e6e6"
                    p-id="2277">
              </path>
            </svg>
          </td>
          <td style="width: 150px" class="second">
            <lable style="color: white" class="seconds" >{{'Lable page:'}}</lable>
          </td>
          <td style="width: 300px" class="third">
            <select v-model="value2" class="input-select">
              <option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </option>
            </select>
          </td>
        </tr>
        <tr :key="8" style="height: 150px">
          <td style="width: 100px">

          </td>
          <td style="width: 150px" class="second">
            <el-button type="primary" @click="test" >Create</el-button>
          </td>
          <td style="width: 300px" class="third">
            <el-button>Cancel</el-button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: '#000000',
      options1: [{
        value: '选项1',
        label: '20%'
      }, {
        value: '选项2',
        label: '40%'
      }, {
        value: '选项3',
        label: '60%'
      }, {
        value: '选项4',
        label: '80%'
      }, {
        value: '选项5',
        label: '100%'
      }],
      value1: '',

      options: [{
        value: '选项1',
        label: '折线图'
      }, {
        value: '选项2',
        label: '柱状图'
      }, {
        value: '选项3',
        label: '热力图'
      }, {
        value: '选项4',
        label: '图片列'
      }, {
        value: '选项5',
        label: '表格'
      }],
      value: '',

      options2: [{
        value: '选项1',
        label: 'page1'
      }, {
        value: '选项2',
        label: 'page2'
      }, {
        value: '选项3',
        label: 'page3'
      }],
      value2: '',

      table:{
        one:'',
        four:'',
        five:'',
        six:'',
        seven:'',
      },
      title:['Choose chart:','Chart width:','Chart color:','Line size:','deep','Depth interval:','Lable page:'],
      contents: ['', '', '', '', '', ''] // 初始表格内容为空
    };
  },
  methods: {
    test(){
      let that = this;
      let data={}
    }
  }
};
</script>

<style scoped>
.chart-show {
  position: absolute;
  width: 100%;
  height: calc(100% - 20px);
  bottom: 0;
  right: 0;
  background-origin: content-box;
  background-color: #1E2C37FF;
  box-sizing: border-box;
  overflow: auto;
}

.font{
  font-size: 100%;
  color: #33424f;
}

.second {
  text-align: left;
  padding-left: 25px;
}

.third {
  text-align: left;
  padding-left: 10px;
}

.input-style{
  background-color: white ;
  width: 110px;
  border: 1px solid #ffffff;
  color: #3c3f40;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(255, 255, 255, 76);
}

.input-select{
  background-color: white ;
  width: 116px;
  height: 20px;
  border: 1px solid #ffffff;
  color: #3c3f40;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(255, 255, 255, 76);
}

.small{
  background-color: white ;
  border: 1px solid #ffffff;
  color: #3c3f40;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(255, 255, 255, 76);
}
.style-vue{
  width: 100%;
}

</style>
