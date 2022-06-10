import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    TelaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
