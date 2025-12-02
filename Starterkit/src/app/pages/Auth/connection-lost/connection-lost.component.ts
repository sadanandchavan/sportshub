import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-connection-lost',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './connection-lost.component.html',
  styleUrl: './connection-lost.component.css',
})
export class ConnectionLostComponent {}
