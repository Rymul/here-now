// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { BiEdit } from 'react-icons/bi'
// import { AiOutlineDelete } from 'react-icons/ai'
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

    if (!user) return null
    console.log(Object.values(user.events), "USEREVENTS")
    console.log(user.events, "1111USEREVENTS")
    return(
        <div className="user-show-component">
            <div className="user-show-buttons">
                <Link to={`/user/${user._id}`} id='user-show-update'>
                    {/* <BiEdit /> Edit Profile */}
                    Edit Profile
                </Link>
                <button
                    onClick={() => dispatch(deleteUser(user._id))}
                    id="user-show-delete"
                >
                    {/* <AiOutlineDelete /> Delete Profile */}
                    Delete Profile
                </button>
            </div>
            <div className="user-show-top">
                <div className="user-show-left">
                    <p>Profile Image will go here</p>
                </div>
                <div className="user-show-right">
                    <h1>Welcome {user.firstName}</h1>
                    <p>{user.birthDay}</p>
                </div>
            </div>
        </div>
    )
}

export default UserShow;