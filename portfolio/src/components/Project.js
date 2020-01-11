import React from 'react'

function Project(props) {
    return (
        <div className="flip-card col-4">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <a href={props.link} target='_blank'><img className='portfolio' src={props.image} alt={props.alt} style={{width: 'auto', height: 75 + '%'}} /></a>
                    <p className='textBlock text-white'>{props.name}</p>
                </div>
                <div className="flip-card-back">
                    <p>{props.description}</p>
                    <a href={props.GitHub} target='_blank'><img className='github' src='../images/GitHub-Mark-Light-32px.png' /></a>
                </div>
            </div>
        </div>
    )
}

export default Project