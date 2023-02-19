// import React, {useContext} from "react"
// import {useViewMoreContext} from "./viewAContext"


function Intern(props) {
  // const [viewMoreData, setViewMoreData] = useState(false);
  // const [viewMore, setViewMore] = useContext(useViewMoreContext);

  const intern = props.internData;

  // function showMore () {
  //   setViewMore(true);
  // }
  return (
    <>
      <tr className="my_row">
        <td className="image_name t_data">
          <img src={intern.imgSrc} alt="profile" />
          {intern.firstName} {intern.lastName}
        </td>
        <td className="t_data"> {intern.attendance} </td>
        <td className="t_data"> {intern.bonus} </td>
        <td className="t_data"> {intern.strikes} </td>
        {/* { viewMore ? null: 
         <>
        <td className="t_data"> {intern.tasks.task1} </td>
        <td className="t_data"> {intern.tasks.task2} </td>
        <td className="t_data"> {intern.tasks.task3} </td>
        <td className="t_data"> {intern.tasks.task4} </td>
        <td className="t_data"> {intern.tasks.task5} </td>
        <td className="t_data"> {intern.tasks.task6} </td>
        <td className="t_data"> {intern.tasks.task7} </td>
        <td className="t_data"> {intern.tasks.task8} </td>
        <td className="t_data"> {intern.tasks.task9} </td>
        <td className="t_data"> {intern.tasks.task10} </td>
        </> } */}
        <td className="t_data"> {intern.powerRanking} </td>
      </tr>
    </>
  );
}
export default Intern;
