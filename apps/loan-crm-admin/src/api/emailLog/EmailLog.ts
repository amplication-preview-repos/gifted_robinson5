export type EmailLog = {
  body: string | null;
  createdAt: Date;
  id: string;
  sentDate: Date | null;
  status?: "Option1" | null;
  subject: string | null;
  to: string | null;
  updatedAt: Date;
};
