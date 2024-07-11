import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { CreateUserDTO } from './create-user.dto';

export class UpdatePutUserDTO extends CreateUserDTO {}
