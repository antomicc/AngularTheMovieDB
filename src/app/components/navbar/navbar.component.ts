import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroHomeSolid, heroStarSolid, heroUserCircleSolid } from '@ng-icons/heroicons/solid'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent, RouterLink],
  viewProviders: [provideIcons({ heroHomeSolid, heroStarSolid, heroUserCircleSolid })],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
