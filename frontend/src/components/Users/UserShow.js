// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import { deleteUser, fetchUser, getUser } from "../../store/users";
import './UserShow.css'


const UserShow = () => {
    const sessionUser = useSelector(state => state.session.user);
    const { userId } = useParams();
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchUser(userId))
    }, [userId])
    const user = useSelector(getUser(userId))
    const today = new Date()
    

    if (!user) return null

    return(
        <div className="user-show-component">
            <div className="user-show-info">
                <div className="user-show-top">
                    <img id="user-show-profile-pic" src="/male-profile-picture.jpeg" alt="" />
                </div>
                <div className="user-show-bottom">
                    <h1 id="user-show-name">{user.firstName} {user.lastName[0]}.</h1>
                    <p id="user-show-birthday">{user.birthDay}</p>
                    <p id="user-show-join-date">{user.createdAt}</p>
                </div>
                <div className="user-show-buttons">
                <Link to={`/user/${user._id}`} id='user-show-update'>
                    {/* <BiEdit />  */}
                    Edit Profile
                </Link>
                <button
                    onClick={() => dispatch(deleteUser(user._id))}
                    id="user-show-delete"
                >
                    {/* <AiOutlineDelete />  */}
                    Delete Profile
                </button>
            </div>
            </div>
        </div>
    )
}

export default UserShow;