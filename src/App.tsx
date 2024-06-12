import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "@/router";
import { ConfigProvider } from "antd";
function App() {
  return (
    <ConfigProvider >
      <div className={"App"}>
        <Suspense fallback=''>
          <div className={"main"}>{useRoutes(routes)}</div>
        </Suspense>
      </div>
    </ConfigProvider>
  );
}

export default App;
