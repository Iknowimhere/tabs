// import { v4 as uuidv4 } from "uuid";
const BtnContainer = ({ jobs, setCurrentItem, currentId }) => {
  //   let id = uuidv4();
  return (
    <div className='btn-container'>
      {jobs.map((job, index) => {
        return (
          <button
            className={currentId === index ? "active-btn job-btn" : "job-btn"}
            onClick={() => {
              setCurrentItem(index);
            }}
            key={index}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
