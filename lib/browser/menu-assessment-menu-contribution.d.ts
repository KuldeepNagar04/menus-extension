import { CommandRegistry, CommandContribution, MenuContribution, MenuModelRegistry } from '@theia/core/lib/common';
import { QuickOpenHandlerRegistry } from '@theia/core/lib/browser';
import { QuickOpenTask } from '@theia/task/lib/browser/quick-open-task';
import { TaskService } from '@theia/task/lib/browser/task-service';
import { CommandService } from '@theia/core/lib/common';
export declare class SampleCommandContribution1 implements CommandContribution {
    protected readonly quickOpenTask: QuickOpenTask;
    protected readonly taskService: TaskService;
    protected readonly commandService: CommandService;
    registerCommands(commands: CommandRegistry): void;
    registerQuickOpenHandlers(handlers: QuickOpenHandlerRegistry): void;
}
export declare class SampleMenuContribution1 implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=menu-assessment-menu-contribution.d.ts.map