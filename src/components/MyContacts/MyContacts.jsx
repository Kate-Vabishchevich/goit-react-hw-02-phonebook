import { Component } from "react";
import { nanoid } from 'nanoid';
import css from './MyContacts.module.css';
import ContactsForm from "./ContactsForm/ContactsForm";
// import ContactsSearch from "./ContactsSearch/ContactsSearch";

class MyContacts extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    addContact = ({ name, number }) => {
        if (this.isDublicate(name, number)) {
            alert(`${name} is already in contacts.`);
            return false;
        }

        this.setState(prevState => {
            const { contacts } = prevState;

            const newContact = {
                id: nanoid(),
                name,
                number,
            };
            return { contacts: [newContact, ...contacts] };
        });
        return true;
    };

    isDublicate(name) {
        const normalizedName = name.toLowerCase();
        const { contacts } = this.state;
        const result = contacts.find(({ name }) => {
            return name.toLocaleLowerCase === normalizedName;
        });
        return Boolean(result);
    };

    render() {
        const { addContact } = this;
        return (
            <div>
                <div>
                    <h2 className={css.title}>Phonebook</h2>
                    <ContactsForm onSubmit={addContact} />
                </div>
            </div>
        );
    }

};

export default MyContacts;