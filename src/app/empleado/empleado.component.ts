import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>María José</p>" template in line, también se puede con la hoja de estilos
  //se puede crear desde la linea de commandos con ng g c <nombre> -s -t
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = "María José";
  apellido = "Aranguren"
  private edad=21;//solo accesible dentro de la clase
  valueInputEdad:any;

  getEdad(){//getter
    return this.edad;
  }

  constructor() { }

  ngOnInit(): void {
  }

  mayorEdad(value : string){
    this.valueInputEdad = value;
    console.log(this.valueInputEdad);
    let pEdad = document.getElementById("edadEmpleado");
    let resultado = document.createElement("P");
    if(this.valueInputEdad >= 18){ 
      let texto = document.createTextNode("Mayor de edad");
      resultado.appendChild(texto);
      pEdad?.appendChild(resultado);
    }else{
      let texto = document.createTextNode("Menor de edad");
      resultado.appendChild(texto);
      pEdad?.appendChild(resultado);
    }
  }

  establecerEmpresa(value:String){}
  
}
