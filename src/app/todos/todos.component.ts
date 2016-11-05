import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  texto;
  constructor() { }

  ngOnInit() {
this.todos = [
  {
    text: 'Primer texto'
  },
  {
    text: 'Segundo texto'
  },
  {
    text: 'Tercer texto'
  }
  ];
  }
  addText(){
    console.log(this.texto);
    this.todos.push(
      {
        text: this.texto
      });
      this.texto = "";
  }
   deleteText(textoTodo){
    console.log(textoTodo);
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == textoTodo) {
        this.todos.splice (i , 1 );
      }
    }
   }
    deleteText2(textoTodo){
    console.log(textoTodo);
    var index = this.todos.indexOf(textoTodo);
    this.todos.splice (index , 1 );

    }



}
