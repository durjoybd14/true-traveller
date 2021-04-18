import React, { useContext } from 'react';
import { statusContext } from '../../../App';

const AllOrderDetails = (props) => {
    const { orderDetails, _id } = props.totalOrder;
    const { name, email, orderTime } = orderDetails;
    const [status, setStatus] = useContext(statusContext);
    const handleStatus = (num, _id) => {
        if (num === 1) {
            setStatus('Pending')
        }
        if (num === 2) {
            setStatus('Ongoing')

        }
        if (num === 3) {
            setStatus('Done')

        }
        fetch(`https://mighty-cliffs-97551.herokuapp.com/update/${_id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ state: status })
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <>
            {
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{orderTime}</td>
                    <td>
                        <button onClick={() => handleStatus(1, _id)} className="btn btn-warning ms-2 mt-2">Pending</button>
                        <button onClick={() => handleStatus(2, _id)} className="btn btn-primary ms-2 mt-2">Ongoing</button>
                        <button onClick={() => handleStatus(3, _id)} className="btn btn-success ms-2 mt-2">Done</button>
                    </td>
                </tr>
            }
        </>
    );
};

export default AllOrderDetails;