import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

// Infer the `RootState` ->  Redux store의 전체 상태
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// Redux store에서 액션을 디스패치하는 데 사용되는 dispatch 함수의 타입
export type AppDispatch = typeof store.dispatch;