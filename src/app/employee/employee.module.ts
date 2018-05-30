import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeeComponent } from "./employee.component";

@NgModule({
    imports :       [ CommonModule],
    declarations :  [ EmployeeComponent ],
    exports :       [ EmployeeComponent ]
})
export class EmployeeModule{}