import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-element-orderator',
  templateUrl: './element-orderator.component.html',
  styleUrls: ['./element-orderator.component.css']
})
export class ElementOrderatorComponent {

  outcom: string;

  order = [
    '1',
    '2',
    '3',
    '4',
    '5'
  ];

  timePeriods = [
    '1',
    '2',
    '3',
    '4',
    '5'
  ];

  constructor() { }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

  checkOrderForOnePosition(position: number): boolean {
    return this.order[position] === this.timePeriods[position];
  }

  checkOrderForAllPosition(): boolean{
    for (let i = 1; i < this.order.length + 1; i++){
      if (!this.checkOrderForOnePosition(i)){
        return false;
      }
    }
    return true;
  }

  setOutcom(): void{
    this.checkOrderForAllPosition() ? this.outcom = 'Dobrze' : this.outcom = 'Zle';
  }

}
