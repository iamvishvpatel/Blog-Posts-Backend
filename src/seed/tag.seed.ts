import { faker } from '@faker-js/faker';
import { AppDataSource } from "src/data-source";
import { Tag } from "src/tag/entities/tag.entity";

export async function seedTags() {
    const tagRepo = AppDataSource.getRepository(Tag);

    for (let i = 0; i < 5; i++) {
        const tag = await tagRepo.create({
            name: faker.word.adjective()
        })

        await tagRepo.save(tag)
        
    }
    console.log('✅ Seeded tags');
}