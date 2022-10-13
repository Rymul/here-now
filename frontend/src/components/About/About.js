import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import './About.css'

const About = () => {

    return (
        <div className='about-container'>
            <h1 className='title'>Creators</h1>
            <div className='contributor-container-top'>
                <div className='single-contributor'>
                    <div className="contributor-top">
                        <img className="contributor-profile-pic" src="/RyanMullen.jpeg" alt=""/>
                    </div>
                    <div className="contributor-info">
                        <h1 className="contributor-name">Ryan Mullen</h1>
                        <div className='contributor-links'>
                            
                            <a target="_blank" className="contributor-LinkedIn" href="https://www.linkedin.com/in/ryanfmullen/"><BsLinkedin /></a>
                            <a target="_blank" className="contributor-GitHub" href="https://github.com/Rymul"><BsGithub /></a>
                        </div>
                    </div>
                </div>
                <div className='single-contributor'>
                    <div className="contributor-top">
                        <img className="contributor-profile-pic" src="/AriMoshe.jpeg" alt=""/>
                    </div>
                    <div className="contributor-info">
                        <h1 className="contributor-name">Ari Moshe</h1>
                        <div className='contributor-links'>
                            <a target="_blank" className="contributor-LinkedIn" href="https://www.linkedin.com/in/ari-moshe/"><BsLinkedin /></a>
                            <a target="_blank" className="contributor-GitHub" href="https://github.com/arimoshe"><BsGithub /></a>
                        </div>
                    </div>  
                </div>
            </div>
            <div className='contributor-container-bottom'>
                <div className='single-contributor'>
                    <div className="contributor-top">
                        <img className="contributor-profile-pic" src="/GarretGrant.png" alt=""/>
                    </div>
                    <div className="contributor-info">
                        <h1 className="contributor-name">Garret Grant</h1>
                        <div className='contributor-links'>
                            <a target="_blank" className="contributor-LinkedIn" href="https://www.linkedin.com/in/garret-d-grant/"><BsLinkedin /></a>
                            <a target="_blank" className="contributor-GitHub" href="https://github.com/garretdgrant"><BsGithub /></a>
                        </div>
                    </div>       
                </div>
                <div className='single-contributor'>
                    <div className="contributor-top">
                        <img className="contributor-profile-pic" src="/JayReddy.jpeg" alt=""/>
                    </div>
                    <div className="contributor-info">
                        <h1 className="contributor-name">Jay Reddy</h1>
                        <div className='contributor-links'>
                            <a target="_blank" className="contributor-LinkedIn" href="https://www.linkedin.com/in/jay-reddy-69538b240/"><BsLinkedin /></a>
                            <a target="_blank" className="contributor-GitHub" href="https://github.com/jayreddy040-510"><BsGithub /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;