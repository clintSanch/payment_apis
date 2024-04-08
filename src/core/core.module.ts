import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }

/**
 * providing essential services, components, and configurations that are used throughout the application.
 * It serves as a central module for core functionality that is shared across multiple feature modules.
 * The Core Module is typically responsible for handling authentication, API services, error handling, logging, and other common functionalities required by the application.
 * This includes services like authentication service, data service, and logging service
 */