import React from 'react';
import './style.scss';

function TestAsigment() {
    return (
        <div className="asigment">
            <div className='asigment__img-background'>
                <div className='asigment__wrap-content'>
                    <div className='asigment__title'>Test assignment for <br/> front-end developer</div>
                    <div className='asigment__sub-title'>What defines a good front-end developer is one that has skilled knowledge
                        of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
                        They should also be excited to learn, as the world of Front-End Development keeps evolving.
                    </div>
                    <button className='header__button'>Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default TestAsigment;
