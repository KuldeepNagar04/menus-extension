import { Command, CommandRegistry, CommandContribution, MAIN_MENU_BAR, MenuContribution, MenuModelRegistry } from '@theia/core/lib/common';
import { inject, injectable } from 'inversify';
import { QuickOpenHandlerRegistry } from '@theia/core/lib/browser';
import { QuickOpenTask } from '@theia/task/lib/browser/quick-open-task';
import { TaskService } from '@theia/task/lib/browser/task-service';
import { CommandService } from '@theia/core/lib/common';

const SampleCommand3: Command = {
    id: 'sample-command3',
    label: 'Confirm Submit'
};

@injectable()
export class SampleCommandContribution1 implements CommandContribution {

    @inject(QuickOpenTask)
    protected readonly quickOpenTask: QuickOpenTask;

    @inject(TaskService)
    protected readonly taskService: TaskService;

    @inject(CommandService)
    protected readonly commandService: CommandService;

    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(SampleCommand3, {
            execute: (...args: string[]) => {
                const token: number = this.taskService.startUserAction();
                this.taskService.runTaskByLabel(token, 'Confirm Submit').then((e) => {
                    // window.setTimeout(()=>{this.commandService.executeCommand('browser-preview.openPreview', 'file:////home/handson/To_Trainee/QP/submissionSuccess.html')},60000);
                },
                    () => {
                        alert("Failed");
                    });
            }
        });
    }

    registerQuickOpenHandlers(handlers: QuickOpenHandlerRegistry): void {
        handlers.registerHandler(this.quickOpenTask);
    }

}

@injectable()
export class SampleMenuContribution1 implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        const subMenuPath = [...MAIN_MENU_BAR, 'sample-menu1'];
        menus.registerSubmenu(subMenuPath, 'Submit', {
            order: '2' // that should put the menu right next to the File menu
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: SampleCommand3.id,
            order: '0'
        });
    }

}