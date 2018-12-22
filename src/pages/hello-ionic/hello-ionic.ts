import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
})
export class HelloIonicPage {
  searchjobs: any[]=[];

  jobs: any[]=[
  {name:"abejitas bailarinas",precio:"13",venta:"22"},{name:"abejitas locas",precio:"5,00",venta:"11,00"},{name:"animales de granja",precio:"7,00",venta:"11,00"},{name:"barbie animal",precio:"7,90",venta:"12,00"},{name:"barbie con pony",precio:"7,90",venta:"12,00"},{name:"barbie con zapato y corona",precio:"6,2",venta:"12"},{name:"barbie con zapatos articulada",precio:"7,00",venta:"12,00"},{name:"barbie frozen",precio:"9",venta:"14"},{name:"barbie hadas",precio:"8,50",venta:"14,00"},{name:"barbie sirena cabezona",precio:"7",venta:"12"},{name:"barbie sirena con accesorios cartera",precio:"6,7",venta:"12"},{name:"barbie sirena con estrella",precio:"4,5",venta:"10"},{name:"barbie sola karishma",precio:"3,00",venta:"6,00"},{name:"barbie vestido y zapatos",precio:"5,00",venta:"9,00"},{name:"bloques bolsa osito 56 piezas",precio:"7,90",venta:"14,00"},{name:"bolsa de cocina grande con refrigeradora",precio:"9,50",venta:"16,00"},{name:"bolsa de cocina microondas",precio:"7,50",venta:"12,50"},{name:"cabezones super heroes",precio:"7,50",venta:"12,00"},{name:"camion de soldados",precio:"9,00",venta:"15,00"},{name:"camion jaula elefante",precio:"9,00",venta:"15,00"},{name:"camion volquete en bolsa amarillo",precio:"5",venta:"9"},{name:"camiones con antena",precio:"6,20",venta:"11,00"},{name:"camiones doble grua bombero",precio:"5,50",venta:"9,00"},{name:"camioneta 4x4 militar en bolsa",precio:"5,00",venta:"9,50"},{name:"camioneta 4x4 negra",precio:"4,00",venta:"9,00"},{name:"camionetas simples en bolsa",precio:"4,00",venta:"7,00"},{name:"carrito super mercado",precio:"9,00",venta:"14,00"},{name:"carrito super mercado con cocina",precio:"8,2",venta:"16"},{name:"carros a control con timon",precio:"16",venta:"27"},{name:"carros goma",precio:"10,50",venta:"17,00"},{name:"carros locos a contros con luces",precio:"17",venta:"27"},{name:"coche de pepe",precio:"15",venta:"30"},{name:"cocina canasta",precio:"10",venta:"16"},{name:"cocina con barbie en carton",precio:"3,40",venta:"10,00"},{name:"cocina repostero",precio:"8",venta:"14"},{name:"cubos didacticos",precio:"3,8",venta:"8"},{name:"didactico elefante dragon",precio:"4,00",venta:"9,00"},{name:"doble rifle policia",precio:"7,30",venta:"12,50"},{name:"formula 1 16",precio:"8,30",venta:"12,50"},{name:"formula 1 a control",precio:"13,00",venta:"18,00"},{name:"formula 1 grande",precio:"13,50",venta:"18,00"},{name:"formula 1 piloto cabezon",precio:"4,80",venta:"9,00"},{name:"formula 1 piloto mediano",precio:"11,30",venta:"16,00"},{name:"guitarra",precio:null,venta:"9,00"},{name:"jardineria en carton",precio:"7,50",venta:"12,00"},{name:"lochera de doctora",precio:"9,50",venta:"15,00"},{name:"mochila con rueda cocina",precio:"11,00",venta:"16,00"},{name:"mochila soldados",precio:"11,30",venta:"16,00"},{name:"mochila soldados peque\u00f1a",precio:"5,00",venta:"9,00"},{name:"mochilas cocina osito",precio:"5,10",venta:"9,00"},{name:"pato aros",precio:"3,10",venta:"6,50"},{name:"pepes peque\u00f1os",precio:"3,5",venta:"8"},{name:"pescados nemo",precio:"6,20",venta:"11,00"},{name:"pistola boliche ",precio:"9,80",venta:"15,00"},{name:"pistola con bolas morada",precio:"5,00",venta:"11,00"},{name:"pistola con esposas",precio:"3,40",venta:"8,00"},{name:"pistola en caja a pilas",precio:"8,40",venta:"12,00"},{name:"pistola nerf en caja",precio:"7,00",venta:"12,50"},{name:"rifle con pistola power",precio:"7,30",venta:"12,50"},{name:"set carros con aviones",precio:"7",venta:"14"},{name:"set cartera y u\u00f1as",precio:"3,00",venta:"7,00"},{name:"set cocina limpieza jardin peque\u00f1a ",precio:"3,50",venta:"6,50"},{name:"set cocina rojo con barbie",precio:"11,7",venta:"18"},{name:"set doctora",precio:"3,00",venta:"7,00"},{name:"sonaja jaula pelota",precio:"5,60",venta:"10,00"},{name:"tambor",precio:"10,00",venta:"16,00"},{name:"tambor con mono sonaja",precio:"5,60",venta:"11,00"},{name:"trailer con 4 carros",precio:"4,20",venta:"9,00"},{name:"trailer con animales zebra",precio:"8,00",venta:"12,50"},{name:"transformers rojo rayo maqueen",precio:"8,5",venta:"14,5"},{name:"transformers super con espada",precio:"7",venta:"12"},{name:"transformers triples ",precio:"6,8",venta:"15"},{name:"truck",precio:"6,50",venta:"12,00"} 
  ];

  constructor(private alertCtrl: AlertController) {
    this.searchjobs = this.jobs;
    console.log(this.searchjobs);
  } 

  onChangeTime() {
    //this.searchjobs = this.jobs;
    console.log("cambie")
  }
  
  onInputTime(val:string) {
    //console.log(val)
    val = val.toLowerCase()
    this.searchjobs = [];
    for(var i = 0;i<this.jobs.length;i++) { 
      if(this.jobs[i].name.search(val)>-1){
        this.searchjobs.push(this.jobs[i]);
      }
    }
  }
  buttonClick(val:any){
    console.log(val);
    let texto = val.name.toUpperCase()+"<br><br>Precio: <h4><b>S/."+val.venta+"</b></h4>";
    let alert = this.alertCtrl.create({
      title: "Resultado",
      subTitle: texto,
      buttons: ['OK'],
      cssClass: 'alert-danger' 
    });
    alert.present();
  }
  
}
