import {defineStore} from 'pinia'

// 第一个参数是应用程序中 store 的唯一 id
export const useProjectToPropertiesStore = defineStore({
        id: "projectToPropertiesStore",
        state: () => {
            return {
                //工程视图区向节点属性区发送的信息
                //节点属性
                nodeInfo: {
                    nodeType: "dataNode",
                    well: "no data",
                    workArea: "no data",
                    attributes: "no data",
                    largeness: "no data",
                    coordinate: "no data",
                    nodeId: 1,
                },
            }
        },
        getters: {},
    })
;
