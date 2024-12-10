import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LoanListRelationFilter } from "../loan/LoanListRelationFilter";

export type ClientWhereInput = {
  address?: StringNullableFilter;
  applications?: ApplicationListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  loans?: LoanListRelationFilter;
  phoneNumber?: StringNullableFilter;
};
