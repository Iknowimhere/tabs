import { FaAngleDoubleRight } from "react-icons/fa";
// import { v4 as uuidv4 } from "uuid";
const Duties = ({ duties }) => {
//   let id = uuidv4();
  return (
    <div>
      {duties.map((duty,index) => {
    {/* console.log(id) */}
        return (
          <div className='job-desc' key={index}>
            <FaAngleDoubleRight className='job-icon' />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
