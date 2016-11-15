export class Init{
  todos;
    load(){

    if ( localStorage.getItem('todos')=== null || localStorage.getItem('todos') == undefined){
    console.log('no hay datos');

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
       localStorage.setItem('todos', JSON.stringify(this.todos));
      return;
    } else {
       console.log('si hay datos');
    }
}
}