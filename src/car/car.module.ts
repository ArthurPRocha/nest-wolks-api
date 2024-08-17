import { forwardRef, Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { AuthModule } from 'src/auth/auth.module';
import { CarService } from './car.service';
import { UserModule } from 'src/user/user.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => UserModule),
  ],
  controllers: [CarController],
  providers: [CarService, PrismaService],
  exports: [CarService],
})
export class CarModule {}
