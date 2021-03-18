export const CompleteArea = (props) => {
  const { completeTodo, onClick } = props;

  const style = {
    backgroundColor: "#ffffe0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={style}>
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
