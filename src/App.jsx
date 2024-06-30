import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [exression, setExpression] = useState("0");
  const [result, setResult] = useState("0");
  const [functionClick, setFunctionClick] = useState(false);

  const changeExpressionValue = (value) => {
    if (exression == "0") {
      setExpression(value);
    } else {
      setExpression(exression + value);
    }
  };

  const calResult=()=>{
    try {
      setResult(eval(exression))
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <>
      {/* container */}
      <div className="w-full h-screen bg-slate-500 flex justify-center p-3">
        <div
          id="calculator"
          className={`lg:w-fit w-[85%] h-fit ${
            isDark ? "bg-slate-950" : "bg-white"
          } mt-12 rounded-sm`}
        >
          <div className="flex w-full justify-end p-3">
            {isDark ? (
              <FontAwesomeIcon
                icon={faSun}
                color="white"
                onClick={() => setIsDark(!isDark)}
                className="cursor-pointer w-5"
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                color="black"
                onClick={() => setIsDark(!isDark)}
                className="cursor-pointer w-5"
              />
            )}
          </div>

          <div className="grid grid-cols-1  w-full mt-2 ">
            <input
              type="text"
              readOnly
              className="outline-none col-span-1 bg-transparent w-[100%] text-end h-fit text-sm  pr-4"
              placeholder={exression}
            />
            <input
              type="text"
              readOnly
              className="outline-none col-span-1 bg-transparent w-[100%] text-end h-fit text-[24px]  pr-3"
              placeholder={result}
            />
          </div>

          <div className="grid grid-cols-2 mt-3">

            {functionClick ? (
              <div className="col-span-2 text-white bg-slate-700 mx-3 flex justify-around rounded-t-sm p-3">
                <input
                  type="button"
                  value={"Sin"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10  col-span-1 text-center  cursor-pointer"
                />
                <input
                  type="button"
                  value={"Cos"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10  col-span-1 text-center cursor-pointer"
                />
                <input
                  type="button"
                  value={"Math.pi"}
                  placeholder="π"
                  onClick={(e) =>changeExpressionValue(e.target.value) }
                  className="text-white w-10 h-10 col-span-1 text-center cursor-pointer"
                />
              </div>
            ) : null}

            <div className={`col-span-2 bg-slate-900 mx-3 mb-3 ${functionClick?'rounded-t-none': ' rounded-lg'} p-1 ${functionClick?'shadow-none':'shadow-slate-700 shadow-sm'}`}>
              <div className="w-full flex justify-around mb-3 mt-2">
                <input
                  type="button"
                  value={"AC"}
                  onClick={(e) => setExpression("")}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center  cursor-pointer"
                />
                <input
                  type="button"
                  value={"DEL"}
                  onClick={() => setExpression(exression.slice(0, -1))}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center cursor-pointer"
                />
                <input
                  type="button"
                  value={"fn"}
                  onClick={(e) => setFunctionClick((prev) => !prev)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center cursor-pointer"
                />
                <input
                  type="button"
                  value={"/"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center cursor-pointer"
                />
              </div>

              <div className="w-full flex justify-around mb-3">
                <input
                  type="button"
                  value={"9"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center  cursor-pointer"
                />
                <input
                  type="button"
                  value={"8"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center cursor-pointer"
                />
                <input
                  type="button"
                  value={"7"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center cursor-pointer"
                />
                <input
                  type="button"
                  value={"*"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center cursor-pointer"
                />
              </div>

              <div className="w-full flex justify-around mb-3">
                <input
                  type="button"
                  value={"6"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center  cursor-pointer"
                />
                <input
                  type="button"
                  value={"5"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center cursor-pointer"
                />
                <input
                  type="button"
                  value={"4"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center cursor-pointer"
                />
                <input
                  type="button"
                  value={"+"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center cursor-pointer"
                />
              </div>

              <div className="w-full flex justify-around mb-3">
                <input
                  type="button"
                  value={"3"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center  cursor-pointer"
                />
                <input
                  type="button"
                  value={"2"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center cursor-pointer"
                />
                <input
                  type="button"
                  value={"1"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center cursor-pointer"
                />
                <input
                  type="button"
                  value={"-"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center cursor-pointer"
                />
              </div>

              <div className="w-full flex justify-around mb-2">
                <input
                  type="button"
                  value={"0"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center  cursor-pointer"
                />
                <input
                  type="button"
                  value={"00"}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2 col-span-1 text-center cursor-pointer"
                />
                <input
                  type="button"
                  value={"."}
                  onClick={(e) => changeExpressionValue(e.target.value)}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2  text-center cursor-pointer"
                />
                <input
                  type="button"
                  value={"="}
                  onClick={(e) => calResult()}
                  className="text-white w-10 h-10 rounded-[50%] border-gray-400 border-2  text-center cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
