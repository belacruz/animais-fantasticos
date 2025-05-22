import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(menus, events) {
    this.dropdownMenus = document.querySelectorAll(menus);

    if (events === undefined) {
      this.eventOptions = ["touchstart", "click"];
    } else {
      this.eventOptions = events;
    }

    this.activeClass = "active";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const eventElement = event.currentTarget;
    eventElement.classList.add(this.activeClass);
    outsideClick(eventElement, this.eventOptions, () => {
      eventElement.classList.remove(this.activeClass);
    });
  }

  addDropDownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.eventOptions.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenusEvent();
    }
    return this;
  }
}
