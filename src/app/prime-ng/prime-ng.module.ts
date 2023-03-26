import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';

import { SafeTypeComponent } from './components/safe-type/safe-type.component';

@NgModule({
  declarations: [
    SafeTypeComponent
  ],
  imports: [ReactiveFormsModule,],
  exports: [ButtonModule, CardModule, MenubarModule, FieldsetModule, SafeTypeComponent],
})
export class PrimeNgModule { }
