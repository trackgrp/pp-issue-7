import { Component, OnInit } from '@angular/core'
import * as _ from 'lodash'
import { SelectedIndexChangedEventData, ValueList } from '@proplugins/nativescript-drop-down'

@Component({
  selector: 'my-app',
  templateUrl: './login.html',
})
export class LoginComponent implements OnInit {
  public ngOnInit(): void {
    this.items = new ValueList<string>();
    for (let loop = 0; loop < 200; loop++) {
      this.items.push({
        value: `I${loop}`,
        display: `Item ${loop}`,
      });
    }
  }

  public selectedIndex: number = null;
  public hint = "My Hint";
  public items: ValueList<string>;
  public cssClass: string = "default";

  public onchange(args: SelectedIndexChangedEventData) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}. New value is "${this.items.getValue(
      args.newIndex)}"`);
  }

  public onopen() {
    console.log("Drop Down opened.");
  }

  public onclose() {
    console.log("Drop Down closed.");
  }

  public changeStyles() {
    this.cssClass = "changed-styles";
  }
}
