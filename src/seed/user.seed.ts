import { faker } from '@faker-js/faker';
import { AppDataSource } from '../data-source';
import { User } from '../user/entities/user.entity';
import { Profile } from '../profile/entities/profile.entity';

export async function seedUsers() {
  const userRepo = AppDataSource.getRepository(User);
  const profileRepo = AppDataSource.getRepository(Profile);

  for (let i = 0; i < 10; i++) {
    const profile = profileRepo.create({
      bio: faker.lorem.sentence(),
    });
    await profileRepo.save(profile);


    const user = userRepo.create({
      username: faker.internet.userName(),
      profile: profile,
    });
    await userRepo.save(user);
  }

  console.log('✅ Users with profiles seeded');
}
