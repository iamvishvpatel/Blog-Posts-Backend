import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1752571237579 implements MigrationInterface {
    name = 'InitSchema1752571237579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "content" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "content"`);
    }

}
