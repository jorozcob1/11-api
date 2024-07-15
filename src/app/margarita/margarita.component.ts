import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MargaritaService } from '../services/margarita.service';

@Component({
  selector: 'app-margarita',
  standalone: true,
  imports: [HttpClientModule],
  providers: [MargaritaService],
  templateUrl: './margarita.component.html',
  styleUrl: './margarita.component.css',
})
export class MargaritaComponent {
  data: any[] = [];
  constructor(private margaritaService: MargaritaService) {}
  ngOnInit(): void {
    this.margaritaService.obtenerMargarita().subscribe((datos) => {
      this.data = datos.drinks;
    });
  }
}
