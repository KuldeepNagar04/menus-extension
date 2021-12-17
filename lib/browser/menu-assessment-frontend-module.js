"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
var menu_assessment_contribution_1 = require("./menu-assessment-contribution");
var common_1 = require("@theia/core/lib/common");
var inversify_1 = require("inversify");
var menu_assessment_menu_contribution_1 = require("./menu-assessment-menu-contribution");
var tp_disabler_contribution_1 = require("./tp-disabler-contribution");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(menu_assessment_contribution_1.SampleCommandContribution);
    bind(common_1.CommandContribution).to(menu_assessment_menu_contribution_1.SampleCommandContribution1);
    bind(common_1.CommandContribution).to(tp_disabler_contribution_1.TpDisablerCommandContribution);
    bind(common_1.MenuContribution).to(menu_assessment_contribution_1.SampleMenuContribution);
    bind(common_1.MenuContribution).to(menu_assessment_menu_contribution_1.SampleMenuContribution1);
    bind(common_1.MenuContribution).to(tp_disabler_contribution_1.TpDisablerMenuContribution);
});
//# sourceMappingURL=menu-assessment-frontend-module.js.map