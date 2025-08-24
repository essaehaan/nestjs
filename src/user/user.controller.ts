import { Controller, Get, Post, Put, Patch, Param, Body, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
import { CreateUserDto } from './dto/createUserDto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userService.getUsers(Number(id));
    }
    @Get('getAllUsers')
    getAllUsers(){
        return this.userService.getAllUsers();
    }

    //POST - Create a New User
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    //PUT - Replace a user
    @Put('id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: { name: string; email: string }) {
        return this.userService.updateUser(Number(id), updateUserDto);
    }

    //PATCH - Partially Update a User
    @Patch(':id')
    partiallyUpdateUser(@Param('id') id: string, @Body() updateUserDto: Partial<User>) {
        return this.userService.partiallyUpdateUser(Number(id), updateUserDto);
    }

    //DELETE - Delete a User
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(Number(id));
    }
}
