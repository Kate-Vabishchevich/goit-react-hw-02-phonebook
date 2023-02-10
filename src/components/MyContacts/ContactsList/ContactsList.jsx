import React from 'react';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

const ContactsList = ({ removeContact, contacts }) => {
  const items = contacts.map(({ id, name, number }) => (
    <li className={css.item} key={id}>
      {name}: {number}
      <button
        className={css.btn}
        onClick={() => removeContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));

  return <ol className={ css.list}>{items}</ol>;
};

// const ContactsList = ({ removeContact, contacts }) => {
//   <ul className={css.list}>
//     {contacts.map(({ id, name, number }) => (
//       <li className={css.item}
//         key={id}
//         name={name}
//         number={number}
        
//       >
        
//         <p>{name}: {number}</p>
//         <button
//           className={css.btn}
//           onClick={() => removeContact(id)}
//           type="button"
//         >
//           Delete
//         </button>
//       </li>
//     ))}
    
//   </ul>
// };


export default ContactsList;

ContactsList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

