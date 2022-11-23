import easySetup from "easy-toggler";
import { initTabs } from "./modules/init-tabs.js";
import { initAccordion } from "./initAccordion.js";
import { initHeader } from "./modules/initHeader.js";

window.addEventListener("DOMContentLoaded", () => {
  // EasyToggler: https://github.com/rah-emil/easy-toggler
  easySetup({
    // html attrs
    toggle: "easy-toggle",
    add: "easy-add",
    remove: "easy-remove",
    class: "easy-class",
    rcoe: "easy-rcoe",
    parallel: "easy-parallel",
    self: "easy-self",
    selfRcoe: "easy-self-rcoe",

    // Hooks
    onToggle($el) {},
    onAdd($el) {},
    onRemove($el) {},
    onRcoe($el) {},
  });

  window.addEventListener("load", () => {
    initAccordion();
    initTabs();
    initHeader();
  });
});
