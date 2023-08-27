import { useSelector } from "react-redux";
import "../../assets/css/request/index.scss";
import explorer from "../../assets/icons/explorer.svg";
import MainAppLayout from "../../common/components/layouts/main-app-layout";
import TrxStateModal from "../../common/components/trx-state/trx-state-modal";
import { TrxState } from "../../common/enums";
import { RootState } from "../../common/store";
import RequestForm from "./components/form";

function RequestPage() {
  const { trxState, trxResponse } = useSelector(
    (state: RootState) => state.common
  );
  const { data } = trxResponse || {};
  const { pid } = data || {};
  return (
    <MainAppLayout>
      <div className="sm:my-20 my-8 h-676px w-536px m-auto container">
        {trxState !== TrxState.unset && (
          <TrxStateModal>
            <div className="w-full m-auto rounded-lg">
              <div className="w-full h-16 flex justify-center items-center">
                <p className="text-white text-xl text-green300">Success</p>
              </div>
              <div>
                <p className="text-gray50 text-center py-12 text-base w-full mb-2">
                  Your file download request has been registered successful!{" "}
                  <br />
                  PID number : {pid}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    window.open("/dashboard");
                  }}
                  className="w-full mb-4 flex justify-center items-center gap-x-2"
                >
                  <p className="text-green300">Track status</p>
                  <img
                    src={explorer}
                    className="w-5 h-5 object-contain"
                    alt="explorer"
                  />
                </button>
              </div>
            </div>
          </TrxStateModal>
        )}
        <RequestForm />
      </div>
    </MainAppLayout>
  );
}
export default RequestPage;
