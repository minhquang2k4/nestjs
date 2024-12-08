import { OmitType, PartialType, PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PartialType(CreateUserDto) {} //sẽ lấy tất cả các trường
export class UpdateUserDto extends OmitType(CreateUserDto, ['password']) {} //sẽ lấy tất cả các trường trừ password
// export class UpdateUserDto extend PickType(CreateUserDto, ['email']) {} // chỉ lấy trường email
