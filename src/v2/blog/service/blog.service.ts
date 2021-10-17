import { Injectable, NotFoundException } from '@nestjs/common';
import { Blog } from '../dto/blog.model';
import { CreateBlogDto } from '../dto/create-blog.dto';

@Injectable()
export class BlogService {
    private blog: Blog[] = [];

  selectBlogList():Blog[]{
   
    return this.blog;
  }
  
  insertBlog(createBlogDto : CreateBlogDto):Blog{
      const {title,content, memberSeq, mainImg,category,regpIp} = createBlogDto;
      
      const blogs: Blog = {
        TITLE:title,
        CONTENT:content,
        MEMBER_SEQ:memberSeq,
        MAIN_IMG:mainImg,
        CATEGORY:category,
        REGP_IP:regpIp,
        REGP_SEQ:String.fromCodePoint(memberSeq),
      }
      this.blog.push(blogs);
      return blogs;
  }

  selectOne(blogSeq:number):Blog{
    var found = this.blog.find((blog) => 1 === blogSeq);
    if(!found) throw new NotFoundException();
    return found;
  }
  
}