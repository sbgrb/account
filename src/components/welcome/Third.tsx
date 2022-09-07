import { defineComponent } from "vue";
import s from './First.module.scss';
import chart from '../../assets/icons/chart.svg';
export const Third = defineComponent({
    setup() {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img src={chart} />
                    <h2>会挣钱<br />会省钱</h2>
                </div>
                <div class={s.actions}>
                    <router-link class={s.fake} to="">下一页</router-link>
                    <router-link to="/welcome/4">下一页</router-link>
                    <router-link to="/start">跳过</router-link>
                </div>
            </div>
        )
    }
})