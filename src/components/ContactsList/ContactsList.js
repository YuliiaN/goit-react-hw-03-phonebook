import {
  ContactsListStyled,
  ContactsListItem,
  ContactsListButton,
} from './ContactsList.styled';
import PropTypes from 'prop-types';

const ContactsList = ({ findContact, deleteContact }) => {
  return (
    <ContactsListStyled>
      {findContact.map(item => (
        <ContactsListItem key={item.id}>
          {item.name}: {item.number}
          <ContactsListButton
            type="button"
            onClick={() => deleteContact(item.id)}
          >
            delete
          </ContactsListButton>
        </ContactsListItem>
      ))}
    </ContactsListStyled>
  );
};

ContactsList.propTypes = {
  findContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
