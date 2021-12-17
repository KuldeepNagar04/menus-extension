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
exports.SampleMenuContribution1 = exports.SampleCommandContribution1 = void 0;
var common_1 = require("@theia/core/lib/common");
var inversify_1 = require("inversify");
var quick_open_task_1 = require("@theia/task/lib/browser/quick-open-task");
var task_service_1 = require("@theia/task/lib/browser/task-service");
var common_2 = require("@theia/core/lib/common");
var SampleCommand3 = {
    id: 'sample-command3',
    label: 'Confirm Submit'
};
var SampleCommandContribution1 = /** @class */ (function () {
    function SampleCommandContribution1() {
    }
    SampleCommandContribution1.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(SampleCommand3, {
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var token = _this.taskService.startUserAction();
                _this.taskService.runTaskByLabel(token, 'Confirm Submit').then(function (e) {
                    // window.setTimeout(()=>{this.commandService.executeCommand('browser-preview.openPreview', 'file:////home/handson/To_Trainee/QP/submissionSuccess.html')},60000);
                }, function () {
                    alert("Failed");
                });
            }
        });
    };
    SampleCommandContribution1.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this.quickOpenTask);
    };
    __decorate([
        inversify_1.inject(quick_open_task_1.QuickOpenTask),
        __metadata("design:type", quick_open_task_1.QuickOpenTask)
    ], SampleCommandContribution1.prototype, "quickOpenTask", void 0);
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], SampleCommandContribution1.prototype, "taskService", void 0);
    __decorate([
        inversify_1.inject(common_2.CommandService),
        __metadata("design:type", Object)
    ], SampleCommandContribution1.prototype, "commandService", void 0);
    SampleCommandContribution1 = __decorate([
        inversify_1.injectable()
    ], SampleCommandContribution1);
    return SampleCommandContribution1;
}());
exports.SampleCommandContribution1 = SampleCommandContribution1;
var SampleMenuContribution1 = /** @class */ (function () {
    function SampleMenuContribution1() {
    }
    SampleMenuContribution1.prototype.registerMenus = function (menus) {
        var subMenuPath = __spreadArray(__spreadArray([], __read(common_1.MAIN_MENU_BAR)), ['sample-menu1']);
        menus.registerSubmenu(subMenuPath, 'Submit', {
            order: '2' // that should put the menu right next to the File menu
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: SampleCommand3.id,
            order: '0'
        });
    };
    SampleMenuContribution1 = __decorate([
        inversify_1.injectable()
    ], SampleMenuContribution1);
    return SampleMenuContribution1;
}());
exports.SampleMenuContribution1 = SampleMenuContribution1;
//# sourceMappingURL=menu-assessment-menu-contribution.js.map