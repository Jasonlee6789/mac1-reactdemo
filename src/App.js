import "./App.css";

import React, { useEffect, useRef, useState } from "react";

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
  //input 框在失去焦点后编辑弹窗消失,弹窗出现之后 input 能自动获取焦点的效果
  //但是需要注意的是，input 元素是在 show 变成 true ，并且组件真实 DOM 再次渲染完成之后才能获取引用
  useEffect(() => {
    // 因为show 变成 true，并且是在组件渲染完成之后执行,所以写在useEffect里面
    if (show) {
      inputRef.current?.focus();
    }
  }, [show]);

  function add() {
    jobs.push({
      id: randomId(),
      desc,
      isSelected: false,
      createTime: Date.now(),
    });
    setJobs([...jobs]);
    setDesc("");
  }

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
