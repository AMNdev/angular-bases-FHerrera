import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output()
  onDeletedCharacter: EventEmitter<string> = new EventEmitter()


  @Input()
  public characterList: Character[] = [];

  onDelete(id: string): void {
    // console.log('emitting', id)

    this.onDeletedCharacter.emit(id)
  }

}
