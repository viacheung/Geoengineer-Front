import {defineStore} from 'pinia'

// 第一个参数是应用程序中 store 的唯一 id
export const useSheetToProjectStore = defineStore("sheetToProjectStore", {
    state: () => {
        return {
            //井数据管理器向工程视图区发送的信息
            //选中的表和列名
            selected:
                {
                    //工区名
                    第一工区: {
                        //表名
                        //列名和对应顺序的数据
                        第一个井: ["井深", "钻时", "钻压"],
                        第二个井: ["井深", "扭矩", "转速", "立管压力"]
                    },
                },
            //取消选中的表和列名
            deselected:
                {
                    //工区名
                    第一工区: {
                        //表名
                        //列名和对应顺序的数据
                        第一个井: ["钻时"],
                        第二个井: ["转速", "立管压力"]
                    },
                }
        }
    },
    getters: {},
    actions: {}
});
