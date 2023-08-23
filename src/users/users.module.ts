import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './schema/users.schema';
import { ConfigModule } from '@nestjs/config'


@Module({
  imports: [MongooseModule.forFeature([
    {
      name: User.name,// nombre de la collection
      schema: UserSchema // para model
    }
  ]), ConfigModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

