import React from 'react';
import Button from './Button';

const Table = ({ contacts, ...props }) => {

    function deleteRow(keyToBeDeleted) {
        const elementToBeReservedArr = contacts.filter((ele) => {
            return ele.id !== keyToBeDeleted;
        });

        return props.onUpdateDeletion(elementToBeReservedArr);
    }

    return (
        <table>
            <thead>
                <tr>
                    <td>Picture</td>
                    <td>Name</td>
                    <td>Rating</td>
                    <td>Won Oscar</td>
                    <td>Won Emmy</td>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact, ...props) => {
                    return (
                        <tr key={contact.id}>
                            <td>
                                <img src={contact.pictureUrl} alt="profilePic" />
                            </td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity.toFixed(2)}</td>
                            <td>{contact.wonOscar ? "🏆" : " "}</td>
                            <td>{contact.wonEmmy ? "🏆" : " "}</td>
                            <td>
                                <Button onClick={() => deleteRow(contact.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;
