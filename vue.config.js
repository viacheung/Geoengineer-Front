const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 关闭ResizeObserver loop limit exceeded 报错
    client: {
      overlay: {
        runtimeErrors: false,
      },
    }
  }
})
