import React from 'react';

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
                    <a href={props.GitHub} target='_blank'><img className='github' src='https://s14-eu5.startpage.com/cgi-bin/serveimage?url=http%3A%2F%2Ficonsetc.com%2Ficons-watermarks%2Fflat-square-white-on-black%2Fsocial-media%2Fsocial-media_github%2Fsocial-media_github_flat-square-white-on-black_512x512.png&sp=90b4b7d41fc2c0e4d30c352dacc16eaf&anticache=907940' style={{ width: 60 + 'px' }} /></a>
                </div>
            </div>
        </div>
    );
};

export default Project;