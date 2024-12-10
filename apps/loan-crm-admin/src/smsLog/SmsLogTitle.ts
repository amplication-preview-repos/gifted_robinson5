import { SmsLog as TSmsLog } from "../api/smsLog/SmsLog";

export const SMSLOG_TITLE_FIELD = "to";

export const SmsLogTitle = (record: TSmsLog): string => {
  return record.to?.toString() || String(record.id);
};
