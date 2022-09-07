import { defineComponent } from "vue";
import s from './First.module.scss';
import pig from '../../assets/icons/pig.svg';
import time from '../../assets/icons/time.svg';
import chart from '../../assets/icons/chart.svg';
import cloud from '../../assets/icons/cloud.svg';
export const First = defineComponent({
    setup() {
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    <img src={pig} />
                    {/* <img src={time} /> */}
                    {/* <img src={chart} /> */}
                    {/* <img src={cloud} /> */}
                    <h2>会挣钱</h2><br />
                    <h2>会省钱</h2>
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