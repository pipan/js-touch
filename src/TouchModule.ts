import { Module } from "@wildebeest/js-modules";
import { CommonModule } from "@wildebeest/common";

export class TouchModule implements Module
{
    getDependencies(): Array<any>
    {
        return [CommonModule];
    }
    
    register(): void { }

    boot(): void { }
}