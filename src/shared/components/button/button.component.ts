import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface IconInterface {
  name: string;
  color?: string;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  width: string = 'auto';
  @Input()
  text: string = "TEXTO";
  @Input()
  type: 'outline' | 'normal' = 'normal';
  @Input()
  rightIcon?: IconInterface;
  @Input()
  leftIcon?: IconInterface;
  @Output()
  clickEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickEventEmit() {
    this.clickEvent.emit(true);
  }

}
