import {defineStore} from 'pinia'

// 第一个参数是应用程序中 store 的唯一 id
export const useProjectToTrackStore = defineStore({
        id: "projectToTrackStore",
        state: () => {
            return {
                //工程视图区向数据道显示区发送的信息
                //需要显示的表和列名
                selected: {
                    renderType: "line",
                    well: "sheet1",
                    deepName: "深度",
                    propertyName: "属性1",
                    deepData: [1, 2, 3, 4, 5, 6],
                    propertyData: [12, 2, 3, 45, 6, 7]
                },
            }
        },
        getters: {},
        actions: {}
    })
;
