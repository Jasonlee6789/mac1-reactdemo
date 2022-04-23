import "./App.css";

import React, { useEffect, useRef, useState } from "react";

import Addition from "./Addition";
import List from "./List";
import logo from "./logo.svg";
import { randomId } from "./RandomId";

// interface Job {
//   desc: string;
//   id: string;
//   createTime: number;
//   isSelected: boolean;
// }

function App() {
  // 任务列表
  const [jobs, setJobs] = useState([]);

  // // 编辑窗口显示与否
  const [show, setShow] = useState(false);

  // 每次输入时当前任务描述
  const [desc, setDesc] = useState("");

  //使用 useRef  获得 input 组件的引用,即ref定位到dom的输入框位置，
  const inputRef = useRef < HTMLInputElement > null;
  //input 框在失去焦点后编辑弹窗消失,弹窗出现之后 input 能自动获取焦点的效果
  //但是需要注意的是，input 元素是在 show 变成 true ，并且组件真实 DOM 再次渲染完成之后才能获取引用
  useEffect(() => {
    console.log("effect");
    // 因为show 变成 true，并且是在组件渲染完成之后执行,所以写在useEffect里面
    if (show) {
      inputRef.current?.focus();
    }
  }, [show]);

  function add() {
    console.log("add");
    jobs.push({
      id: randomId(),
      desc,
      isSelected: false,
      createTime: Date.now(),
    });
    setJobs([...jobs]);
    setDesc("");
  }

  function remove(i) {
    jobs.splice(i, 1);
    setJobs([...jobs]);
  }

  function toggleSelected(i) {
    jobs[i].isSelected = !jobs[i].isSelected;
    setJobs([...jobs]);
  }

  // function editor(i: number, job: Job) {
  //   jobs[i] = job;
  //   setJobs([...jobs]);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React-李靖</h1>
      </header>
      {/* <List list={jobs} onRemove={remove} onEditor={editor} />
      <Addition onAdd={(job) => setJobs([...jobs, job])} /> */}

      <div className="container">
        <div className="task-header">
          <div className="title">进行中的任务</div>
          <div className="right">...</div>
        </div>
        {/* jobs 表示任务列表，可以根据该数据遍历出整个列表 */}
        {jobs.map((job, i) => (
          <div className="job-wrapper" key={job.id}>
            <div className="selected" onClick={() => toggleSelected(i)}>
              {job.isSelected && <div className="circle"></div>}
            </div>
            <div className="desc">{job.desc}</div>
            <div className="remove" onClick={() => remove(i)}>
              删除
            </div>
          </div>
        ))}
        {show ? (
          <div className="dialog">
            <input
              onChange={(event) => setDesc(event.target.value)}
              ref={inputRef}
              placeholder="请输入任务描述"
              onBlur={() => {
                setTimeout(() => {
                  setShow(false);
                }, 100);
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
    </div>
  );
}

export default App;
