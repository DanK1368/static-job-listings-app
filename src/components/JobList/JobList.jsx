import "./JobList.scss";
import JobItem from "../JobItem/JobItem";
import { useSelector } from "react-redux";

const JobList = () => {
  const { jobItems } = useSelector(store => store.jobs);
  const { filter } = useSelector(store => store.jobs);
  console.log(filter);

  return (
    <main className="joblist">
      {jobItems.map(job => (
        <JobItem key={job.id} {...job} />
      ))}
    </main>
  );
};
export default JobList;
