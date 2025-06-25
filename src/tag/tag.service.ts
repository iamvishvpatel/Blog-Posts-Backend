import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { TagRepo } from './repositories/tag.repo';
import { TagMainDto } from './dto/tag-main.dto';

@Injectable()
export class TagService {
  constructor( private readonly tagrepo: TagRepo){}
  create(createTagDto: CreateTagDto) {
    return 'This action adds a new tag';
  }

  findAll() {
    return `This action returns all tag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }

  async getById(id: number): Promise<TagMainDto> {
        return this.tagrepo.getAsync(id);
  }
}
