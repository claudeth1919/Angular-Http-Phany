import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public name:string= '';
  numberOfPages:number;
  book:Array<string>  ;
  found:boolean = true;
  personajes:Array<JSON> ;
  personajesTemp:Array<JSON> ;
  myControl = new FormControl();
  public isCargando:boolean = true;

  constructor (private httpClient: HttpClient){
    this.personajes = new Array();
    this.personajesTemp = new Array();
    // this.getData();
    }

    ngOnInit() {
      // if(localStorage.getItem('datos')!=null||localStorage.getItem('datos')!=undefined){
         this.getData();
      //     localStorage.setItem("datos", this.personajesTemp.join(""));
      //     console.log(this.personajesTemp.join(","));
      // }else{
      //   let conversion = JSON.parse(localStorage.getItem('datos'));
      //   console.log(conversion);
      //   this.personajes = conversion;
      //   this.personajesTemp = conversion;
      // }
    }

    onNameKeyUp(event:any){
      this.name=event.target.value;
      console.log(this.name);
      this.filtrar();
    }

    filtrar(){
      if(this.name!=''||this.name!=null||this.name!=undefined){
        let temp = new Array();
           this.personajesTemp.forEach(item => {
          if(item['name'].toUpperCase().indexOf(this.name.toUpperCase())!=-1){
            temp.push(item);
          }
        });
        this.personajes = temp;
      }else{
        this.personajes = this.personajesTemp;
      }
    }

    getData(){
      this.httpClient.get('https://anapioficeandfire.com/api/books/1')
      .subscribe(
        (data:any[]) => {
          this.book = data['characters'];
          //console.log(this.book);
          this.getCharacters();
        }
      )
    }

    getCharacters(){
        this.book.forEach(item => {
          this.httpClient.get(item)
          .subscribe(
            (data:JSON) => {
              this.personajes.push(data);
            }
          )
        }
      );
      console.log(this.personajes);
      this.isCargando = false;
      this.personajesTemp = this.personajes;
    }

}
