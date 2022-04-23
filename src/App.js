import "./App.css";

import React, { useRef, useState } from "react";

import logo from "./logo.svg";

function App() {
  // 任务列表
  const [jobs, setJobs] = useState < Array < Job >> [];

  // 编辑窗口显示与否
  const [show, setShow] = useState(false);

  // 每次输入时当前任务描述
  const [desc, setDesc] = useState("");

  interface Job {
    desc: string;
    id: string;
    createTime: number;
    isSelected: boolean;
  }
  //使用 useRef  获得 input 组件的引用,即ref定位到dom的输入框位置，
  const inputRef = useRef < HTMLInputElement > null;
  return (
    <div className="App">
      {show ? (
        <div className="dialog">
          <input
            onChange={(event) => setDesc(event.target.value)}
            ref={inputRef}
            placeholder="请输入任务描述"
            onBlur={() => {
              setTimeout(() => {
                setShow(false);
              }, 0);
            }}
          />
          <div className="create" onClick={add}>
            创建
          </div>
        </div>
      ) : (
        <div className="add" onClick={() => setShow(true)}>
          新增
        </div>
      )}
    </div>
  );
}

export default App;
