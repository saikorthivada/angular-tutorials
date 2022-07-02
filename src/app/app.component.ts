import { Component } from '@angular/core';
import { IService } from './Service';
import { IUtils } from './Utils';

interface ICommon extends IUtils, IService {

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements ICommon {
  // name = 'sai kumar';
  name = 'sai kumar';
  age = 20;
}
