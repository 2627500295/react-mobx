import { observable, action } from "mobx";

export class MenuStore {
  @observable
  selected: number = 0;

  @action
  switch(selected: number) {
    this.selected = selected;
  }
}
