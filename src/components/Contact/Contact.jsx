import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contact}>
      <div className={css.data}>
        <div className={css.range}>
          <FaUser />
          <p className={css.p}>{name}</p>
        </div>
        <div className={css.range}>
          <FaPhone />
          <p className={css.p}>{number}</p>
        </div>
      </div>
      <button type="button" className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
