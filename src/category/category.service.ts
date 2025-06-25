import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepo } from './repositories/category.repo';
import { CategoryMainDto } from './dto/category-main.dto';

@Injectable()
export class CategoryService {
  constructor( private readonly categoryRepo: CategoryRepo){}
  
  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }

  async getById(id: number): Promise<CategoryMainDto> {
        return this.categoryRepo.getAsync(id);
  }
}
