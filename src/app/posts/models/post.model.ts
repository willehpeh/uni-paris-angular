export class Post {
  id: string;
  userId: string;
  title: string;
  created: string;
  content: string;
  comments: string[];
}

export class PostDto {
  title: string;
  content: string;
}
