import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ElementForCompare} from "../../Model/element-for-compare";
import {SentencesHttpService} from "../../httpServices/sentences-http.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-element-orderator',
  templateUrl: './element-orderator.component.html',
  styleUrls: ['./element-orderator.component.css']
})
export class ElementOrderatorComponent {

  @Input('elementForOrder') elementForOrder: string[];
  outcom: string;

  order: string[];
  timePeriods: string[];
  position = 0;

  constructor(private sentencesHttpService: SentencesHttpService) {
    this.loadELementForOrderExercices();
  }

  private loadELementForOrderExercices() {
    this.sentencesHttpService.getAll()
      .pipe(
        tap((elements) => {
            this.order = elements[this.position].pronunciation.split(' ');
            this.timePeriods = elements[this.position].pronunciation.split(' ');
          },
        )).subscribe();
  }

  nextElement(): void{
    this.position++;
    this.loadELementForOrderExercices();
  }

  beforeElement(): void {
    this.position--;
    this.loadELementForOrderExercices();
  }

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

  checkAndSetOutcom(): void{
    this.checkOrderForAllPosition() ? this.outcom = 'Dobrze' : this.outcom = 'Zle';
  }

}
