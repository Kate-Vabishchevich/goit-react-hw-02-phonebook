import css from './ContactsSearch.module.css';
import PropTypes from 'prop-types';

const ContactsSearch = ({ handleChange }) => {
    return (
        <div>
            <label>
                Find contacts by name
                <input
                    className={css.input}
                    type="text"
                    name="filter"
                    onChange={handleChange}
                    placeholder="Enter name"
                />
            </label>
        </div>
    );
};

export default ContactsSearch;

ContactsSearch.propTypes = {
    handleChange: PropTypes.func.isRequired,
}