import { useDispatch, useSelector } from "react-redux";
import "./FilterButton.scss";
import { handleFilter, handleDelete } from "../../features/jobSlice";

export const TagButton = ({ language }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="filterButton"
      onClick={() => dispatch(handleFilter(language))}
    >
      {language}
    </button>
  );
};

export const FilterButton = ({ item, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="tagButton">
      <p>{item}</p>
      <button onClick={() => dispatch(handleDelete({ id: id, item: item }))}>
        X
      </button>
    </div>
  );
};
