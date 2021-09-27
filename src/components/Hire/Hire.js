import React, { useEffect, useState } from 'react';
import Freelancer from '../Freelancer/Freelancer';
import { clearDB, getDB, setDB } from '../localstorage';
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
        const db = getDB();
        const names = [], charges = [];
        for(let key in db){
            names.push(key);
            charges.push(db[key])
        }
        setName(names);
        setCharge(charges);
    },[])

    const handleClick = (sname, ccharge) => {
        setDB(sname, ccharge);
        const search = name.find(elm => elm === sname)
        if(search)return;
        setName([...name,sname]);
        setCharge([...charge, ccharge]);
    }

    const clearLocalStorage = () => {
        clearDB();
        setName([]);
        setCharge([]);
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
                clearLocalStorage={clearLocalStorage}
                name={name}
                charge={charge}
                ></Sidebar>
            </div>
        </div>
    );
};

export default Hire;