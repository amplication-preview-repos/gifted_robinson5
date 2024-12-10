/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SmsLogWhereInput } from "./SmsLogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SmsLogOrderByInput } from "./SmsLogOrderByInput";

@ArgsType()
class SmsLogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SmsLogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SmsLogWhereInput, { nullable: true })
  @Type(() => SmsLogWhereInput)
  where?: SmsLogWhereInput;

  @ApiProperty({
    required: false,
    type: [SmsLogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SmsLogOrderByInput], { nullable: true })
  @Type(() => SmsLogOrderByInput)
  orderBy?: Array<SmsLogOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SmsLogFindManyArgs as SmsLogFindManyArgs };