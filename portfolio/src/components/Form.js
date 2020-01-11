import React from 'react';

function Form(props) {
    return (
        <div className='container'>
            <form action="action_page.php">
                <div className='row'>
                    <label className='text-white' for="fname">Subject</label>
                    <input className='col-12' type="text" id="subj" name="subject" placeholder="Subject..." />
                </div>
                <div className='row'>
                    <label className='text-white' for="subject">Message</label>
                    <textarea className='col-12' id="msg" name="message" placeholder="Write your message..." style={{ height: 200 + 'px' }}></textarea>
                </div>
                <div className='row'>
                    <input className='mx-auto' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
};

export default Form;