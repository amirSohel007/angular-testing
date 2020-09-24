import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTestingComponent } from './components/component-testing/component-testing.component';
import { ServicebasedComponentComponent } from './components/servicebased-component/servicebased-component.component';
import { EventTestingComponent } from './components/event-testing/event-testing.component';
import { InjectTestingComponent } from './components/inject-testing/inject-testing.component';
import { DirectiveTestingComponent } from './components/directive-testing/directive-testing.component';
import { HoverFocusDirective } from './components/directive-testing/stylelist.directive';
import { PipeTestingComponent } from './components/pipe-testing/pipe-testing.component';
import { SquarePipe } from './components/pipe-testing/square.pipe';
import { FormsModule } from '@angular/forms';
import { InputOutoutTestComponent } from './components/input-outout-test/input-outout-test.component';
import { ChildComponentComponent } from './components/input-outout-test/child-component/child-component.component';
import { DebounceComponent } from './components/debounce/debounce.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ComponentTestingComponent,
    ServicebasedComponentComponent,
    EventTestingComponent,
    InjectTestingComponent,
    DirectiveTestingComponent,
    HoverFocusDirective,
    PipeTestingComponent,
    SquarePipe,
    InputOutoutTestComponent,
    ChildComponentComponent,
    DebounceComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
