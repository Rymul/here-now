// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteUser, fetchUser, getUser } from "../../store/users";
import './UserShow.css'
import { calcAge } from "../../utils/utils";


const UserShow = () => {
    const sessionUser = useSelector(state => state.session.user);
    const { userId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

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
                    <p id="user-show-birthday">Age: {calcAge(user.birthDay)}</p>
                    <p id="user-show-join-date">Member Since: {user.createdAt.slice(0,4)}</p>
                </div>
            {user._id === sessionUser._id ? 
                <div className="user-show-buttons">
                    <Link to={`/users/update/${user._id}`} id='user-show-update'>
                        Edit Profile
                    </Link>
                    <button
                        onClick={() => {
                            if (window.confirm('Are you sure you want to delete your profile?')) {
                                dispatch(deleteUser(user._id)).then(res => history.push('/'))}
                            }
                        }
                        id="user-show-delete"
                    >
                        Delete Profile
                    </button>
                </div>
            : null}
            </div>
        </div>
    )
}

export default UserShow;