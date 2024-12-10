import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmailLogModuleBase } from "./base/emailLog.module.base";
import { EmailLogService } from "./emailLog.service";
import { EmailLogController } from "./emailLog.controller";
import { EmailLogResolver } from "./emailLog.resolver";

@Module({
  imports: [EmailLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmailLogController],
  providers: [EmailLogService, EmailLogResolver],
  exports: [EmailLogService],
})
export class EmailLogModule {}
