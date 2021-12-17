import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";
export declare const TpDisablerCommand: {
    id: string;
    label: string;
};
export declare class TpDisablerCommandContribution implements CommandContribution {
    constructor();
    registerCommands(registry: CommandRegistry): void;
}
export declare class TpDisablerMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=tp-disabler-contribution.d.ts.map