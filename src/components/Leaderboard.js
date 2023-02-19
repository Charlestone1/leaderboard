import Frontend from "../internsData/Frontend";
import Intern from "./Intern";
import { useState } from "react";
// import {useViewMoreContext} from "./viewAContext"

function Leaderboard() {
  const [FrontendInterns, setFrontendInterns] = useState(Frontend);
  // const [viewMore, setViewMore] = useContext(useViewMoreContext);

  function reverseArray() {
      let reversedArray = [];
      FrontendInterns.interns.forEach((intern) => {
          reversedArray.unshift(intern);
      })
      setFrontendInterns(prev => {
        return {...prev, interns:reversedArray}
      });
      
  }
  // function showMore () {
  //   setViewMore(true);
  // }
  return (
    <>
      
      <table className="my_table">
      <tbody>
        <tr className="my_row">
          <th className="t_head">Name</th>
          <th className="t_head">Attendance</th>
          <th className="t_head">Bonus</th>
          <th className="t_head">Strikes</th>
         {/* { viewMore ? null: 
         <>
          <th className="t_head">Task1</th>
          <th className="t_head">Task2</th>
          <th className="t_head">Task3</th>
          <th className="t_head">Task4</th>
          <th className="t_head">Task5</th>
          <th className="t_head">Task6</th>
          <th className="t_head">Task7</th>
          <th className="t_head">Task8</th>
          <th className="t_head">Task9</th>
          <th className="t_head">Task10</th>
        </>} */}
          <th className="t_head">Power Ranking</th>
        </tr>
        {FrontendInterns.interns.map((intern) => {
            return (
              <Intern internData={intern} key={intern.id}/>
            )
        })}
        </tbody>
        <div className="footer">
          <button onClick={reverseArray}>
            Sort
          </button>
        </div>
      </table>
    </>
  );
}

export default Leaderboard;
