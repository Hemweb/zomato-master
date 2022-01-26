import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// layout
import RestaurantLayout from "../layouts/Restaurant.layout";

function RestaurantLayoutHoc({ component: Component, path, ...rest }) {
  return (
    <>
    <Routes>
      <Route
        {...rest}
        path={path}
        element={
            <RestaurantLayout>
              <Component />
            </RestaurantLayout>}
        // component={(props) => (
        //   <RestaurantLayout>
        //     <Component {...props} />
        //   </RestaurantLayout>
        // )}
      />
      
      <Route path='/restaurant/:id' element={<Navigate to='/restaurant/:id/overview' />}/>
      </Routes>
    </>
  );
}

export default RestaurantLayoutHoc;