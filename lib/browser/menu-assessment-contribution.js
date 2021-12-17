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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleMenuContribution = exports.SampleCommandContribution = void 0;
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var task_service_1 = require("@theia/task/lib/browser/task-service");
var quick_open_task_1 = require("@theia/task/lib/browser/quick-open-task");
var common_2 = require("@theia/core/lib/common");
var SampleCommand = {
    id: 'sample-command',
    label: 'Run VTool'
};
var SampleCommand1 = {
    id: 'sample-command1',
    label: 'Run Application'
};
var SampleCommand2 = {
    id: 'sample-command2',
    label: 'Run JUnit'
};
var SampleCommand4 = {
    id: 'sample-command4',
    label: 'Open QP'
};
var SampleCommandContribution = /** @class */ (function () {
    function SampleCommandContribution() {
    }
    SampleCommandContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(SampleCommand, {
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var token = _this.taskService.startUserAction();
                _this.taskService.runTaskByLabel(token, 'Run verificationTool').then(function () {
                    window.setTimeout(function () { _this.commandService.executeCommand('browser-preview.openPreview', 'http://localhost:1357/VerificationTool/'); }, 5000);
                });
            }
        });
        commands.registerCommand(SampleCommand1, {
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var token = _this.taskService.startUserAction();
                _this.taskService.runTaskByLabel(token, 'Run Scripts');
            }
        });
        commands.registerCommand(SampleCommand2, {
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var token = _this.taskService.startUserAction();
                _this.taskService.runTaskByLabel(token, 'Run Junit Test');
            }
        });
        commands.registerCommand(SampleCommand4, {
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.commandService.executeCommand('browser-preview.openPreview', 'file:////home/handson/To_Trainee/QP/index.html');
            }
        });
    };
    SampleCommandContribution.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this.quickOpenTask);
    };
    __decorate([
        inversify_1.inject(quick_open_task_1.QuickOpenTask),
        __metadata("design:type", quick_open_task_1.QuickOpenTask)
    ], SampleCommandContribution.prototype, "quickOpenTask", void 0);
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], SampleCommandContribution.prototype, "taskService", void 0);
    __decorate([
        inversify_1.inject(common_2.CommandService),
        __metadata("design:type", Object)
    ], SampleCommandContribution.prototype, "commandService", void 0);
    SampleCommandContribution = __decorate([
        inversify_1.injectable()
    ], SampleCommandContribution);
    return SampleCommandContribution;
}());
exports.SampleCommandContribution = SampleCommandContribution;
var SampleMenuContribution = /** @class */ (function () {
    function SampleMenuContribution() {
    }
    SampleMenuContribution.prototype.registerMenus = function (menus) {
        var subMenuPath = __spreadArray(__spreadArray([], __read(common_1.MAIN_MENU_BAR)), ['sample-menu']);
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
    };
    SampleMenuContribution = __decorate([
        inversify_1.injectable()
    ], SampleMenuContribution);
    return SampleMenuContribution;
}());
exports.SampleMenuContribution = SampleMenuContribution;
//# sourceMappingURL=menu-assessment-contribution.js.map