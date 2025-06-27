import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1751013744830 implements MigrationInterface {
    name = 'InitSchema1751013744830'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "updatedById" integer`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_c12e1d25fd3b363847b5b9054c3" FOREIGN KEY ("updatedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_c12e1d25fd3b363847b5b9054c3"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "updatedById"`);
    }

}
