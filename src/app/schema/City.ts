import { Entity, PrimaryColumn, Column} from "typeorm"
import { v4 as uuid } from "uuid"
@Entity("Cities")
export class City {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    state: string;

constructor() {
    if(!this.id) {
        this.id = uuid()
    }

}


}