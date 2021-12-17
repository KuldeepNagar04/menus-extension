import { injectable } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";

export const TpDisablerCommand = {
    id: 'TpDisabler.command',
    label: "Say Hello"
};

@injectable()
export class TpDisablerCommandContribution implements CommandContribution {

    constructor(
        // @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        // registry.registerCommand(TpDisablerCommand, {
        //     execute: () => this.messageService.info('Hello World!')
        // });


        // Download Commands
        registry.unregisterCommand('file.download');
        registry.unregisterCommand('file.copyDownloadLink');

        // Upload Commands
        registry.unregisterCommand('file.upload');
        
        // Workspace Commands
        registry.unregisterCommand('workspace:close');
        registry.unregisterCommand('workspace:open');
        registry.unregisterCommand('workspace:openFile');
        registry.unregisterCommand('workspace:openFolder');
        registry.unregisterCommand('workspace:openWorkspace');
        registry.unregisterCommand('workspace:openRecent');
        registry.unregisterCommand('workspace:saveAs');
        registry.unregisterCommand('workspace:removeFolder');
        registry.unregisterCommand('workspace:addFolder');

    }
}

@injectable()
export class TpDisablerMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        // menus.registerMenuAction(CommonMenus.EDIT_FIND, {
        //     commandId: TpDisablerCommand.id,
        //     label: TpDisablerCommand.label
        // });

        // Download Menus
        menus.unregisterMenuNode('file.download');
        menus.unregisterMenuNode('file.copyDownloadLink');

        // Workspace Menus
        menus.unregisterMenuNode('workspace:close');
        menus.unregisterMenuNode('workspace:open');
        menus.unregisterMenuNode('workspace:openFile');
        menus.unregisterMenuNode('workspace:openFolder');
        menus.unregisterMenuNode('workspace:openWorkspace');
        menus.unregisterMenuNode('workspace:openRecent');
        menus.unregisterMenuNode('workspace:saveAs');
        menus.unregisterMenuNode('workspace:removeFolder');
        menus.unregisterMenuNode('workspace:addFolder');
    }
}


