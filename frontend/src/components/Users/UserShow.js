// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import { deleteUser, fetchUser, getUser } from "../../store/users";
import './UserShow.css'
import { calcAge, createdAgoTimeParser } from "../../utils/utils";
import jwtFetch from "../../store/jwt";


const UserShow = () => {
    const sessionUser = useSelector(state => state.session.user);
    const { userId } = useParams();
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchUser(userId))
    }, [userId])
    const user = useSelector(getUser(userId))
    const today = new Date()

    const getSignedRequest = async (file) =>  {
        const res = await fetch(`/api/s3/sign-s3?file-name=${file.name}&file-type=${file.type}`)
        const urls = await res.json();
        uploadFile(file, urls.signedRequest, urls.url)
    }

    const uploadFile = async (file, signedRequest, url) => {
        console.log(signedRequest);
        jwtFetch(signedRequest,{
            method:'PUT',
            body: file
        })
    }

    useEffect(() => {
        
           if(document.getElementById("file-input")) {
            document.getElementById("file-input").onChange = () => {
                alert()
              const files = document.getElementById('file-input').files;
              const file = files[0];
              if(file == null){
                return alert('No file selected.');
              }
              getSignedRequest(file);
            };
        }
    }, [])
    
    const handleClick = (e) => {
        e.preventDefault();
        const files = document.getElementById('file-input').files;   
              const file = files[0];
              if(file == null){
                return alert('No file selected.');
              }
              getSignedRequest(file);
    }

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
                <div className="user-show-buttons">
                <Link to={`/users/update/${user._id}`} id='user-show-update'>
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
            <input type="file" id="file-input" /><button onClick={handleClick}>Upload</button>
                <p id="status">Please select a file</p>
            <img id="preview" src="/images/default.png"/>
        </div>
    )
}

export default UserShow;