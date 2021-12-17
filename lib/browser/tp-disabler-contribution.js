"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TpDisablerMenuContribution = exports.TpDisablerCommandContribution = exports.TpDisablerCommand = void 0;
var inversify_1 = require("inversify");
exports.TpDisablerCommand = {
    id: 'TpDisabler.command',
    label: "Say Hello"
};
var TpDisablerCommandContribution = /** @class */ (function () {
    function TpDisablerCommandContribution(
    // @inject(MessageService) private readonly messageService: MessageService,
    ) {
    }
    TpDisablerCommandContribution.prototype.registerCommands = function (registry) {
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
    };
    TpDisablerCommandContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], TpDisablerCommandContribution);
    return TpDisablerCommandContribution;
}());
exports.TpDisablerCommandContribution = TpDisablerCommandContribution;
var TpDisablerMenuContribution = /** @class */ (function () {
    function TpDisablerMenuContribution() {
    }
    TpDisablerMenuContribution.prototype.registerMenus = function (menus) {
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
    };
    TpDisablerMenuContribution = __decorate([
        inversify_1.injectable()
    ], TpDisablerMenuContribution);
    return TpDisablerMenuContribution;
}());
exports.TpDisablerMenuContribution = TpDisablerMenuContribution;
//# sourceMappingURL=tp-disabler-contribution.js.map