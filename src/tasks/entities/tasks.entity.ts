import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class TasksEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({length: 1000})
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}