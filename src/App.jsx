
import './App.css';
import {useState} from "react";


function App() {
const [ name, setName] = useState("Mohamed");
const [ age , setAge]  = useState(35);

const [count, setCount] = useState(0);
const [subtraction, setSubtraction] = useState(count);
const [theme, setTheme] = useState("")

// const changeAge = () => {
//   setAge(33)
// }
// const resetAge = () => {
//   setAge(28)
// }

const addCount = () => { 
  setCount(count + 1) ;
 }

 const changeSubtraction = () => {
  addCount
  setSubtraction( count - 1)
 }

  return (
    <div className={`App ${theme}`}>
      <div>
        <button onClick={() => {setTheme( theme == "" ? "dark" : "")}} style={{marginTop: "40px", }}>Toggle theme</button>

{/* Toggle switch */}
        <div className="toggle">
          <p style={{fontSize:"20px", margin: "20px 0"}}>Switch theme</p>
          <svg display="none">
            <symbol
              id="light"
              viewBox="0 0 24 24"
            >
              <g
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              >
                <line
                  transform="rotate(0,12,12)"
                  x1="12"
                  x2="12"
                  y1="17"
                  y2="20"
                />
                <line
                  transform="rotate(45,12,12)"
                  x1="12"
                  x2="12"
                  y1="17"
                  y2="20"
                />
                <line
                  transform="rotate(90,12,12)"
                  x1="12"
                  x2="12"
                  y1="17"
                  y2="20"
                />
                <line
                  transform="rotate(135,12,12)"
                  x1="12"
                  x2="12"
                  y1="17"
                  y2="20"
                />
                <line
                  transform="rotate(180,12,12)"
                  x1="12"
                  x2="12"
                  y1="17"
                  y2="20"
                />
                <line
                  transform="rotate(225,12,12)"
                  x1="12"
                  x2="12"
                  y1="17"
                  y2="20"
                />
                <line
                  transform="rotate(270,12,12)"
                  x1="12"
                  x2="12"
                  y1="17"
                  y2="20"
                />
                <line
                  transform="rotate(315,12,12)"
                  x1="12"
                  x2="12"
                  y1="17"
                  y2="20"
                />
              </g>
              <circle
                cx="12"
                cy="12"
                fill="currentColor"
                r="5"
              />
            </symbol>


            <symbol
              id="dark"
              viewBox="0 0 24 24"
            >
              <path
                d="M15.1,14.9c-3-0.5-5.5-3-6-6C8.8,7.1,9.1,5.4,9.9,4c0.4-0.8-0.4-1.7-1.2-1.4C4.6,4,1.8,7.9,2,12.5c0.2,5.1,4.4,9.3,9.5,9.5c4.5,0.2,8.5-2.6,9.9-6.6c0.3-0.8-0.6-1.7-1.4-1.2C18.6,14.9,16.9,15.2,15.1,14.9z"
                fill="currentColor"
              />
            </symbol>


          </svg>
          
          <label className="switch">
            <input
              className="switch__input"
              name="dark"
              role="switch"
              type="checkbox"
            />
            
            <svg
              aria-hidden="true"
              className="switch__icon"
              height="24px"
              width="24px"
            >
              <use href="#light" />
            </svg>

            <span className="switch__inner" />
            <span className="switch__inner-icons">
              <svg
                aria-hidden="true"
                className="switch__icon"
                height="24px"
                width="24px"
              >
                <use href="#light" />
              </svg>
              <svg
                aria-hidden="true"
                className="switch__icon"
                height="24px"
                width="24px"
              >
                <use href="#dark" />
              </svg>
            </span>

          </label>
        </div>
{/* Toggle switch end */}

      </div>

      <div className="card">
        <button  onClick ={() =>{setTheme("")}} style={{marginRight: "26px" }}>Light</button>
        <button  onClick ={() =>{setTheme("dark")}} style={{marginRight: "26px"}}>Dark</button>
        <button  onClick ={() =>{setTheme("grey")}} style={{marginRight: "26px"}}>Grey</button>
        <button  onClick ={() =>{setTheme("pink")}}>Pink</button>
      </div>
        <div>
        <h2>My name is {name} </h2>
        <button onClick={ ()=>{ setName("Mohamed Khalifa")} } >Change name</button>
        <button onClick={ ()=>{ setName("Mohamed")} } >Reset name</button>
        </div>
      <div>
        <h2> My age is {age}</h2>
        <button onClick={ ()=> {setAge(43) }}>Change age</button>
        <button onClick={()=> { setAge(35) }}>Rsset age</button>
      </div>

      <div>
        <br/>
        <button onClick={addCount}> Count {count} </button>
        <br/>
        <button onClick={changeSubtraction}> Subtraction {subtraction} </button>
    
      </div>

      
      

    </div>
  )
}

export default App
