import { Component } from '@angular/core';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})


export class InsertFormComponent {

  private isShow : boolean = false;

  constructor() {
    this.isShow
  }

  
  
  public getIsShow() : boolean {
    return this.isShow;
  }
  

  setIsShow(isShow : boolean) {
    this.isShow = isShow;
  }
  
  
}
