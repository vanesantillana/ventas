import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
})
export class HelloIonicPage {
  jobs: any[]=[];
  searchjobs: any[]=[];

  constructor(private alertCtrl: AlertController) {
    this.jobs.push({name: "barbie",precio: "4.5",venta: "6"});
    this.jobs.push({name: "cami",precio: "4.5",venta: "6"});
    this.jobs.push({name: "arbi",precio: "4.5",venta: "6"});
    this.jobs.push({name: "tran",precio: "4.5",venta: "6"});
    this.jobs.push({name: "mune",precio: "4.5",venta: "6"});
    this.searchjobs = this.jobs;
    console.log(this.searchjobs);
  } 

  onChangeTime() {
    console.log("cambie")
  }
  
  onInputTime(val:string) {
    //console.log(val)
    val = val.toLowerCase()
    this.searchjobs = [];
    for(var i = 0;i<this.jobs.length;i++) { 
      if(this.jobs[i].descrip.search(val)>-1){
        this.searchjobs.push(this.jobs[i]);
      }
    }
  }
  buttonClick(val:any){
    console.log(val);
    let texto = val.name+"<br>Precio: "+val.venta+"<br>Minimo: "+val.precio;
    let alert = this.alertCtrl.create({
      title: "resultado",
      subTitle: texto,
      buttons: ['OK']
    });
    alert.present();
  }
  
}
