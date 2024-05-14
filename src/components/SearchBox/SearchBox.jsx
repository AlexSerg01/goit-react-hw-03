import css from "./SearchBox.module.css";
import { Field, Formik } from "formik";

export default function SearchBox({ value, onFilter }) {
  return (
    <>
      <Formik>
        <form>
          <div className="search">
            <p>Find contacts by name</p>
            <Field
              className={css.search}
              type="text"
              value={value}
              onChange={(e) => onFilter(e.target.value)}
            />
          </div>
        </form>
      </Formik>
    </>
  );
}
