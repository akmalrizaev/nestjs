import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';


@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll() {
        return 'This action returns all coffees';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns #${id} coffee`;
    }

    @Post() 
    @HttpCode(410)   
    create(@Body() body) {
        return body;
        // return `This action creates acoffee `;

    }
    // create(@Body('name') body) {
    //     return body
    // }


}
