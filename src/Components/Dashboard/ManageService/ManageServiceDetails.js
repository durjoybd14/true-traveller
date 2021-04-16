import React from 'react';

const ManageServiceDetails = (props) => {
    const { name, cost, date, _id } = props.allService;
    const deleteService = id => {
        const url = `http://localhost:5000/deleteService/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    window.location.reload();
                }
            })
    }
    return (
        <>
            {
                <tr>
                    <td>{name}</td>
                    <td>{cost}</td>
                    <td>{date}</td>
                    <td><i onClick={() => deleteService(_id)} style={{ cursor: 'pointer' }} className="fa fa-trash-o text-center text-danger" aria-hidden="true"></i></td>
                </tr>
            }
        </>
    );
};

export default ManageServiceDetails;