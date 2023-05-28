import "./App.css";

function Day(day: number, classNames?: string[]) {
  classNames = classNames ?? [];
  return <div className={["Day", ...classNames].join(" ")}>{day}</div>;
}

function Week() {
  return <div className="Week">{[1, 2, 3, 4, 5, 6, 7].map((e) => Day(e))}</div>;
}

function App() {
  return (
    <div className="App">
      <header>
        <div className="week-header">日</div>
        <div className="week-header">一</div>
        <div className="week-header">二</div>
        <div className="week-header">三</div>
        <div className="week-header">四</div>
        <div className="week-header">五</div>
        <div className="week-header">六</div>
      </header>
      <main className="Main">{Week()}</main>
      <footer></footer>
    </div>
  );
}

export default App;
