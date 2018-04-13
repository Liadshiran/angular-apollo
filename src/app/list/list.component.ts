import { Component, OnInit, Query } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators'

import gql from 'graphql-tag';
import { Course,Query } from '../types'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  courses: Observable<Course[]>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    //TODO fix this not compiling:
    // this.courses = this.apollo.watchQuery<Query>({
    //   query: gql`
    //     query allCourses {
    //       allCourses {
    //         id
    //         title
    //         author
    //         description
    //         topic
    //         url
    //       }
    //     }
    //   `
    // })
    //   .valueChanges
    //   .pipe(
    //     map(result => result.data.allCourses) 
    //   );
  }

}
