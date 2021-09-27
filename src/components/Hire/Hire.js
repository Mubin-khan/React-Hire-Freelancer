import React, { useEffect, useState } from 'react';
import Freelancer from '../Freelancer/Freelancer';
import Sidebar from '../Sidebar/Sidebar';
import './Hire.css';

const Hire = () => {
    
    const [freelancers, setFreelancers] = useState([]);
    const [name, setName] = useState([]);
    const [charge, setCharge] = useState([]);
    
    useEffect(()=>{
        fetch('./fakedb.JSON')
        .then(res => res.json())
        .then(data => setFreelancers(data))
        console.log(setFreelancers)
    },[])

    const handleClick = (sname, ccharge) => {
        const search = name.find(elm => elm === sname)
        if(search)return;
        setName([...name,sname]);
        setCharge([...charge, ccharge]);
    }

    return (
        <div className="customContainer">
            <div className="freelancer">
                {
                    freelancers?.map((elm,indx) => <Freelancer 
                    handleClick={handleClick}
                    key={indx} 
                    freelancer={elm}></Freelancer>)
                }
            </div>
            <div className="leftside">
                <Sidebar 
                name={name}
                charge={charge}
                ></Sidebar>
            </div>
        </div>
    );
};

export default Hire;