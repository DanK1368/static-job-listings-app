import "./JobList.scss";
import JobItem from "../JobItem/JobItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const JobList = () => {
  const { jobItems } = useSelector(store => store.jobs);

  console.log(jobItems);

  return (
    <main className="joblist">
      {jobItems.map(job => (
        <JobItem key={job.id} {...job} />
      ))}
    </main>
  );
};
export default JobList;
