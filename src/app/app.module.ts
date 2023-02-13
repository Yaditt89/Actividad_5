import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { NoticeComponent } from './components/notice/notice.component';
import { HeaderComponent } from './components/theme/header/header.component';
import { FooterComponent } from './components/theme/footer/footer.component';

@NgModule({
  declarations: [AppComponent, BlogComponent, NoticeComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
