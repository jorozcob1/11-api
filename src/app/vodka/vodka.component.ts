import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { VodkaService } from '../services/vodka.service';

@Component({
  selector: 'app-vodka',
  standalone: true,
  imports: [HttpClientModule],
  providers: [VodkaService],
  templateUrl: './vodka.component.html',
  styleUrl: './vodka.component.css',
})
export class VodkaComponent {
  data: any[] = [];
  constructor(private vodkaService: VodkaService) {}

  ngOnInit(): void {
    this.vodkaService.obtenerVodka().subscribe((datos) => {
      this.data = datos.drinks;
    });
  }
}
