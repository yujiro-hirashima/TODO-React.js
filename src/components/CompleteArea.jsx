export const CompleteArea = (props) => {
  const { completeTodo, onClick } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODOリスト</p>
      <ul>
        {completeTodo.map((todo, index) => {
          return (
            <div key="todo" className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
