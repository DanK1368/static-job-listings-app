import "./JobItem.scss";
import { NewJob, FeaturedJob } from "../shared/JobHighlight";
import { TagButton } from "../shared/FilterButton";

const JobItem = ({
  company,
  contract,
  featured,
  new: newPosting,
  languages,
  position,
  postedAt,
  logo,
  location,
  tools,
  level,
  role,
}) => {
  return (
    <article className="jobItem">
      <img className="jobItem__companyImage" src={logo} alt="company logo" />
      <div className="jobItem__upperContainer">
        <div className="jobItem__headingContainer">
          <h2>{company}</h2>
          <div className="jobItem__highlightWrapper">
            {newPosting && <NewJob />}
            {featured && <FeaturedJob />}
          </div>
        </div>
        <button>{position}</button>
        <ul className="jobItem__listContainer">
          <li>{postedAt}</li>
          <li>{contract}</li>
          <li>{location}</li>
        </ul>
      </div>
      <div className="jobItem__lowerContainer">
        {[...languages, ...tools, role, level].map((language, idx) => (
          <TagButton key={idx} language={language} />
        ))}
      </div>
    </article>
  );
};
export default JobItem;
