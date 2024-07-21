import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateServiceTable1720978012145 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'service',
            columns: [
                {
                    name: 'id',
                    type: 'char',
                    length: '36',
                    isPrimary: true,
                    isUnique: true,
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'price',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                    isNullable: true,
                },
                {
                    name: 'deliveryTime',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'description',
                    type: 'text',
                    isNullable: false,
                },
                {
                    name: 'location',
                    type: 'char',
                    length: '36',
                    isNullable: true,
                },
                {
                    name: 'serviceType',
                    type: 'char',
                    length: '36',
                    isNullable: false,
                },
                {
                    name: 'paymentMethods',
                    type: 'char',
                    length: '36',
                    isNullable: false,
                },
            ],
        }));

        // Adicionar chaves estrangeiras
        await queryRunner.createForeignKey('service', new TableForeignKey({
            name: 'FK_service_location',
            columnNames: ['location'],
            referencedColumnNames: ['id'],
            referencedTableName: 'location',
            onDelete: 'CASCADE',
        }));

        await queryRunner.createForeignKey('service', new TableForeignKey({
            name: 'FK_service_serviceType',
            columnNames: ['serviceType'],
            referencedColumnNames: ['id'],
            referencedTableName: 'service_type',
            onDelete: 'CASCADE',
        }));

        await queryRunner.createForeignKey('service', new TableForeignKey({
            name: 'FK_service_paymentMethods',
            columnNames: ['paymentMethods'],
            referencedColumnNames: ['id'],
            referencedTableName: 'payment_methods',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('service', 'FK_service_location');
        await queryRunner.dropForeignKey('service', 'FK_service_serviceType');
        await queryRunner.dropForeignKey('service', 'FK_service_paymentMethods');

        await queryRunner.dropTable('service');
    }

}
