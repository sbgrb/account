import { Foo } from "../view/Foo";
import { Bar } from "../view/Bar";
import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/first";
import { Second } from "../components/welcome/Second";
import { Welcome } from "../view/Welcome";


export const routes: RouteRecordRaw[] = [
    { path: '/', component: Foo },
    { path: '/about', component: Bar },
    {
        path: '/welcome',
        component: Welcome,
        children: [
            { path: '1', component: First },
            { path: '2', component: Second },
        ]
    }
]