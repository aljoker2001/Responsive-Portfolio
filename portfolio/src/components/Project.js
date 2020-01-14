import React from 'react'

function Project(props) {
    return (
        <div className="flip-card col-md-4 col-sm-6 col-12 my-2">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <a href={props.link} target='_blank'><img className='portfolio' src={props.image} alt={props.alt} style={{ width: 'auto', height: 75 + '%' }} /></a>
                    <p className='textBlock text-white'>{props.name}</p>
                </div>
                <div className="flip-card-back p-3">
                    <p className='description'>{props.description}</p>
                    <a href={props.GitHub} target='_blank'><img className='github' src='https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Focticons.github.com%2Fimg%2Fog%2Fmark-github.png&sp=483316e996808883502ecbf0ae442d55&anticache=240755' style={{ width: 100 + 'px' }} /></a>
                </div>
            </div>
        </div>
    )
}

export default Project