import { inject, injectable } from "inversify";
import { Command, CommandContribution, CommandRegistry,MAIN_MENU_BAR, MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";
import { TaskService } from '@theia/task/lib/browser/task-service';
import { QuickOpenHandlerRegistry } from '@theia/core/lib/browser';
import { QuickOpenTask } from '@theia/task/lib/browser/quick-open-task';
import { CommandService } from '@theia/core/lib/common';

const SampleCommand: Command = {
    id: 'sample-command',
    label: 'Run VTool'
};

const SampleCommand1: Command = {
    id: 'sample-command1',
    label: 'Run Application'
};

const SampleCommand2: Command = {
    id: 'sample-command2',
    label: 'Run JUnit'
};

const SampleCommand4: Command = {
    id: 'sample-command4',
    label: 'Open QP'
};

@injectable()
export class SampleCommandContribution implements CommandContribution {

    @inject(QuickOpenTask)
    protected readonly quickOpenTask: QuickOpenTask;

    @inject(TaskService)
    protected readonly taskService: TaskService;

    @inject(CommandService)
    protected readonly commandService: CommandService;

    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(SampleCommand, {
            execute: (...args: string[]) => {
                const token: number = this.taskService.startUserAction();
                this.taskService.runTaskByLabel(token, 'Run verificationTool').then(()=>{
                    window.setTimeout(()=>{this.commandService.executeCommand('browser-preview.openPreview', 'http://localhost:1357/VerificationTool/')},5000)
                    
                });
            }
        });

        commands.registerCommand(SampleCommand1, {
            execute: (...args: string[]) => {
                const token: number = this.taskService.startUserAction();
                this.taskService.runTaskByLabel(token, 'Run Scripts');
            }
        });

        commands.registerCommand(SampleCommand2, {
            execute: (...args: string[]) => {
                const token: number = this.taskService.startUserAction();
                this.taskService.runTaskByLabel(token, 'Run Junit Test');
            }
        });

        commands.registerCommand(SampleCommand4, {
            execute: (...args: string[]) => {
                this.commandService.executeCommand('browser-preview.openPreview', 'file:////home/handson/To_Trainee/QP/index.html');
            }
        });
    }

    registerQuickOpenHandlers(handlers: QuickOpenHandlerRegistry): void {
        handlers.registerHandler(this.quickOpenTask);
    }

}

@injectable()
export class SampleMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        const subMenuPath = [...MAIN_MENU_BAR, 'sample-menu'];
        menus.registerSubmenu(subMenuPath, 'AssesmentTools', {
            order: '2' // that should put the menu right next to the File menu
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: SampleCommand.id,
            order: '1'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: SampleCommand1.id,
            order: '2'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: SampleCommand2.id,
            order: '3'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: SampleCommand4.id,
            order: '0'
        });
    }

}

