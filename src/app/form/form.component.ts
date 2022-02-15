import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Search } from '../search';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
@Output () userSearch = new EventEmitter<any>();
query = new Search("")
submitSearch(){
  this.userSearch.emit(this.query)
  this.query = new Search("")
}
  constructor() { }

  ngOnInit(): void {
  }

}
