import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Formulario } from './formulario/formulario';
import { Hobbies } from './hobbies/hobbies';
import { Posts } from './posts/posts';



export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'formulario', component: Formulario },
  { path: 'hobbies', component: Hobbies },
  { path: 'posts', component: Posts }


];
