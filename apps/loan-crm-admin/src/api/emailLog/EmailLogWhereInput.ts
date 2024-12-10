import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EmailLogWhereInput = {
  body?: StringNullableFilter;
  id?: StringFilter;
  sentDate?: DateTimeNullableFilter;
  status?: "Option1";
  subject?: StringNullableFilter;
  to?: StringNullableFilter;
};
