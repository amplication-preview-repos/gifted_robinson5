/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SmsLog as PrismaSmsLog } from "@prisma/client";

export class SmsLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SmsLogCountArgs, "select">): Promise<number> {
    return this.prisma.smsLog.count(args);
  }

  async smsLogs(args: Prisma.SmsLogFindManyArgs): Promise<PrismaSmsLog[]> {
    return this.prisma.smsLog.findMany(args);
  }
  async smsLog(
    args: Prisma.SmsLogFindUniqueArgs
  ): Promise<PrismaSmsLog | null> {
    return this.prisma.smsLog.findUnique(args);
  }
  async createSmsLog(args: Prisma.SmsLogCreateArgs): Promise<PrismaSmsLog> {
    return this.prisma.smsLog.create(args);
  }
  async updateSmsLog(args: Prisma.SmsLogUpdateArgs): Promise<PrismaSmsLog> {
    return this.prisma.smsLog.update(args);
  }
  async deleteSmsLog(args: Prisma.SmsLogDeleteArgs): Promise<PrismaSmsLog> {
    return this.prisma.smsLog.delete(args);
  }
}