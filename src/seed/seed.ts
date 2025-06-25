import { AppDataSource } from 'src/data-source';
import { seedUsers } from './user.seed';
import { seedCategories } from './category.seed';
import { seedTags } from './tag.seed';
import { seedPosts } from './post.seed';
import { seedComments } from './comment.seed';

async function seed() {
    const appdata = AppDataSource;
  await appdata.initialize();
  console.log('🚀 Database connected');

  await seedUsers();
  await seedCategories();
  await seedTags();
  await seedPosts();
  await seedComments();
 
  console.log('Seeding completed');

  process.exit();
}

seed()
