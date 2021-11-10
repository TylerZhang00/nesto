import React from "react";

// Antd
import { Spin } from "antd";

// Components
import FixedRateContainer from "../containers/FixedRateContainer";
import MiscContainer from "../containers/MiscContainer";
import VariableRateContainer from "../containers/VariableRateContainer";

// Hooks
import useGetAllApplications from "../../hooks/UseGetAllApplications";
import useGetAllProducts from "../../hooks/UseGetAllProducts";

// Styles
import * as S from "./Mortgages.styles";

const Mortgages = () => {
  // Hooks
  const { allProducts, isLoading, isError } = useGetAllProducts();
  const { allApplications, isApplicationsLoading, isApplicationsError } =
    useGetAllApplications();

  // Loading State
  if (isLoading || isError || isApplicationsLoading || isApplicationsError)
    return (
      <S.LoadingContainer>
        <Spin />
      </S.LoadingContainer>
    );

  // Filter fixed/variable products
  // And reduce to find lowest rate
  let allFixedProducts = allProducts.filter(
    (product) => product.type === "FIXED"
  );
  let allVariableProducts = allProducts.filter(
    (product) => product.type === "VARIABLE"
  );
  let lowestFixed = allFixedProducts.reduce(function (prev, curr) {
    return prev.bestRate < curr.bestRate ? prev : curr;
  });
  let lowestVariable = allVariableProducts.reduce(function (prev, curr) {
    return prev.bestRate < curr.bestRate ? prev : curr;
  });

  // Vars to determine show state of mortgage components
  let appliedFixed = false;
  let appliedVariable = false;
  let appliedFixedComplete = false;
  let appliedVariableComplete = false;

  // Filters thru all applications and finds
  // Whether open applications match lowest products
  // If so, show editing, else show apply state for mortgage components
  allApplications.map((application) => {
    if (application.productId === lowestFixed.id) {
      appliedFixed = true;
      // Check if application is complete
      if (
        application.applicants[0].phone !== "" &&
        application.applicants[0].email !== "" &&
        application.applicants[0].firstName !== "" &&
        application.applicants[0].lastName !== ""
      ) {
        appliedFixedComplete = true;
      }
    }
    if (application.productId === lowestVariable.id) {
      appliedVariable = true;
      // Check if application is complete
      if (
        application.applicants[0].phone !== "" &&
        application.applicants[0].email !== "" &&
        application.applicants[0].firstName !== "" &&
        application.applicants[0].lastName !== ""
      ) {
        appliedVariableComplete = true;
      }
    }
    return null;
  });

  return (
    <S.MortgagesContainer>
      <S.NameContainer>Hello, Yiqi</S.NameContainer>

      {/* Only show if user has one or more pending applications */}
      {allApplications.length > 0 ? (
        <S.PendingApplicationsTitle>
          {" "}
          Your pending applications:{" "}
        </S.PendingApplicationsTitle>
      ) : null}

      {/* Misc container for when user has not submitted any applications */}
      {allApplications.length === 0 ? (
        <MiscContainer numOfApplications={allApplications.length} />
      ) : null}

      {/* Fixed Mortgage Component */}
      <FixedRateContainer
        applied={appliedFixed}
        complete={appliedFixedComplete}
        editing={false}
        product={lowestFixed}
      />

      {/* Only show if user has one pending applications */}
      {allApplications.length === 1 ? (
        <S.PendingApplicationsTitle>
          {" "}
          See more products:
        </S.PendingApplicationsTitle>
      ) : null}

      {/* Variable Mortgage Component */}
      <VariableRateContainer
        applied={appliedVariable}
        complete={appliedVariableComplete}
        editing={false}
        product={lowestVariable}
      />

      {/* Misc container for when user has submitted one or more applications */}
      {allApplications.length > 0 ? (
        <MiscContainer numOfApplications={allApplications.length} />
      ) : null}
    </S.MortgagesContainer>
  );
};

export default Mortgages;
