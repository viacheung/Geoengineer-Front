import {defineStore} from 'pinia'

// 第一个参数是应用程序中 store 的唯一 id
export const useConsolesStore = defineStore(
    {
        id: "consolesStore",
        state: () => {
            return {
                //日志接收到的消息
                //节点属性
                logOutput: {
                    //来自视图区的日志
                    projectView: [],
                },
            }
        },
        getters: {},
        actions: {}
    })
;
