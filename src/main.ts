import { RendererFactory2 } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { ChauRendererFactory } from "./app/renderer";

bootstrapApplication(AppComponent, {
  providers: [
    // { provide: RendererFactory2, useClass: ChauRendererFactory }
  ],
}).catch((err) => console.error(err));
