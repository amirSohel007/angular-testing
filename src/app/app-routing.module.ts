import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventTestingComponent } from './components/event-testing/event-testing.component';
import { DirectiveTestingComponent } from './components/directive-testing/directive-testing.component';
import { PipeTestingComponent } from './components/pipe-testing/pipe-testing.component';
import { InputOutoutTestComponent } from './components/input-outout-test/input-outout-test.component';
import { DebounceComponent } from './components/debounce/debounce.component';

const routes: Routes = [
  {
    path: 'event-testing',
    component: EventTestingComponent,
  },
  {
    path: 'directive',
    component: DirectiveTestingComponent,
  },
  {
    path: 'pipe',
    component: PipeTestingComponent,
  },
  {
    path: 'input-ouput',
    component: InputOutoutTestComponent,
  },
  {
    path: 'debounce',
    component: DebounceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
