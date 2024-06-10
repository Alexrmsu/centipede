import {Component} from '@angular/core';
import {VERSION} from "@angular/cdk";
import packageJson from '../../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'mean-frontend';
  version: string = VERSION.full;
  public versionPackage = packageJson.version;
  protected readonly navigator = navigator;
}

