import styles from "./Filter.module.scss";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
  <label className={styles.labelName}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
