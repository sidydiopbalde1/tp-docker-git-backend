import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaPg } from '@prisma/adapter-pg';
export declare class TasksService {
    private prisma;
    create(createTaskDto: CreateTaskDto): import("@prisma/client").Prisma.Prisma__TaskClient<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: PrismaPg;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        id: number;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateTaskDto: UpdateTaskDto): import("@prisma/client").Prisma.Prisma__TaskClient<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: PrismaPg;
    }>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__TaskClient<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: PrismaPg;
    }>;
}
