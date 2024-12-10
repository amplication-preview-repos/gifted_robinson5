/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LoanWhereUniqueInput } from "../../loan/base/LoanWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LoanUpdateManyWithoutApplicationsInput {
  @Field(() => [LoanWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LoanWhereUniqueInput],
  })
  connect?: Array<LoanWhereUniqueInput>;

  @Field(() => [LoanWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LoanWhereUniqueInput],
  })
  disconnect?: Array<LoanWhereUniqueInput>;

  @Field(() => [LoanWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LoanWhereUniqueInput],
  })
  set?: Array<LoanWhereUniqueInput>;
}

export { LoanUpdateManyWithoutApplicationsInput as LoanUpdateManyWithoutApplicationsInput };
