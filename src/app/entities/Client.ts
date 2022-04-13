import { Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('client')
export class Client {
    @PrimaryColumn()
      id: string;

    @Column()
      fullname: string;

    @Column()
      gender: string;

    @Column()
      birthdate: string;

    @Column()
      age: number;

    @Column()
      city: string;

    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
}
