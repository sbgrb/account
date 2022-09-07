import { defineComponent } from "vue";
import s from './Second.module.scss'
export const Second = defineComponent({
    setup() {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}></div>
                <div class={s.actions}></div>
            </div>
        )
    }
})