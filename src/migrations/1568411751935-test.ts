import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Test1568411751935 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        columns: [
          {
            isPrimary: true,
            name: 'id',
            type: 'varchar',
          },
          {
            name: 'userName',
            type: 'varchar',
          },
        ],
        name: 'accounts',
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('accounts');
  }
}
