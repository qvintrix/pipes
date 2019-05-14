import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  asyncTitle = new Promise<string>((resolve: (value?: string | PromiseLike<string>) => void ) => {
    resolve('I am async data!');
  });
  lessons = [
    {
      lessonComplexity: 'normal',
      name: 'Handling Forms in Angular Apps',
      status: 'in progress',
      started: new Date(18, 1, 2018)
    },
    {
      lessonComplexity: 'complex',
      name: 'Angular Routing',
      status: 'new',
      started: new Date(25, 1, 2018)
    },
    {
      lessonComplexity: 'easy',
      name: 'Pipes',
      status: 'in progress',
      started: new Date(15, 1, 2018)
    },
    {
      lessonComplexity: 'normal',
      name: 'Databinding',
      status: 'done',
      started: new Date(5, 1, 2018)
    }
  ];
}
