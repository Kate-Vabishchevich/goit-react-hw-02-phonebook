import { Component } from "react";
import css from './ContactsForm.module.css';
import PropTypes from 'prop-types';

class ContactsForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        const { onSubmit } = this.props;
        const result = onSubmit({ ...this.state });
        if (result) {
            this.reset();
        }
    };

    reset() {
        this.setState({ name: '', number: '' });
    };

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value, });
    }

    render() {
        const { handleChange, handleSubmit } = this;
        const { name, number } = this.state;

        return (
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.form_label}>
                    Name
                    <input
                        className={css.form_input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className={css.form_label}>
                    Number
                    <input
                        className={css.form_input}
                        type="tel"
                        name="number"
                        value={number}
                        onChange={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={css.btn} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
};

export default ContactsForm;

ContactsForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};