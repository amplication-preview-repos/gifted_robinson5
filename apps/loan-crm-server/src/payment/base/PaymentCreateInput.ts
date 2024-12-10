/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  ValidateNested,
  IsDate,
  IsEnum,
} from "class-validator";
import { LoanWhereUniqueInput } from "../../loan/base/LoanWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumPaymentPaymentType } from "./EnumPaymentPaymentType";

@InputType()
class PaymentCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: () => LoanWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LoanWhereUniqueInput)
  @IsOptional()
  @Field(() => LoanWhereUniqueInput, {
    nullable: true,
  })
  loan?: LoanWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  loanBalance?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  paymentDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumPaymentPaymentType,
  })
  @IsEnum(EnumPaymentPaymentType)
  @IsOptional()
  @Field(() => EnumPaymentPaymentType, {
    nullable: true,
  })
  paymentType?: "Option1" | null;
}

export { PaymentCreateInput as PaymentCreateInput };
