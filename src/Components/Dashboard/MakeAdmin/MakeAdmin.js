import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';

const MakeAdmin = () => {
    const [adminInfo, setAdminInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...adminInfo };
        newInfo[e.target.name] = e.target.value;
        setAdminInfo(newInfo);
    }

    const handaleSubmit = () => {
        fetch('https://mighty-cliffs-97551.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: adminInfo.email })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-5 mt-4 p-5">
                <h5>Make Admin</h5>
                <form onSubmit={handaleSubmit} className="mt-5">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onBlur={handleBlur} type="text" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-md-5"></div>
        </div>
    );
};

export default MakeAdmin;;