import whatsapp from './whatsapp.svg'
import linkedin from './linkedin.svg'
import google from './google.svg'
import github from './github.svg'

const Social = () => {
    return (
        <div>
    <a href='#'><img src={github} width={25} height={25} className="m-4 text-color-light d-block"></img></a>
    <a href='#'><img src={linkedin} width={25} height={25} className="m-4 text-color-light d-block"></img></a>
    <a href='#'><img src={whatsapp} width={25} height={25} className="m-4 text-color-light d-block"></img></a>
    <a href='#'><img src={google} width={25} height={25} className="m-4 text-color-light d-block"></img></a>
    </div>
    );
}

export default Social;