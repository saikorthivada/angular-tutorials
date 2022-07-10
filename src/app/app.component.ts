import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  testing: string = '';

  constructor() {
    // Initialization
    // The required params or varaibles can be created here which can be used in our oninit
    // Do not perform big logics here which makes our component rendering a bit slow
  }
  ngOnChanges() {
    // Ng on changes is the first life cycle
    // When there is an input output decorator used in a component
    // When there is a change in input / output binding then it will be re triggered
    console.log('Im in ng on changes');
  }

  ngOnInit() {
    console.log('On init');
    // This is specifically used for onload logics
    // this will called only once the component is loaded either we have ngOnchange or not
  }

  ngDoCheck() {
    console.log('Do check');
    // one is on load
    // when there is a change happens to our component
  }


  ngAfterContentInit() {
    console.log('content init');
    // When ever you want to change some logics when the content projection changed
    // Called only once after do check
  }

  ngAfterContentChecked() {
    console.log('contect checked');

    // Immediatly after content init
    // When ever our do check is called
  }

  ngAfterViewInit() {
    console.log('after view init');
    // Immediatly executed after 1st conent checked complition
    // Called only once
    // Do the operations on the dom when the component loaded
  }


  ngAfterViewChecked() {
    console.log('after view checked');
    // Immediatly after execution of after view init for the first time
    // It will be exected after content checked is called
  }

  ngOnDestroy() {
    console.log('on destroy');
    // this will be called only once
    // called before component is destroyed.
    // All clean ups can be done here 
  }

}
