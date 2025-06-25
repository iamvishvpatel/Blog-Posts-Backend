import { Injectable } from "@nestjs/common";
import { BaseRepo } from "src/shared";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { PinoLogger } from "nestjs-pino";
import { Category } from "../entities/category.entity";
import { CategoryMainDto } from "../dto/category-main.dto";


@Injectable()
export class CategoryRepo extends BaseRepo<Category, CategoryMainDto, number>{
    constructor(
    @InjectRepository(Category) private readonly categoryRepo: Repository<Category>,
    @InjectMapper() private readonly classMapper: Mapper,
    protected readonly logger: PinoLogger ,
  ) {
    super(categoryRepo, classMapper, logger, Category, CategoryMainDto);
  }
}