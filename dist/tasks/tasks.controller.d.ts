import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): import("@prisma/client").Prisma.Prisma__TaskClient<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        id: number;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateTaskDto: UpdateTaskDto): import("@prisma/client").Prisma.Prisma__TaskClient<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__TaskClient<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
}
