import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-blog';


  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date);
      }, 2000);
    }
  )

  posts = [
    {
      title: 'Article 1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores libero necessitatibus repudiandae ratione reprehenderit quo delectus? Velit reprehenderit voluptatem commodi facere nihil libero id. Repellat aut nihil ipsa aliquam explicabo?',
      loveIts: 0,
      created: this.lastUpdate
    },
    {
      title: 'Article 2',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores libero necessitatibus repudiandae ratione reprehenderit quo delectus? Velit reprehenderit voluptatem commodi facere nihil libero id. Repellat aut nihil ipsa aliquam explicabo?',
      loveIts: 0,
      created: this.lastUpdate
    },
    {
      title: 'Article 3',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores libero necessitatibus repudiandae ratione reprehenderit quo delectus? Velit reprehenderit voluptatem commodi facere nihil libero id. Repellat aut nihil ipsa aliquam explicabo?',
      loveIts: 0,
      created: this.lastUpdate
    }
  ];

  





}
