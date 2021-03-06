import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './../../app.material.module';

// import { CdkTableModule } from '@angular/cdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';

// import { MiscRoutingModule } from './misc.routing';

import { CarouselComponent } from './carousel/carousel.component';
import { MiscComponent } from './misc.component';
import { ChangeDetectionComponent } from './change/change-detection.component';
import { ChangeDetailComponent } from './change/change-detail.component';
import { VirtRealComponent } from './virtual-reality/virtreal.component';
import { TableComponent } from './table/table.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

@NgModule({
  declarations: [
    CarouselComponent,
    MiscComponent,
    ChangeDetectionComponent,
    ChangeDetailComponent,
    VirtRealComponent,
    TableComponent,
    StepperComponent,
    ExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule, ReactiveFormsModule,
    PipesModule
    // MiscRoutingModule
  ],
  exports: [
    CarouselComponent,
    MiscComponent,
    ChangeDetectionComponent,
    ChangeDetailComponent,
    VirtRealComponent,
    TableComponent,
    StepperComponent,
    ExpansionPanelComponent
  ]
})

export class MiscModule {
}
