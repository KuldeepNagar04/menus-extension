/**
 * Generated using theia-extension-generator
 */
import { SampleCommandContribution, SampleMenuContribution } from './menu-assessment-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";
import { SampleMenuContribution1, SampleCommandContribution1 } from './menu-assessment-menu-contribution';
import { TpDisablerCommandContribution, TpDisablerMenuContribution } from './tp-disabler-contribution';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(SampleCommandContribution);
    bind(CommandContribution).to(SampleCommandContribution1);
    bind(CommandContribution).to(TpDisablerCommandContribution);
    bind(MenuContribution).to(SampleMenuContribution);
    bind(MenuContribution).to(SampleMenuContribution1);
    bind(MenuContribution).to(TpDisablerMenuContribution);
});
