import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateServiceTypeTable1720962593848  implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'service_type',
              columns: [
                {
                  name: 'id',
                  type: 'char',
                  length: '36',
                  isPrimary: true,
                  isUnique: true,
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
