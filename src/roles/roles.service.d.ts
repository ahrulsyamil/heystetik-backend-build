import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageOptionsRoleDto } from './dto/page-options-role.dto';
import { PageOptionsMenuDto } from './dto/page-options-menu.dto';
export declare class RolesService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: Prisma.rolesUncheckedCreateInput): Promise<import(".prisma/client").roles>;
    findAll(pageOptionsDto: PageOptionsRoleDto): Promise<PageDto<import(".prisma/client").roles>>;
    findOne(id: number): Promise<import(".prisma/client").roles & {
        menu_roles: (import(".prisma/client").menu_role & {
            menu: import(".prisma/client").menu;
        })[];
    }>;
    findRoleWithMenuAction(id: number): Promise<import(".prisma/client").roles & {
        menu_roles: (import(".prisma/client").menu_role & {
            menu: import(".prisma/client").menu & {
                childrens: import(".prisma/client").menu[];
                menu_actions: import(".prisma/client").menu_action[];
            };
        })[];
    }>;
    findBy(where: Prisma.rolesWhereInput): Promise<import(".prisma/client").roles>;
    update(id: number, data: Prisma.rolesUpdateInput): Promise<import(".prisma/client").roles>;
    delete(id: number): Promise<import(".prisma/client").roles>;
    findAllMenu(pageOptionsDto: PageOptionsMenuDto): Promise<PageDto<import(".prisma/client").menu & {
        parent: import(".prisma/client").menu;
        childrens: import(".prisma/client").menu[];
    }>>;
    findAllMenuBy(where: Prisma.menuWhereInput): Promise<import(".prisma/client").menu[]>;
}
