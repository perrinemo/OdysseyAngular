import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MoviesComponent } from './movies/movies.component';

const ROUTES: Routes = [
    {
        path: '',
        component: UserProfileComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'user-profile',
        component: UserProfileComponent
    },
    {
        path: 'movies',
        component: MoviesComponent
    }
]

export { ROUTES }
