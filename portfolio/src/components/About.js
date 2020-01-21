import React from 'react';

function About() {
    return (
        <div className='text-white'>
            <h1 className='py-5' id='about'>About</h1>
            <div className='aboutMe purpleBackground'>
                <p className='p-3'>My name is Alex McRandall and I am a Full Stack Web Developer.  I have ten years of government experience and most recently I graduated from a full stack web development bootcamp at the University of California, Berkeley in August 2019. </p>
                <p className='p-3'>Over the past four years, I have taught myself full stack web development and have experience with Python, JavaScript, HTML5, CSS3, SQL, relational (MySQL) and non-relational databases (MongoDB), Git/GitHub, among other skills.  I have experience in React.js and have incorporated it into many of my applications found on my <a href='https://aljoker2001.github.io/Responsive-Portfolio/'>GitHub profile</a>.</p>
                <p className='p-3'>I am passionate about development, solving difficult problems, and learning new technologies.  Take a look at my portfolio below for some examples of past work.</p>
            </div>
        </div>
    )
}

export default About;