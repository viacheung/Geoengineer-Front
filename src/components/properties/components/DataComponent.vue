<template>
  <div class="dataComponent">
    <el-scrollbar>
      <div class="table">
        <el-table
            class="tables"
            :data="tableData"
            style="width: 100%"
            :show-header="false"
            :border="false">
          <el-table-column
              prop="date"
              label=""
              width="150"
              class="list1">
            <svg
                t="1688019242482"
                class="icon"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2276"
                width="16"
                height="16"
            >
              <path
                  d="M951.296 424.96L1024 352.256 671.744 0 599.04 72.704l70.144 70.656-168.96 168.96a296.96 296.96 0 0 0-286.72 75.264L143.36 458.24 72.704 387.584 0 460.8l245.248 245.248-139.776 139.776 72.704 72.704 140.288-140.288L563.2 1024l72.704-72.704-70.144-70.656 70.144-70.144a296.96 296.96 0 0 0 75.776-287.232l168.96-168.96z"
                  fill="#e6e6e6"
                  p-id="2277">
              </path>
            </svg>
          </el-table-column>
          <el-table-column
              prop="name"
              label=""
              width="200">
          </el-table-column>
          <el-table-column
              prop="address"
              label="">
          </el-table-column>
        </el-table>
      </div>
    </el-scrollbar>
  </div>

</template>

<script>
export default {
  props: ['info'],
  data() {
    return {
      tableData: [{
        date: '1',
        name: 'typeNode:',
        address: this.info.nodeType,
      }, {
        date: '2',
        name: 'workArea:',
        address: this.info.workArea,
      }, {
        date: '3',
        name: 'Well:',
        address: this.info.well,
      }, {
        date: '4',
        name: 'Attribute:',
        address: this.info.attributes,
      }, {
        date: '5',
        name: 'Largeness:',
        address: this.info.largeness,
      }, {
        date: '6',
        name: 'Coordinate:',
        address: this.info.coordinate,
      }],
    }
  },
}
</script>
<style scoped>
.dataComponent {
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

.font {
  font-size: 100%;
  color: white;
}

/*最外层透明*/
::v-deep .el-table,
::v-deep .el-table__expanded-cell {
  background-color: transparent !important;
}

/* 表格内背景颜色 */
::v-deep .el-table th,
::v-deep .el-table tr,
::v-deep .el-table td {
  background-color: transparent !important;
  color: white !important;
  border: 0;
  font-weight: bold;
  text-align: left;
  padding-left: 40px;
  height: 45px;
}

/*去除底边框*/
::v-deep.el-table td.el-table__cell {
  border: 0;
}

::v-deep.el-table th.el-table__cell.is-leaf {
  border: 0;
}

</style>