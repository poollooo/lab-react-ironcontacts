import React from 'react';

const Table = ({ contacts }) => {
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
                {contacts.map((contact) => {
                    return (
                        <tr>
                            <td>
                                <img src={contact.pictureUrl} alt="profilePic" />
                            </td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity.toFixed(2)}</td>
                            <td>{contact.wonOscar ? "🏆" : " "}</td>
                            <td>{contact.wonEmmy ? "🏆" : " "}</td>
                            {/* <td>
                                <button onClick={() => props.onDeleteRow(contact.id)}>
                                    Delete
                                </button>
                            </td> */}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;
