//angular imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

//component imports
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/task/tasks.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
     ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule]
})
export class AppModule {}
