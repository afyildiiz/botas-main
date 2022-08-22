import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { TableInputComponent } from './components/table-input/table-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClient ,HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio'
import { MatTableDataSource } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TableInputUpdateComponent } from './table-input-update/table-input-update.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ClothesTableComponent } from './components/clothes-table/clothes-table.component';
import { ClothesInputComponent } from './components/clothes-input/clothes-input.component';
import { ClothesInputUpdateComponent } from './components/clothes-input-update/clothes-input-update.component';
import { MessageComponent } from './components/message/message.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    TableInputComponent,
    TableInputUpdateComponent,
    ClothesTableComponent,
    ClothesInputComponent,
    ClothesInputUpdateComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,   
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    NgbModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatRadioModule
    

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }