export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.length
        ? contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <button type="button" onClick={() => onDelete(id)}>
                delete
              </button>
            </li>
          ))
        : null}
    </ul>
  );
};
