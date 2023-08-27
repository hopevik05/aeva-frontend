import { Form, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import Axios from "axios";
import React from "react";
import Button from "../../../../common/components/buttons/button";
import baseApiUrl from "../../../../common/config";
import { Status, TrxState } from "../../../../common/enums";
import { useAppDispatch } from "../../../../common/hooks/useState";
import { setTrxResponse, setTrxState } from "../../../../common/store/common";

const data = [
  { key: "lidar", label: "Lidar 4D" },
  { key: "aeries-2", label: "Aeries II" },
];
const type = [
  { key: "pdf", label: "PDF" },
  { key: "excel", label: "Excel" },
  //   { key: "word", label: "Word" },
];
const inputStyle = {
  fontSize: 16,
  color: "#C7DEFF",
  background: "#0B0F1C",
  border: "none",
};

const RequestForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const onFinish = async ({ data, type, purpose }: any) => {
    try {
      dispatch(setTrxState(TrxState.submit));
      const { data: res } = await Axios.post(`${baseApiUrl}/lidar`, {
        data,
        type,
        purpose,
      });
      dispatch(setTrxResponse({ status: Status.success, data: res }));
      dispatch(setTrxState(TrxState.success));
    } catch (error) {
      console.log("uib", error);
      dispatch(setTrxState(TrxState.error));
      dispatch(setTrxResponse({ status: Status.error, data: error }));
    }
  };

  return (
    <Form
      name="batchBuy"
      id="batchBuy"
      onFinish={(formValues) => onFinish(formValues)}
    >
      <p className="text-center text-white fort-bold text-2xl my-6">
        File Request
      </p>
      <div className="mt-4 w-full">
        <p className="label mb-2">Purpose</p>
        <Form.Item
          name="purpose"
          rules={[{ required: true, message: "Please enter purpose..." }]}
          initialValue="Testing"
        >
          <TextArea
            className="px-3 search-box w-full rounded-md h-12 "
            placeholder="Purpose..."
            spellCheck={false}
            style={inputStyle}
            rows={6}
            autoComplete="off"
          />
        </Form.Item>
      </div>
      <div className="mt-4 w-full">
        <p className="label mb-2">Data</p>
        <Form.Item name="data" initialValue="Lidar 4D">
          <Select>
            {data.map((item) => (
              <Select.Option
                key={item.key}
                style={inputStyle}
                value={item.label}
              >
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <div className="mt-4 w-full">
        <p className="label mb-2">File Type</p>
        <Form.Item name="type" initialValue="PDF">
          <Select>
            {type.map((item) => (
              <Select.Option
                key={item.key}
                style={inputStyle}
                value={item.label}
              >
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <Button className="submit-btn w-full mt-16" isSubmit>
        Submit Request
      </Button>
    </Form>
  );
};

export default RequestForm;
