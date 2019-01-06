import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule } from '@angular/router';

// Components
import { ReadMoreComponent } from '@app/shared/components/readmore/readmore.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,

    FlexLayoutModule
  ],
  declarations: [
    // Components
    ReadMoreComponent,
    HeaderComponent,
    SidenavListComponent,
    LoaderComponent
  ],
  exports: [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,

    FlexLayoutModule,

    // Components
    ReadMoreComponent,
    HeaderComponent,
    SidenavListComponent,
    LoaderComponent
  ]
})
export class SharedModule {}
