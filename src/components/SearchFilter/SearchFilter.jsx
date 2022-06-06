import { useDispatch, useSelector } from "react-redux";
import "./SearchFilter.scss";
import { FilterButton } from "../shared/FilterButton";
import { handleClear } from "../../features/jobSlice";

const SearchFilter = () => {
  const { filter } = useSelector(store => store.jobs);
  const dispatch = useDispatch();

  return (
    <>
      {filter.length !== 0 && (
        <section className="filter">
          <div className="filter__searchItemsContainer">
            {filter.length > 0
              ? filter.map((item, idx) => (
                  <FilterButton key={idx} item={item} id={idx} />
                ))
              : ""}
          </div>
          <div className="filter__clearBtnContainer">
            <button
              className="filter__clearBtn"
              onClick={() => dispatch(handleClear())}
            >
              Clear
            </button>
          </div>
        </section>
      )}
    </>
  );
};
export default SearchFilter;
