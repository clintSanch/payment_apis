import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoggerService } from '../coreServices/logger.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  constructor(private loggerService: LoggerService){}

  ngOnInit(): void {
      
  }

}
