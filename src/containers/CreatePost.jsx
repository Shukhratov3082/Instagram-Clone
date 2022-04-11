import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import API from '../utils/axios';

const Createpost = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [location, setLocation] = useState("");
    const [hashtag, setHashtag] = useState("");

    function AddPost() {
        let form = new FormData();
        form.append("file", file);
        form.append("hashtag", hashtag);
        form.append("location", location);
        form.append("title", title);

        API.post("/attach/upload/POST", form)
            .then(res => {
                const reqBody = {
                    "title": title,
                    "location": location,
                    "hashtag": hashtag,
                    "attachs": [
                        res.data.id
                    ]
                }
                API.post("/post", reqBody)
                    .then(res => navigate("/home"))
            })
    }

    return (
        <Wrapper>

            <div className="confirmation">
                <Link className='link' to="/home">
                    <span className='cancel'>Cancel</span>
                </Link>
                <span className='next'>Next</span>
            </div>

            <div className="create-post-container">
                <div className='form'>
                    <input type="text" onChange={({ target }) => setTitle(target.value)} placeholder="Title" />
                    <input type="file" onChange={({ target }) => setFile(target.files[0])} />
                    <input type="text" onChange={({ target }) => setLocation(target.value)} placeholder="Location" />
                    <input type="text" onChange={({ target }) => setHashtag(target.value)} placeholder="Hashtag" />
                    <button onClick={AddPost}>Create</button>
                </div>
            </div>

        </Wrapper>
    );
}

export default Createpost;



const Wrapper = styled.div`
    width: 375px;
    height: 812px;
    background-color:white;
    padding: 10px 15px;

    .confirmation {
        height: 56px;
        width: 100%;
        display: flex;
        margin-bottom: 10px;
        justify-content: space-between;

        .cancel {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            letter-spacing: -0.33px;
            color: #262626;
            cursor: pointer;
        }

        .next {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            text-align: right;
            letter-spacing: -0.33px;
            color: #3897F0;
            cursor: pointer;
        }
    }

    .create-post-container {
        width: 100%;
        height: 90%;
        display: flex;
        align-items: center;

        input {
            width: 100%;
            padding: 15px 18px;
            margin-bottom: 20px;

            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 17px;
            letter-spacing: -0.15px;
            color: #262626;
            outline: none;

            background: #FAFAFA;
            border: 0.5px solid rgba(43, 43, 43, 0.1);
            border-radius: 5px;

            ::placeholder {
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 17px;
                letter-spacing: -0.15px;
                color: rgba(36, 36, 36, 0.2); 
            }
        }

        button {
            width: 100%;
            padding: 8px 16px;
            font-size: 20px;
            background-color: #1d74ad;
            color: white;
            border: none;
            border-radius: 8px;
            margin-top: 20px;
        }
    }
`;
