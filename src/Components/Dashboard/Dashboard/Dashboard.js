import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';



const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    // const handleDateChange = date => {
    //     setSelectedDate(date);
    // }

    // useEffect(() => {
    //     fetch('https://desolate-shore-11609.herokuapp.com/appointmentsByDate', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ date: selectedDate, email:loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [selectedDate])


    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 mt-5">
                    <div className="mt-5 text-center">
                        <h2>Welcome to True Traveller Dashboard</h2>
                        <h5>We are here to help you get started</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;