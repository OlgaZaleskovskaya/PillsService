import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {UserInfoService} from '../../../shared/userInfo.service';
import {Child} from '../../../shared/child.model';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': '#B48650',
        'height': '30px',
        'box-shadow': ' 2px 4px 8px -1px rgba(0,0,0,0.1), inset 1px 1px 8px -1px rgba(255,252,255,0.5)',
        'z-index': '0'
      })),
      state('opened', style({
        'background-color': '#B0954E',
        'height': '200px',
        'box-shadow': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        'z-index': '2'
      })),
      transition('normal <=> opened', animate(500))
    ])
  ]
})
export class ChildrenComponent implements OnInit {
  private appear: boolean;
  state: string[] = [];

  public children: Child[];

  constructor( private userService: UserInfoService) {
this.children = userService.getChildren();
  }

  ngOnInit() {
    for (const i of this.children) {
      this.state.push('normal');
    }
    this.appear = true;
  }


  onAnimate(i: number) {
    this.closeAnimated();
    this.state[i] = this.state[i] === 'normal' ? 'opened' : 'normal';
  }

  closeAnimated() {
    let k = 0;
    for (k; k < this.children.length; k++) {
      this.state[k] = 'normal';
    }
  }
}
