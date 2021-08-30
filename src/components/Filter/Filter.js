import styles from './Filter.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

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

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
