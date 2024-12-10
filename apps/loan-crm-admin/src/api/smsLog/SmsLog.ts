export type SmsLog = {
  createdAt: Date;
  id: string;
  message: string | null;
  sentDate: Date | null;
  status?: "Option1" | null;
  to: string | null;
  updatedAt: Date;
};
