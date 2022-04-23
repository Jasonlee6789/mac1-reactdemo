import { useEffect, useRef, useState } from "react";

import { Job } from "./index";
import { randomId } from "./RandomId";

interface AdditionProps {
  onAdd: (job: Job) => any;
}

export default function Addition(props: AdditionProps) {
  const [desc, setDesc] = useState("");
  const [show, setShow] = useState(false);
  const inputRef = useRef < HTMLInputElement > null;
  const { onAdd } = props;

  useEffect(() => {
    if (show) {
      inputRef.current?.focus();
    }
  }, [show]);

  function add() {
    onAdd({
      id: randomId(),
      desc,
      isSelected: false,
      createTime: Date.now(),
    });
  }

  return (
    <>
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
    </>
  );
}
