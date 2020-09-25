import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [NavigationComponent, InfoBoxComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [NavigationComponent, InfoBoxComponent],
})
export class SharedComponentsModule {}
