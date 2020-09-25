import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedComponentsModule } from '@ng-cli-app/shared/components';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedComponentsModule, HomeRoutingModule],
})
export class HomeUiModule {}
