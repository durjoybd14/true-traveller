import React from 'react';

const BookListDetails = (props) => {
    const { orderDetails } = props.order;
    const { name, orderTime, cost } = orderDetails;
    console.log(props.order.status.state);

    return (
        <>
            {
                <tr>
                    <td>{name}</td>
                    <td>{cost}</td>
                    <td>{orderTime}</td>
                    <td>{props.order.status.state}</td>
                </tr>
            }
        </>
    );
};

export default BookListDetails;