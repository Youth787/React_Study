import "./App.css";
import React, { useState, useEffect } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이도현",
    content: "하이 1",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "가보자",
    content: "하이 2",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "이도훈",
    content: "하이 3",
    emotion: 4,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList = {dummyList} />
    </div>
  );
}

export default App;
