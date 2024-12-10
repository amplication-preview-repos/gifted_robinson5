import { EmailLog as TEmailLog } from "../api/emailLog/EmailLog";

export const EMAILLOG_TITLE_FIELD = "subject";

export const EmailLogTitle = (record: TEmailLog): string => {
  return record.subject?.toString() || String(record.id);
};
