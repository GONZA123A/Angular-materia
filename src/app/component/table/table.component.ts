import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "MISIÓN", name: "Somos una empresa, dedicada a mejorar la calidad de vida de las personas desde la ejecución de aplicaciones claves para el desarrollo del país. Aplicamos todo el conocimiento y tecnología en la ejecución de los contratos atentos a las exigencias de nuestros clientes y comitentes, logrando un vínculo de satisfacción y confianza.",},
  {position: "VISIÓN", name: "Lograr la sustentabilidad de la empresa, potenciando las capacidades de nuestros colaboradores y cumpliendo con la ejecución de los contratos asumidos, desde las más estrictas normas de calidad y seguridad.",},
  {position: "VALORES", name: "Trabajar con RESPONSABILIDAD, guiando el TRABAJO SEGURO enfocándonos en el COMPROMISO que asumimos en cada contrato para ser más EFICIENTES y siempre respetar la mejor CALIDAD posible. Podemos garantizar que la compañía en su conjunto trabaja en pos de la SUSTENTABILIDAD"}

];

 @Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
}


