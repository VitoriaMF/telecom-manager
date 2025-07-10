import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButton,
    MatSidenavModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar { }