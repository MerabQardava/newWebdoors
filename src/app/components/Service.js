"use client"
import React, {Children, useEffect, useState} from 'react';

function Service({children,color,img,num,title}) {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        updateWindowWidth();

        window.addEventListener('resize', updateWindowWidth);

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };

    }, []);


    if((num%2===1)||windowWidth<=800){
        return (
            <div>
                <div style={{backgroundColor:color}} >
                    <img src={img} alt=""/>
                </div>
                <span>
                    <h3><span>{`0${num}.`}</span>{title}</h3>
                    {children}
                </span>
            </div>);
    }else{
        return (
            <div>
                <span>
                    <h3><span>{`0${num}.`}</span>{title}</h3>
                    {children}
                </span>
                <div style={{backgroundColor:color}}>
                    <img src={img} alt=""/>
                </div>
            </div>);

    }
}

export default Service;