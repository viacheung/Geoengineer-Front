<template>
  <div>
    <div v-if="pInfo.nodeType==='dataNode'">
      <DataComponent :info="pInfo"/>
    </div>
    <div v-else-if="pInfo.nodeType==='displayNode'">
      <DisplayComponent/>
    </div>
    <div v-else-if="pInfo.nodeType==='operationNode'">
      <OperationComponent/>
    </div>
  </div>
</template>

<script>
import {useProjectToPropertiesStore} from "@/store/projectToPropertiesStore";
import DataComponent from '@/components/properties/components/DataComponent.vue';
import DisplayComponent from '@/components/properties/components/DisplayComponent.vue';
import OperationComponent from "@/components/properties/components/OperationComponent.vue";

export default {
  name: "PropertyComponent",
  data() {
    return {
      //父组件数据
      pInfo: {
        nodeType: "dataNodes",
        well: "no data",
        workArea: "no data",
        attributes: "no data",
        largeness: "no data",
        coordinate: "no data",
      },

    };
  },
  components: {
    DataComponent,
    DisplayComponent,
    OperationComponent
  },

  methods: {
    dataHandle(value) {
      //console.log(value);
      let that = this;
      that.pInfo.nodeType = value.nodeType;
      that.pInfo.well = value.well;
      that.pInfo.workArea = value.workArea;
      that.pInfo.attributes = value.attributes;
      that.pInfo.largeness = value.largeness;
      that.pInfo.coordinate = value.coordinate;
    },


  },

  mounted() {
    let that = this;
    //监听 SheetToProjectStore
    that.projectToPropertiesStore = useProjectToPropertiesStore();
    that.projectToPropertiesStore.$subscribe((mutation, state) => {
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
      let newValue = state.nodeInfo;
      // let newValue = mutation.events.newValue;

      that.dataHandle(newValue);
    }, {detached: true});//第二个参数options对象，是各种配置参数
    //detached:布尔值，默认是 false，正常情况下，当订阅所在的组件被卸载时，订阅将被停止删除，
    //如果设置detached值为 true 时，即使所在组件被卸载，订阅依然在生效
    //参数还有immediate，deep，flush等等参数 和vue3 watch的参数是一样的，多的就不介绍了，用到再看文档吧
  }

}
</script>

<style scoped>

</style>