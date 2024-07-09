import { CreateRolesDto } from './dto/create-roles.dto';
import { PageOptionsRoleDto } from './dto/page-options-role.dto';
import { UpdateRolesDto } from './dto/update-roles.dto';
import { RolesService } from './roles.service';
import { PageOptionsMenuDto } from './dto/page-options-menu.dto';
export declare class RolesController {
    private readonly roleService;
    constructor(roleService: RolesService);
    create(data: CreateRolesDto): Promise<import(".prisma/client").roles>;
    findAll(pageOptionsDto: PageOptionsRoleDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").roles>>;
    findAllMenu(pageOptionsDto: PageOptionsMenuDto): Promise<import("../decorators/page.dto").PageDto<import(".prisma/client").menu & {
        parent: import(".prisma/client").menu;
        childrens: import(".prisma/client").menu[];
    }>>;
    findOne(id: string): Promise<import(".prisma/client").roles & {
        menu_roles: (import(".prisma/client").menu_role & {
            menu: import(".prisma/client").menu;
        })[];
    }>;
    findMenuPermission(id: string): Promise<import(".prisma/client").roles & {
        menu_roles: (import(".prisma/client").menu_role & {
            menu: import(".prisma/client").menu & {
                childrens: import(".prisma/client").menu[];
                menu_actions: import(".prisma/client").menu_action[];
            };
        })[];
    }>;
    update(id: string, data: UpdateRolesDto): Promise<import(".prisma/client").roles>;
    remove(id: string): Promise<any>;
}
