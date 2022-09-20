import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import { deleteUser } from "../../store/users";
import './UserShow.css'

const UserShow = () => {
    const sessionUser = useSelector(state => state.session.user);
    const { userId } = useParams();
    const dispatch = useDispatch();
    
    // useEffect(()=> {

    // }, [])

    return(
        <div className="user-show-component">
            <div className="user-show-buttons">
                <Link to={`/user/${user.id}`} id='user-show-update'>
                    <BiEdit /> Edit Profile
                </Link>
                <button
                    onClick={() => dispatch(deleteUser(user._id))}
                    id="user-show-delete"
                >
                    <AiOutlineDelete /> Delete Profile
                </button>
            </div>
            <div className="user-show-top">
                <div className="user-show-left">
                    <img src="https://www.useragentman.com/blog/the-infamous-zoltan-faq/" alt=""/>
                </div>
                <div className="user-show-right">
                    <h1>{sessionUser.firstName}</h1>
                    <p>{sessionUser.birthDay}</p>
                </div>
            </div>
            {/* <div className="user-show-bottom">
                <div className="user-show-events">
                    <h2>Events</h2>
                    {sessionUser.events.map( event => (
                        <div className="single event">
                            <p>{event.title}</p>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default UserShow;