import { connect } from 'react-redux';
import actions from '../../redux/actions';
import ElementContactList from '../ElementContactList';
import styles from './ContactList.module.scss';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.contactList_items} key={id}>
        {/* <span className={styles.ContactList_name}>
          {name}: {number}
        </span>
        <button onClick={() => onDeleteContact(id)}>Delete</button> */}
        <ElementContactList
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
