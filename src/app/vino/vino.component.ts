import { Component } from '@angular/core';
import { VinoService } from '../services/vino.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vino',
  standalone: true,
  imports: [HttpClientModule],
  providers: [VinoService],
  templateUrl: './vino.component.html',
  styleUrl: './vino.component.css',
})
export class VinoComponent {
  data: any[] = [];
  constructor(private vinoService: VinoService) {}
  ngOnInit(): void {
    this.vinoService.obtenerVino().subscribe((datos) => {
      this.data = datos.drinks;
    });
  }
}
