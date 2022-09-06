import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from './Welcome.module.scss'
export const Welcome = defineComponent({
    setup:()=> {
        return () => <div class={s.wrapper}>
            <header>1</header>
            <main><RouterView/></main>
            <footer>22</footer>
        </div>
    }
})