export const IncompleteArea = (props) => {
  const { incompleteTodo, onClickCo, onClickDe } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODOリスト</p>
      <ul>
        {incompleteTodo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickCo(index)}>完了</button>
              <button onClick={() => onClickDe(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
