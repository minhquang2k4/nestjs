import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  hashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };

  async create(user: CreateUserDto) {
    const hashPassword = this.hashPassword(user.password);
    user.password = hashPassword;
    const User = await this.userModel.create({
      email: user.email,
      password: user.password,
    });
    return User;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string) {
    if (!mongoose.isValidObjectId(id)) {
      return 'Invalid id';
    }

    const user = await this.userModel.findById(id);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!mongoose.isValidObjectId(id)) {
      return 'Invalid id';
    }
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto);
    return user;
  }

  async remove(id: string) {
    if (!mongoose.isValidObjectId(id)) {
      return 'Invalid id';
    }
    await this.userModel.findByIdAndDelete(id);
    return 'Delete success';
  }
}
