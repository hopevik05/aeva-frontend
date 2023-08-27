export interface DownloadTask {
  pid: number;
  status: string;
  startTime: number;
  endTime: number;
  job: any;
  purpose: string;
  data: string;
  type: string;
  link: string;
}
