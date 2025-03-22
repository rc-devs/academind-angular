//this module is the landing for all components shared throughout the app. importing the SharedModule makes it so all declared components are imported
import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";


@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent] //tells angular these components should be used wherever shared is called
})

export class SharedModule {}



