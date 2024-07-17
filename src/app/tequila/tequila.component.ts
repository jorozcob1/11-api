import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TequilaService } from '../services/tequila.service';

@Component({
  selector: 'app-tequila',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [TequilaService],
  templateUrl: './tequila.component.html',
  styleUrl: './tequila.component.css',
})
export class TequilaComponent implements OnInit {
  data: any[] = [];
  selectedDrink: any = null;

  constructor(private tequilaService: TequilaService) {}

  ngOnInit(): void {
    this.tequilaService.obtenerTequila().subscribe((datos) => {
      this.data = datos.drinks;
    });
  }

  verDetalles(drink: any): void {
    this.selectedDrink = drink;
  }
}
