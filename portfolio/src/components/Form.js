import React from 'react';

function Form(props) {
    return (
        <div className='purpleBackground pt-4'>
            <div className='container'>
                <form action="action_page.php">
                    <div className='row'>
                        <label className='text-white' for="subject">Subject</label>
                        <input className='col-12 mb-4' type="text" id="subj" name="subject" placeholder="Subject..." />
                    </div>
                    <div className='row'>
                        <label className='text-white' for="email">E-mail</label>
                        <input className='col-12 mb-4' type="text" id="em" name="email" placeholder="E-mail address..." />
                    </div>
                    <div className='row'>
                        <label className='text-white' for="message">Message</label>
                        <textarea className='col-12' id="msg" name="message" placeholder="Write your message..." style={{ height: 200 + 'px' }}></textarea>
                    </div>
                    <div className='row'>
                        <input className='mx-auto my-2' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Form;