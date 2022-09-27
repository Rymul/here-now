// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteUser, fetchUser, getUser } from "../../store/users";
import './UserShow.css'
import { calcAge, createdAgoTimeParser } from "../../utils/utils";
import jwtFetch from "../../store/jwt";


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

    // const getSignedRequest = async (file) =>  {
    //     const res = await fetch(`/api/s3/sign-s3?file-name=${file.name}&file-type=${file.type}`)
    //     const urls = await res.json();
    //     uploadFile(file, urls.signedRequest, urls.url)
    // }

    // const uploadFile = async (file, signedRequest, url) => {
    //     console.log(signedRequest);
    //     jwtFetch(signedRequest,{
    //         method:'PUT',
    //         body: file
    //     })
    // }

    // useEffect(() => {
        
    //        if(document.getElementById("file-input")) {
    //         document.getElementById("file-input").onChange = () => {
    //             alert()
    //           const files = document.getElementById('file-input').files;
    //           const file = files[0];
    //           if(file == null){
    //             return alert('No file selected.');
    //           }
    //           getSignedRequest(file);
    //         };
    //     }
    // }, [])
    
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     const files = document.getElementById('file-input').files;   
    //           const file = files[0];
    //           if(file == null){
    //             return alert('No file selected.');
    //           }
    //           jwtFetch(pa)
    // }

    const handleFileUpload = async (file) => {
        alert('uploading')
        
        const imageData = new FormData();
        imageData.append("image", file);

        const url = `/api/s3/add-profile-picture`;

        const config = {
            method: "POST",
            body: imageData,
        };

        try {
            const req = await jwtFetch(url, config);
            if (req.ok) {
                const res = await req.json();
                if (res.success) {
                    alert("success")// setURL(res.user.profilePicture);
                }
            }
        } catch (err) {
        }
    };

    if (!user) return null

    return(

        <div className="user-show-component">
            <div className="user-show-info">
                <div className="user-show-top">
                    <img id="user-show-profile-pic" src={user.photoUrl} alt=""/>
                    {/* <img id="user-show-profile-pic" src="/male-profile-picture.jpeg" alt="" /> */}
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
            {/* <input type="file" id="file-input" /><button className="upload">Upload</button>
                <p id="status">Please select a file</p>
            <img id="preview" src="/images/default.png"/> */}
        </div>
    )
}

export default UserShow;