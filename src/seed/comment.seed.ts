import { faker } from '@faker-js/faker';
import { AppDataSource } from '../data-source';
import { Comment } from '../comment/entities/comment.entity';
import { User } from '../user/entities/user.entity';
import { Post } from '../post/entities/post.entity';

export async function seedComments() {
  const commentRepo = AppDataSource.getRepository(Comment);
  const userRepo = AppDataSource.getRepository(User);
  const postRepo = AppDataSource.getRepository(Post);

  const users = await userRepo.find();
  const posts = await postRepo.find();

  for (let i = 0; i < 50; i++) {
    const comment = commentRepo.create({
      content: faker.lorem.sentences(2),
      user: faker.helpers.arrayElement(users),
      post: faker.helpers.arrayElement(posts),
    });
    await commentRepo.save(comment);
  }

  console.log('✅ Comments seeded');
}
