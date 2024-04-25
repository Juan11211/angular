import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // courseTitle = 'First Angular App';

  data = { 
    title: 'First Angular App'
  }

  onLogoClicked(){
    alert('HELLO WORLD')
  }
  
  onKeyUp(newTitle: string){

      this.data.title = newTitle; 
  }
}


