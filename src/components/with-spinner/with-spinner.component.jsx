import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

// this is a higher order component(HOC), takes a component and will return a component
const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
