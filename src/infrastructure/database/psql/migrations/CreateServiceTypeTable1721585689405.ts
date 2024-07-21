import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateServiceTypeTable1721585689405  implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'service_type',
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
        await queryRunner.dropTable('service_type');
    }

}
