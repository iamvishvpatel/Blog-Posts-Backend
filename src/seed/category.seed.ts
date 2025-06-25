import { faker } from '@faker-js/faker';
import { AppDataSource } from '../data-source';
import { Category } from '../category/entities/category.entity';

export async function seedCategories() {
  const categoryRepo = AppDataSource.getRepository(Category);

  for (let i = 0; i < 5; i++) {
    const category = categoryRepo.create({
      name: faker.commerce.department(),
    });
    await categoryRepo.save(category);
  }

  console.log('✅ Categories seeded');
}
