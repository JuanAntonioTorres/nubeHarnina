import { RegisterPage } from "./register";
import { IonicPageModule } from "ionic-angular";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
})
export class RegisterPageModule {}
