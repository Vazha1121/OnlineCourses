import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideServerRendering } from '@angular/platform-server';

export default function bootstrap(context: any) {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideServerRendering()
    ]
  }, context); // ✅ THIS is required
}