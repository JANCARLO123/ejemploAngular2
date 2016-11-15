import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  texto;
  constructor(private  todoService: TodosService) {

   }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    /*
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
  */
  }
  addText(){
    console.log(this.texto);
    var newTodo= {
        text: this.texto
     }
     this.todos.push(newTodo);
    //this.todoService.addTodos(newTodo);
    this.texto = '';
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
