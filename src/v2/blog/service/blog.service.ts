import { Injectable } from '@nestjs/common';
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
      
      const blog: Blog = {
        TITLE:title,
        CONTENT:content,
        MEMBER_SEQ:memberSeq,
        MAIN_IMG:mainImg,
        CATEGORY:category,
        REGP_IP:regpIp,
        REGP_SEQ:String.fromCodePoint(memberSeq),
      }
      return blog;
  }

  selectOne(blogSeq:number):Blog{
    return this.blog.find((blog) => 1 === blogSeq);
  }
  
}