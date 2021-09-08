export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.length
        ? contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))
        : null}
    </ul>
  );
};
