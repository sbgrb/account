import { defineComponent } from "vue";
import s from './First.module.scss';
import pig from '../../assets/icons/pig.svg';
import time from '../../assets/icons/time.svg';
export const First = defineComponent({
    setup() {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img src={pig} />
                    <h2>会挣钱<br />会省钱</h2>
                </div>
                <div class={s.actions}>
                    <router-link class={s.fake} to="">下一页</router-link>
                    <router-link to="/welcome/2">下一页</router-link>
                    <router-link to="/start">跳过</router-link>
                </div>
            </div>
        )
    }
})