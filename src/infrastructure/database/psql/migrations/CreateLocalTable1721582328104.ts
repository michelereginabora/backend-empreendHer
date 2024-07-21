import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLocalTable1721582328104 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'local',
                columns: [
                    {
                      name: 'id',
                      type: 'uuid',
                      isPrimary: true,
                      isUnique: true,
                      generationStrategy: 'uuid',
                      default: 'uuid_generate_v4()',
                    },
                    {
                      name: 'name',
                      type: 'varchar',
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('local');
    }

}
