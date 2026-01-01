import { useEffect } from "react";

function App() {

  // const [count, setCount] = useState(0)
  function myfn() {
    const boxes = document.querySelectorAll('.box');
    let count = 1;

    boxes.forEach((b) => {
      b.addEventListener('click', function () {
        if (!b.classList.contains('selected')) {
          b.classList.add('selected');
          b.textContent = `${count}`;
          count++;
        }
      });
    });
  }

  function clearCount() {
    const box = document.querySelectorAll('.box');
    box.forEach((b) => {
      b.classList.remove('selected');
      b.textContent = "";
    })
  }

  useEffect(() => {
    myfn();
  })

  return (
    <>
      <div className="wrapper">
        <div className="grid-container">
          <div className="box-outer">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
        <button className="btn" onClick={clearCount}>Clear</button>
      </div>
    </>
  )
}

export default App
