import React from "react";
import { Route, Routes } from "react-router-dom";

// layout
import CheckoutLayout from "../layouts/Checkout.layout";

function CheckoutLayoutHoc({ component: Component, path, ...rest }) {
  return (
    <>
      <Routes>
        <Route
          {...rest}
          path={path}
          element={
            <CheckoutLayout>
              <Component />
            </CheckoutLayout>
          }

          // element={(props) => (
          //   <CheckoutLayout>
          //     <Component {...props} />
          //   </CheckoutLayout>
          // )}
        />
      </Routes>
    </>
  );
}

export default CheckoutLayoutHoc;
