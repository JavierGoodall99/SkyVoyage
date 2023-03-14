const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


// module.exports = {
//   devServer: {
//     proxy: {
//       '/register': {
//         target: 'https://volunteerventures.onrender.com',
//         changeOrigin: true
//       }
//     }
//   }
// }
