import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePublicationTypeTable1721577946552 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'publication_type',
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
                {
                  name: 'description',
                  type: 'varchar',
                  isNullable: true
                },
              ],
            })
          )
        }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('publication_type');
    }

}
