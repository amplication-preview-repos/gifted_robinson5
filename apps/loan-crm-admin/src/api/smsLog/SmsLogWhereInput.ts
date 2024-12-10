import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SmsLogWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  sentDate?: DateTimeNullableFilter;
  status?: "Option1";
  to?: StringNullableFilter;
};
