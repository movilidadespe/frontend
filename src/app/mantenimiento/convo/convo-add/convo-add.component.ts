import { Component, OnInit } from '@angular/core';
import { Convoca } from 'app/convocatoria';
import { CrearService } from 'app/service/crear.service';

@Component({
  selector: 'app-convo-add',
  templateUrl: './convo-add.component.html',
  styleUrls: ['./convo-add.component.scss']
})
export class ConvoAddComponent implements OnInit {
  convocatoria: Convoca= new Convoca();
  submitted = false;

  constructor(private CrearService: CrearService) { }

  ngOnInit() {
  }

  nuevo(): void {
    this.submitted = false;
    this.convocatoria = new Convoca();
  }


  save() {
    this.CrearService.create(this.convocatoria)
      .subscribe(data => console.log(data), error => console.log(error));
    this.convocatoria = new Convoca();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
