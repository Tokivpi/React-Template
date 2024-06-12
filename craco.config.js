const CracoLessPlugin = require("craco-less");
const path = require("path");

const pathResolve = pathUrl => path.resolve(__dirname, pathUrl);
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    alias: {
      "@": pathResolve("src")
      // 此处是一个示例，实际可根据各自需求配置
    }
  }
};

