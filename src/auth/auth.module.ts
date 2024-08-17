import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from './auth.service';
import { FileModule } from 'src/file/file.module';
import { AuthGuard } from 'src/guards/auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_JWT,
    }),
    forwardRef(() => UserModule),
    PrismaModule,
    FileModule
  ],
  controllers: [AuthController],
  exports: [AuthService, AuthGuard],
  providers: [AuthService, AuthGuard],
})
export class AuthModule {}
