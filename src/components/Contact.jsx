import './styles/Contact.css'

export default function Contact() {
    return (
        <div className='contact' id='Contact'>
            <span className='experienceAnchor'></span>
            <fieldset>
                <legend>Contact</legend>
                <a id="github" href="https://github.com/EvanA4"><img src="./src/assets/github.svg"/></a>
                <a id="linkedin" href="https://www.linkedin.com/in/evan-abbott-667167214/"><img src="./src/assets/linkedin.svg"/></a>
                <span><img src="./src/assets/gmail.svg" title='evanabbott04@gmail.com'/></span>
            </fieldset>
        </div>
    );
}