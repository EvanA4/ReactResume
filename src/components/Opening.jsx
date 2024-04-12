import video from './src/assets/resume.mp4'

import './styles/Opening.css'

export default function Opening() {
    const config = {
        attributes: {
            disablePictureInPicture: true,
            controlsList: 'nodownload'
        }
    };

    return (
        <div className='opening'>
            <div className='animation'>
                <div className='videoContainer'>
                    <video src={video} autoPlay muted playsInline config={config}>
                    </video>
                </div>
                <div className='loadelement'>
                    <div className='loading'>
                        <label>LOADING</label>
                    </div>
                    <div className='loadbar'>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}