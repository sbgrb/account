import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from './Welcome.module.scss'
import logo from './../assets/vue.svg'
export const Welcome = defineComponent({
    setup:()=> {
        return () => <div class={s.wrapper}>
            <header>
                <img src={logo} />
                <h1>记账</h1>
            </header>
            <main><RouterView/></main>
            <footer>22</footer>
        </div>
    }
})