import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import Loading from "./Loading";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(1);
  const [job, setJob] = useState([]);
  const fetchApi = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setJob(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  if (isLoading) {
    return (
      <section className='jobs-center'>
        <Loading />;
      </section>
    );
  }
  return (
    <section className='jobs-center'>
      <BtnContainer
        jobs={job}
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
      />
      <JobInfo jobs={job} currentItem={currentItem} />
    </section>
  );
};
export default App;
