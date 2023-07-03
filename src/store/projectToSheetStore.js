import {defineStore} from 'pinia'

// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore("projectToSheetStore", {
    state: () => {
        return {
            //工程视图区向井数据管理器发送的信息
            //属性重命名
            rename: {
                //旧名称
                oldName: {
                    sheetName: "sheet1",
                    property: "property1"
                },
                //新名称
                newName: {
                    sheetName: "sheet1",
                    property: "property1"
                }
            },
            //属性删除
            delete: [
                {
                    sheet1: ["property2", "property3", "property6", "property10"],
                },
                {
                    sheet2: ["property4", "property5", "property6", "property10"],
                }
            ]
        }
    },
    getters: {
    },
});
