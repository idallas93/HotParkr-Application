// dev + var
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Body = () => {
    return (
        <div id="body">
            <Header />
            <Card />
            <ContactContainer />
        </div>
    )
}

const Header = () => {
    return (
        <div className='header'>
            <span className='header-title'>
                Parkerr
            </span>
            <br />
            <span className="header-text">
                Have a dog + get a dating life
            </span>
        </div>
    );
}
