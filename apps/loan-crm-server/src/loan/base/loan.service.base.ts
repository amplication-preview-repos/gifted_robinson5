/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Loan as PrismaLoan,
  Payment as PrismaPayment,
  Application as PrismaApplication,
  Client as PrismaClient,
} from "@prisma/client";

export class LoanServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LoanCountArgs, "select">): Promise<number> {
    return this.prisma.loan.count(args);
  }

  async loans(args: Prisma.LoanFindManyArgs): Promise<PrismaLoan[]> {
    return this.prisma.loan.findMany(args);
  }
  async loan(args: Prisma.LoanFindUniqueArgs): Promise<PrismaLoan | null> {
    return this.prisma.loan.findUnique(args);
  }
  async createLoan(args: Prisma.LoanCreateArgs): Promise<PrismaLoan> {
    return this.prisma.loan.create(args);
  }
  async updateLoan(args: Prisma.LoanUpdateArgs): Promise<PrismaLoan> {
    return this.prisma.loan.update(args);
  }
  async deleteLoan(args: Prisma.LoanDeleteArgs): Promise<PrismaLoan> {
    return this.prisma.loan.delete(args);
  }

  async findPayments(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<PrismaPayment[]> {
    return this.prisma.loan
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments(args);
  }

  async getApplication(parentId: string): Promise<PrismaApplication | null> {
    return this.prisma.loan
      .findUnique({
        where: { id: parentId },
      })
      .application();
  }

  async getClient(parentId: string): Promise<PrismaClient | null> {
    return this.prisma.loan
      .findUnique({
        where: { id: parentId },
      })
      .client();
  }
}