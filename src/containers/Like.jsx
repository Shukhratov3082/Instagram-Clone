import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Following from '../components/Following';
import You from '../components/You';

const Like = () => {
    const navigate = useNavigate()
    useEffect(() => { navigate('/like/you') }, [navigate])
    return (
        <Routes>
            <Route path='/like/following' element={<Following />} />
            <Route path='/like/you' element={<You />} />
        </Routes>
    );
}

export default Like;

