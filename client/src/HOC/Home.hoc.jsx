import React, { Component } from 'react'
import { Route, Routes, Navigate } from 'react-router';

// layout
import HomeLayout from '../layouts/Homepage.layout';

function HomeLayoutHoc({ component: Component, path, ...rest }) {
    return (
        <>
            <Routes>
                <Route
                {...rest}
                path={path}
                element={ 
                    <HomeLayout>
                        <Component />
                    </HomeLayout>
                }
                />
                <Route path='/' element={<Navigate to='/delivery' />}/>
            </Routes>
        </>
    )
}

export default HomeLayoutHoc;
