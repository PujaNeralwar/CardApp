import { useState } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState("");
//   const [list, setList] = useState([]);

  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  const [list4, setList4] = useState([]);

  


  const changeHandler = (event) => {
    setData(event.target.value);
  };

  const addRed = (event) => {
    
        setList1([...list1,data]);
        setData("");
    

  };

  const addBlue = () => {
    setList2([...list2,data]);
    setData("");
  };

  const addGreen = () => {
    setList3([...list3,data]);
    setData("");
  };

  const addGrey = () => {
    setList4([...list4,data]);
    setData("");
  };

  ///////////////////////

  const deletHandler1 = (index) => {
    const obj = list1;
    obj.splice(index, 1);
    setList1([...obj]);
  };

  const deletHandler2 = (index) => {
    const obj = list2;
    obj.splice(index, 1);
    setList2([...obj]);
  };

  const deletHandler3 = (index) => {
    const obj = list3;
    obj.splice(index, 1);
    setList3([...obj]);
  };

  const deletHandler4 = (index) => {
    const obj = list4;
    obj.splice(index, 1);
    setList4([...obj]);
  };


  return (
    <div className="App">
      <lablel style={{margin:"20px"}}>Add the Items</lablel>
      <input type="text" value={data} onChange={changeHandler} placeholder="Text here something"/>
      {/* <button onClick={addList}>ADD</button> */}
      {/* <p>Your List : </p> */}

<div className="section">
      <div className="Red">
        <label>Red</label>
        <button className="S" onClick={addRed}>Add</button>
        {list1.map((obj, index) => {
        return (
          <div className="R">

            <li><textarea style={{backgroundColor:"red",border:"none"}} name="" id="" cols="10" rows="4">{obj}</textarea></li>
            <button className="deleteB" onClick={deletHandler1}>X</button>
          </div>
        );
      })}
      </div>

      <div className="Blue">
        <label>Blue</label>
        <button className="S" onClick={addBlue}>Add</button>

        {list2.map((obj, index) => {
        return (
          <>
          <div className="B">
            <li ><textarea style={{backgroundColor:" rgb(42, 147, 217)",border:"none"}} name="" id="" cols="10" rows="4">{obj}</textarea></li>
            <button className="deleteB" onClick={deletHandler2}>X</button>
          </div>
          </>
        );
      })}
      </div>

      <div className="Green">
        <label>Green</label>
        <button   className="S" onClick={addGreen}>Add</button>

        {list3.map((obj, index) => {
        return (
          <>
          <div className="G">
            <li><textarea style={{backgroundColor:"rgb(34, 193, 34)",border:"none"}} name="" id="" cols="10" rows="4">{obj}</textarea></li>
            <button className="deleteB" onClick={deletHandler3}>X</button>
           </div>
          </>
        );
      })}
      </div>

      <div className="Grey">
        <label>Grey</label>
        <button className="S" onClick={addGrey}>Add</button>

        {list4.map((obj, index) => {
        return (
          <>
          <div className="Gre">
            <li><textarea style={{backgroundColor:"rgb(155, 150, 150)",border:"none"}} name="" id="" cols="10" rows="4">{obj}</textarea></li>
            <button className="deleteB" onClick={deletHandler4}>X</button>
            </div>
          </>
        );
      })}
      </div>

      </div>
    </div>
  );
}