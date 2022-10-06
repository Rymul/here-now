import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import './About.css'

const About = () => {

    return (
        <div className='about-container'>
            <div className='contributor-container'>
                <div className="contributor-top">
                    <img className="contributor-profile-pic" src="/RyanMullen.jpeg" alt=""/>
                </div>
                <div className="contributor-info">
                    <h1 className="contributor-name">Ryan Mullen</h1>
                    <div className='contributor-links'>
                        <Link className="contributor-LinkedIn" to="https://www.linkedin.com/in/ryanfmullen/"><BsLinkedin /></Link>
                        <Link className="contributor-GitHub" to="https://github.com/Rymul"><BsGithub /></Link>
                    </div>
                </div>
            </div>
            <div className='contributor-container'>
                <div className="contributor-top">
                    <img className="contributor-profile-pic" src="/RyanMullen.jpeg" alt=""/>
                </div>
                <div className="contributor-info">
                    <h1 className="contributor-name">Ari Moshe</h1>
                    <div className='contributor-links'>
                        <Link className="contributor-LinkedIn" to="https://www.linkedin.com/in/ryanfmullen/"><BsLinkedin /></Link>
                        <Link className="contributor-GitHub" to="https://github.com/Rymul"><BsGithub /></Link>
                    </div>
                </div>
            </div>
            <div className='contributor-container'>
                <div className="contributor-top">
                    <img className="contributor-profile-pic" src="/RyanMullen.jpeg" alt=""/>
                </div>
                <div className="contributor-info">
                    <h1 className="contributor-name">Ryan Mullen</h1>
                    <div className='contributor-links'>
                        <Link className="contributor-LinkedIn" to="https://www.linkedin.com/in/ryanfmullen/"><BsLinkedin /></Link>
                        <Link className="contributor-GitHub" to="https://github.com/Rymul"><BsGithub /></Link>
                    </div>
                </div>
            </div>
            <div className='contributor-container'>
                <div className="contributor-top">
                    <img className="contributor-profile-pic" src="/RyanMullen.jpeg" alt=""/>
                </div>
                <div className="contributor-info">
                    <h1 className="contributor-name">Ryan Mullen</h1>
                    <div className='contributor-links'>
                        <Link className="contributor-LinkedIn" to="https://www.linkedin.com/in/ryanfmullen/"><BsLinkedin /></Link>
                        <Link className="contributor-GitHub" to="https://github.com/Rymul"><BsGithub /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;