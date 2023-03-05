import Social from './Social.js';
import portfolioPic from './portfolio-pic.png'
import Caption from './HeadingCaption.js'

const Heading = () => {
    return (
<section className="mt-5 pt-3 mb-5 pb-5">
    <div className="row">
        <div className='col-sm-1'>
            {window.screen.width > 767 && <Social />}
        </div>
        <div className="col-sm-5 pt-md-5">
            <div className="display-4 fw-bold">Hi, I'm <span className="text-color-light">Stephen</span></div>
            <div className="display-4 fw-bold pt-3"><span className="text-color-light">front-end developer</span></div>
        </div>
        <div className="col-sm-6">
            <img src={portfolioPic} style={{zIndex: '1'}} alt="pic-of-me" className='mt-5 mb-5 img-fluid mx-auto d-block'></img>
            {/* <div className='mail d-block'><span className='text-end'>koladeafolabi2020@gmail.com</span></div> */}
        </div>
        {/* <div className='col-sm-1 mail'>koladeafolabi2020@gmail.com</div> */}
    </div>
    <p className="p1 fs-5 pt-1 pt-lg-2 container">I'm a front-end developer making great stuff happen since 2020!
   {window.screen.width > 576 && <Caption  />}
    </p>
    <div className='container'>
            <button className='bg-cta btn btn2 text-white ms-3 mt-4 p-3 fs-5 ps-5 pe-5'>Contact Me</button>
            </div>
   </section>
    );
}

export default Heading;