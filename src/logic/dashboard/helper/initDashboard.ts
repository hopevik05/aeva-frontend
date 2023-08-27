import Axios from "axios";
import { useEffect } from "react";
import baseApiUrl from "../../../common/config";
import { useAppDispatch } from "../../../common/hooks/useState";
import { setDownloads } from "../store";

function initDashboard() {
  const dispatch = useAppDispatch();

  const loadDownloads = async () => {
    const { data: res } = await Axios.get(`${baseApiUrl}/lidar`);
    dispatch(setDownloads(res.reverse()));
  };
  useEffect(() => {
    loadDownloads();
  }, []);
}

export default initDashboard;
