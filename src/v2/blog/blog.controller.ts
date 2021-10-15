import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Blog } from './dto/blog.model';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogService } from './service/blog.service';

@Controller({
  version: '2',
  path:'blog'
})
export class BlogController {
      constructor(private blogService : BlogService){}

  @Get()
  selectBlogList():Blog[] {
    return this.blogService.selectBlogList();
  }

  @Post('write')
  insertBlog(@Body() createBlogDto : CreateBlogDto):Blog{
    console.log("body : ", createBlogDto);
    return this.blogService.insertBlog(createBlogDto);
  }

  @Get("detail")
  selectOne(@Query("blogSeq") blogSeq:number):Blog{
      return this.blogService.selectOne(blogSeq);
  }


}