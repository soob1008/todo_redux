import React from "react";
import { ConfigProvider } from "antd";
import Todo from "./features/todo/Todo";
import { Flex } from "antd";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#b564ff" } }}>
      <Provider store={store}>
        <Flex
          justify={"center"}
          align={"center"}
          style={{ height: "100vh", backgroundColor: "#e0e0f4" }}
        >
          <Todo />
        </Flex>
      </Provider>
    </ConfigProvider>
  );
}

export default App;