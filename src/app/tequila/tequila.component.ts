import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TequilaService } from '../services/tequila.service';

@Component({
  selector: 'app-tequila',
  standalone: true,
  imports: [HttpClientModule],
  providers: [TequilaService],
  templateUrl: './tequila.component.html',
  styleUrl: './tequila.component.css',
})
export class TequilaComponent {
  data: any[] = [];
  constructor(private tequilaService: TequilaService) {}

  ngOnInit(): void {
    this.tequilaService.obtenerTequila().subscribe((datos) => {
      this.data = datos.drinks;
    });
  }
}
