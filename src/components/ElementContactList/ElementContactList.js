import styles from "./ElementContactList.module.scss";

const ElementContactList = ({ name, number, onDeleteContact }) => (
  <>
    <span className={styles.ContactList_name}>
      {name}: {number}
    </span>
    <button onClick={onDeleteContact}>Delete</button>
  </>
);

export default ElementContactList;
