import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateServiceTable1721585971002 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'service',
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
                    name: 'local',
                    type: 'uuid',
                    isNullable: true,
                },
                {
                    name: 'service_type',
                    type: 'uuid',
                    isNullable: false,
                },
                {
                    name: 'payment_methods',
                    type: 'uuid',
                    isNullable: false,
                },
                {
                    name: 'publication_type',
                    type: 'uuid',
                    isNullable: false,
                },
            ],
        }));

        // Add foreign keys
        await queryRunner.createForeignKey('service', new TableForeignKey({
            name: 'id_service_local',
            columnNames: ['local'],
            referencedColumnNames: ['id'],
            referencedTableName: 'local',
            onDelete: 'CASCADE',
        }));

        await queryRunner.createForeignKey('service', new TableForeignKey({
            name: 'id_service_service_type',
            columnNames: ['service_type'],
            referencedColumnNames: ['id'],
            referencedTableName: 'service_type',
            onDelete: 'CASCADE',
        }));

        await queryRunner.createForeignKey('service', new TableForeignKey({
            name: 'id_service_payment_methods',
            columnNames: ['payment_methods'],
            referencedColumnNames: ['id'],
            referencedTableName: 'payment_methods',
            onDelete: 'CASCADE',
        }));

        await queryRunner.createForeignKey('service', new TableForeignKey({
            name: 'id_service_publication_type',
            columnNames: ['publication_type'],
            referencedColumnNames: ['id'],
            referencedTableName: 'publication_type',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('service', 'id_service_local');
        await queryRunner.dropForeignKey('service', 'id_service_service_type');
        await queryRunner.dropForeignKey('service', 'id_service_payment_methods');
        await queryRunner.dropForeignKey('service', 'id_service_publication_type');

        await queryRunner.dropTable('service');
    }

}
