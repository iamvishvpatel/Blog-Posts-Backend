import { faker } from '@faker-js/faker';
import { AppDataSource } from '../data-source';
import { Post } from '../post/entities/post.entity';
import { User } from '../user/entities/user.entity';
import { Tag } from '../tag/entities/tag.entity';
import { Category } from '../category/entities/category.entity';

export async function seedPosts() {
  const postRepo = AppDataSource.getRepository(Post);
  const userRepo = AppDataSource.getRepository(User);
  const tagRepo = AppDataSource.getRepository(Tag);
  const categoryRepo = AppDataSource.getRepository(Category);

  const users = await userRepo.find();
  const tags = await tagRepo.find();
  const categories = await categoryRepo.find();

  for (let i = 0; i < 20; i++) {
    const post = postRepo.create({
      title: faker.lorem.sentence(),
      author: faker.helpers.arrayElement(users),
      tags: faker.helpers.arrayElements(tags, 2),
      category: faker.helpers.arrayElement(categories),
    });
    await postRepo.save(post);
  }

  console.log('✅ Posts seeded');
}
