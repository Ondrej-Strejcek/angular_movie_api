import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-btn',
  templateUrl: './circle-btn.component.html',
  styleUrls: ['./circle-btn.component.css']
})
export class CircleBtnComponent implements OnInit {
  @Input() icon; 

  constructor() { }

  ngOnInit(): void {
  }

}
