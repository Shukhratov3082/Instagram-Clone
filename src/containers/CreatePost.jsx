import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import API from '../utils/axios';

const Createpost = () => {

    const [title, setTitle] = useState("");
    const [file, setFile] = useState([]);

    function AddPost() {
        const reqBody = {
            attachs: [file],
            createdDate: "2022-04-08T03:52:39.504Z",
            hashtag: "hashtag",
            id: 0,
            location: "string",
            profileId: 0,
            title: title
        }
        API.post('/post', reqBody)
            .then((res) => { console.log("OXSHADI",res) })
            .catch(res =>console.log(res))
    }

    return (
        <Wrapper>
           
                <div className="confirmation">
                    <Link className='link' to="/home">
                        <span className='cancel'>Cancel</span>
                    </Link>
                    <span className='next'>Next</span>
                </div>
                <form action="">
                    <Input value={title} onChange={({ target }) => setTitle(target.value)} type="text" placeholder="Title" />
                    <Input type="file" onChange={({ target }) => setFile(target.files[0])} />
                </form>
                <button onClick={AddPost}>Create</button>
           
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

    button {
        width: 100%;
        padding: 8px 16px;
        font-size: 20px;
        background-color: #1d74ad;
        color: white;
        border: none;
        border-radius: 8px;
    }
`;
const Input = styled.input`
            width: 100%;
            padding: 12px 24px;
            display: block;
            border: 3px solid #1d74ad;
            font-size: 22px;
            margin-bottom: 15px;
`
