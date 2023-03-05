import { heading } from "../functionality.js";

const bar = <div className="rounded2 bg-cta bg-primary"></div>
console.log();

const Skills = () => {
    return (
        <section className="container mt-5 pt-5 mb-5 pb-5 ff-primary">
            <h1> {heading('02. ', '<my skills>')} </h1>
            <div className="card bg-transparent border-0 shadow-lg mt-5 pt-5">
                <div className="card-body ms-5 me-5">
                    <div className="p-2">
                        <h3>Bootstrap</h3>
                        {/* console.log(bar); */}
                        {/* <div className="progress rounded-pill" style={{height: '3rem'}}>
                            <div className="progress-bar bg-cta" style={{height: '5rem', width: '100%'}}></div>
                        </div> */}
                    </div>
                    <div className="p-2 pt-5">
                        <h3>React</h3>
                        {

                        }
                        {/* <div className="progress rounded-pill" style={{height: '3rem', width: "90%"}}>
                            <div className="progress-bar bg-cta" style={{height: '5rem', width: "100%"}}></div>
                        </div> */}
                    </div>
                    <div className="p-2 pt-5">
                        <h3>Node</h3>
                        {/* <div className="progress rounded-pill" style={{height: '3rem', width: '85%'}}>
                            <div className="progress-bar bg-cta" style={{height: '5rem', width: '100%'}}></div>
                        </div> */}
                    </div>
                    <div className="p-2 pt-5">
                        <h3>HTML</h3>
                        {/* <div className="progress rounded-pill" style={{height: '3rem'}}>
                            <div className="progress-bar bg-cta" style={{height: '5rem', width: '100%'}}></div>
                        </div> */}
                    </div>
                    <div className="p-2 pt-5">
                        <h3>CSS</h3>
                        {/* <div className="progress rounded-pill" style={{height: '3rem'}}>
                            <div className="progress-bar bg-cta" style={{height: '5rem', width: '100%'}}></div>
                        </div> */}
                    </div>
                    <div className="p-2 pt-5">
                        <h3>JavaScript</h3>
                        {/* <div className="progress rounded-pill" style={{height: '3rem', width: '90%'}}>
                            <div className="progress-bar bg-cta" style={{height: '5rem', width: '100%'}}></div>
                        </div> */}
                    </div>
                    </div>
            </div>
        </section>
    )
}

export default Skills;