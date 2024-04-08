import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoggerService } from '../coreServices/logger.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
      
  }
}
