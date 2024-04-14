import { useState } from 'react';

import './styles/Contact.css'

export default function Contact() {
    const [showEmail, setShowEmail] = useState(0);
    const emailStates = ['tip', 'showTip', 'hideTip'];

    return (
        <div className='contact' id='Contact'>
            <span className='experienceAnchor'></span>
            <fieldset>
                <legend>
                    <span>Contact</span>
                </legend>
                <span className='email' id={emailStates[showEmail]} >evanabbott04@gmail.com</span>
                <a id="github" href="https://github.com/EvanA4"><img src="./src/assets/github.svg"/></a>
                <a id="linkedin" href="https://www.linkedin.com/in/evan-abbott-667167214/"><img src="./src/assets/linkedin.svg"/></a>
                <button onClick={() => setShowEmail(showEmail % 2 == 0 ? 1 : 2)}><img src="./src/assets/gmail.svg"/></button>
            </fieldset>
        </div>
    );
}