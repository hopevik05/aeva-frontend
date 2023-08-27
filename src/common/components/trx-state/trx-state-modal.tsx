import { Modal } from "antd";
import React, { ReactNode } from "react";
import Lottie from "react-lottie";
import { useDispatch, useSelector } from "react-redux";
import failed from "../../../assets/icons/failed.svg";
import loader from "../../../assets/lottie/loader.json";
import { Status, TrxState } from "../../enums";
import { RootState } from "../../store";
import { setTrxResponse, setTrxState } from "../../store/common";

function TrxStateModal({ children }: { children: ReactNode }) {
  const { trxResponse } = useSelector((state: RootState) => state.common);
  const dispatch = useDispatch();
  const { status, data } = trxResponse || { status: "" };
  const isError = status === Status.error;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
  };
  const onDismiss = () => {
    dispatch(setTrxState(TrxState.unset));
    dispatch(setTrxResponse({}));
  };

  return (
    <Modal
      centered
      visible
      closeIcon={<span className="text-white">&#x2715;</span>}
      footer={null}
      onCancel={() => onDismiss()}
    >
      {status === Status.success ? (
        children
      ) : (
        <div className="w-full h-340px m-auto rounded-lg pb-8 pt-12">
          {isError ? (
            <div>
              <p className="error-head w-full text-center mb-5">
                Request Failed
              </p>
              <img src={failed} alt="failed" className="h-32 my-8 m-auto" />
              <p className="text-red-100 w-full text-base text-center mb-5">
                {data?.message || "Something went wrong!"}
              </p>
            </div>
          ) : (
            <>
              <p className="w-full text-center mb-5 text-white font-bold text-xl">
                Processing...
              </p>
              <Lottie
                options={defaultOptions}
                isClickToPauseDisabled
                width={300}
              />
            </>
          )}
        </div>
      )}
    </Modal>
  );
}
export default React.memo(TrxStateModal);
