import { Foo } from "../view/Foo";
import { Bar } from "../view/Bar";
import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Welcome } from "../view/Welcome";
import { Third } from "../components/welcome/Third";
import { Forth } from "../components/welcome/Forth";
import { FirstAction } from "../components/welcome/FirstAction";
import { SecondAction } from "../components/welcome/SecondAction";
import { ThirdAction } from "../components/welcome/ThirdAction";
import { ForthAction } from "../components/welcome/ForthAction";


export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/welcome' },
    { path: '/about', component: Bar },
    {
        path: '/welcome',
        component: Welcome,
        children: [
            { path: '', redirect: '/welcome/1' },
            { path: '1', components: { main: First, footer: FirstAction } },
            { path: '2', components: { main: Second, footer: SecondAction } },
            { path: '3', components: { main: Third, footer: ThirdAction } },
            { path: '4', components: { main: Forth, footer: ForthAction } },
        ]
    }
]
