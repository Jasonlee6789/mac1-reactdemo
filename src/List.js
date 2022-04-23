import { Job } from "./index";

interface ListProps {
  list: Job[];
  onRemove: (i: number) => any;
  onEditor: (i: number, value: Job) => any;
}

export default function List(props) {
  const { list, onRemove, onEditor } = props;

  function troggleSelected(i) {
    const job = list[i];
    onEditor(i, {
      ...job,
      isSelected: !job.isSelected,
    });
  }
  return (
    <div className="container">
      <div className="task-header">
        <div className="title">进行中的任务</div>
        <div className="right">...</div>
      </div>

      {list.map((job, i) => (
        <div className="job-wrapper" key={job.id}>
          <div className="selected" onClick={() => troggleSelected(i)}>
            {job.isSelected && <div className="circle"></div>}
          </div>
          <div className="desc">{job.desc}</div>
          <div className="remove" onClick={() => onRemove(i)}>
            删除
          </div>
        </div>
      ))}
    </div>
  );
}
