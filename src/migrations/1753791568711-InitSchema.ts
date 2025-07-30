import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1753791568711 implements MigrationInterface {
    name = 'InitSchema1753791568711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "postId"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "postId" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "postId"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "postId" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
