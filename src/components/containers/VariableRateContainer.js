import React, { useState } from "react";
import { Link } from "react-router-dom";

// Antd
import { Modal, Tooltip } from "antd";
import {
  ArrowRightOutlined,
  CheckCircleTwoTone,
  InfoCircleTwoTone,
  QuestionCircleOutlined,
} from "@ant-design/icons";

// Hooks
import useGetAllApplications from "../../hooks/UseGetAllApplications";
import usePostApplication from "../../hooks/UsePostApplication";

// Recoil
import { useRecoilState } from "recoil";
import { currentApplicationAtom } from "../../atoms/currentApplicationAtom";

// Styles
import * as S from "./containers.styles";
import "../../index.css";
import "antd/dist/antd.css";

const VariableRateContainer = ({ applied, complete, editing, product }) => {
  // Hooks
  const { allApplications } = useGetAllApplications();
  const { createMortgageApplication } = usePostApplication();

  // Recoil
  // eslint-disable-next-line
  const [currentApplication, setCurrentApplication] = useRecoilState(
    currentApplicationAtom
  );

  // Modal Logic
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Put request to create application
  // Passes in product.id into body
  const createApplication = () => {
    createMortgageApplication(product.id);
  };

  // Edits application, grabs application data
  // via recoil atom
  const editApplication = () => {
    allApplications.map((application) => {
      if (application.productId === product.id) {
        setCurrentApplication(application);
      }
      return currentApplication;
    });
  };

  if (product === undefined) return null;

  return (
    <>
      <S.IndividualMortgageContainer editing={editing} variable="true">
        <S.TextContainer>
          <S.TitleContainer>
            Lowest Variable Rate{" "}
            <Tooltip
              placement="top"
              title="A variable-rate mortgage is a mortgage loan with an interest rate that gets periodically adjusted based based on market conditions."
            >
              <S.IconContainer>
                <QuestionCircleOutlined
                  style={{ cursor: "help", paddingLeft: "8px" }}
                />
              </S.IconContainer>
            </Tooltip>
            {applied && complete && !editing ? (
              <Tooltip
                placement="top"
                title="Thanks for applying! Feel free to edit your application."
              >
                <S.VerifiedIconContainer>
                  <CheckCircleTwoTone />
                </S.VerifiedIconContainer>
              </Tooltip>
            ) : applied && !complete && !editing ? (
              <Tooltip
                placement="top"
                title="We're missing some information from you! Please click edit and complete the form."
              >
                <S.VerifiedIconContainer>
                  <InfoCircleTwoTone />
                </S.VerifiedIconContainer>
              </Tooltip>
            ) : null}
          </S.TitleContainer>
          <S.InterestText>
            <S.IconContainer>
              {product.bestRate}
              <QuestionCircleOutlined
                onClick={() => showModal()}
                style={{ cursor: "context-menu", paddingLeft: "8px" }}
              />
            </S.IconContainer>
          </S.InterestText>
          <S.ProductText>{product.name}</S.ProductText>
          <S.LenderText>
            from <b>{product.lenderName}</b>
          </S.LenderText>
        </S.TextContainer>
        <Link state={{ productSelected: product }} to="/form">
          {!applied && !editing ? (
            <S.NextButton apply="true" onClick={createApplication}>
              <S.ButtonText>Apply</S.ButtonText>
              <ArrowRightOutlined />{" "}
            </S.NextButton>
          ) : applied && !editing ? (
            <S.NextButton edit="true" onClick={editApplication}>
              <S.ButtonText>Edit</S.ButtonText>
              <ArrowRightOutlined />{" "}
            </S.NextButton>
          ) : null}
        </Link>
      </S.IndividualMortgageContainer>
      <Modal
        visible={isModalVisible}
        centered
        footer={null}
        keyboard={true}
        closable={true}
        bodyStyle={{
          background: "#F5F3F3",
          color: "#212243",
          padding: 40,
        }}
        width={"50%"}
        onCancel={() => {
          handleCancel();
        }}
      >
        <>
          <S.ModalTitle>More about your mortgage:</S.ModalTitle>
          <div>
            <S.ModalBody>
              <b>Name:</b> {product.name}
            </S.ModalBody>
            <S.ModalBody>
              <b>Family:</b> {product.family}{" "}
            </S.ModalBody>
            <S.ModalBody>
              <b>Type:</b> {product.type}
            </S.ModalBody>
            <S.ModalBody>
              <b>Term:</b> {product.term}{" "}
            </S.ModalBody>
            <S.ModalBody>
              <b>Insurable:</b> {product.insurable ? "Yes" : "No"}{" "}
            </S.ModalBody>
            <S.ModalBody>
              <b>Insurance:</b> {product.insurance}
            </S.ModalBody>
            <S.ModalBody>
              <b>Prepayment Option:</b> {product.prepaymentOption}
            </S.ModalBody>
            <S.ModalBody>
              <b>Restrictions Option:</b> {product.restrictionsOption}{" "}
            </S.ModalBody>
            <S.ModalBody>
              <b>Restrictions:</b> {product.restrictions}
            </S.ModalBody>
            <S.ModalBody>
              <b>Fixed Penalty Spread:</b> {product.fixedPenaltySpread}
            </S.ModalBody>
            <S.ModalBody>
              <b>Heloc Option:</b> {product.helocOption}
            </S.ModalBody>
            <S.ModalBody>
              <b>Heloc Delta:</b> {product.helocDelta}
            </S.ModalBody>
            <S.ModalBody>
              <b>Lender Name:</b> {product.lenderName}
            </S.ModalBody>
            <S.ModalBody>
              <b>Lender Type:</b> {product.lenderType}{" "}
            </S.ModalBody>
            <S.ModalBody>
              <b>Rate Hold:</b> {product.rateHold}{" "}
            </S.ModalBody>
            <S.ModalBody>
              <b>Rate:</b> {product.rate}{" "}
            </S.ModalBody>
            <S.ModalBody>
              <b>Rate Prime Variance:</b> {product.ratePrimeVariance}{" "}
            </S.ModalBody>
            <S.ModalBody>
              <b>Best Rate:</b> {product.bestRate}{" "}
            </S.ModalBody>
            <S.ModalBody>
              <b>Created:</b> {product.created}
            </S.ModalBody>
            <S.ModalBody>
              <b> Updated:</b> {product.updated}
            </S.ModalBody>
          </div>
        </>
      </Modal>
    </>
  );
};

export default VariableRateContainer;
