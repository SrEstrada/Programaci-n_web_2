import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, User],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
