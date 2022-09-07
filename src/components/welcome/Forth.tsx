import { defineComponent } from "vue";
import s from './First.module.scss';
import cloud from '../../assets/icons/cloud.svg';
export const Forth = defineComponent({
    setup() {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img src={cloud} />
                    <h2>会挣钱<br />会省钱</h2>
                </div>
                <div class={s.actions}>
                    <router-link class={s.fake} to="">下一页</router-link>
                    <router-link to="/start">完成</router-link>
                    <router-link class={s.fake} to="/start">跳过</router-link>
                </div>
            </div>
        )
    }
})