import { CoursesService } from './courses.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CourseDto } from './course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async getCourses() {
    const courses = await this.coursesService.getCourses();
    return courses;
  }

  @Get(':id')
  async getCourse(@Param('id') id) {
    const course = await this.coursesService.getCourse(id);
    return course;
  }

  @Post()
  async addCourse(@Body() courseDto: CourseDto) {
    const course = await this.coursesService.addCourse(courseDto);
    return course;
  }

  @Delete()
  async deleteCourse(@Query('id') id) {
    const courses = await this.coursesService.deleteCourse(id);
    return courses;
  }
}
