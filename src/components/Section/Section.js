import React from 'react';
import './Section.scss'

function Section(props) {
    return (
        <div className="section-wrapper">
            <div className="section__title">
                {props.title}
            </div>
            <div className="section__content">
                {props.children}
            </div>
        </div>
    );
}

export default Section;