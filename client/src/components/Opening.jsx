import './styles/Opening.css'

export default function Opening() {
    const config = {
        attributes: {
            disablePictureInPicture: true,
            controlsList: 'nodownload'
        }
    };

    return (
        <div className='openingVeil'>
            <div className='opening'>
                <video src='/resume.mp4' autoPlay muted playsInline config={config}> </video>
            </div>
        </div>
    )
}