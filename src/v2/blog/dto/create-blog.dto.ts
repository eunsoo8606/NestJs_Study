import { IsNotEmpty } from "class-validator";

export class CreateBlogDto{
    @IsNotEmpty()
    memberSeq:number;
    mainImg:string;
    @IsNotEmpty()
    title:string;
    content:string;
    regpIp:string;
    regpSeq:string;
    category:string;
}