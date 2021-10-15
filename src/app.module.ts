import { Module ,}        from '@nestjs/common';
import { BlogService }    from './v2/blog/service/blog.service';
import { BlogController } from './v2/blog/blog.controller';
import { ApisController } from './v2/apis/apis.controller';


@Module({
  imports: [],
  controllers: [BlogController,ApisController],
  providers: [BlogService],
})

export class AppModule {}
