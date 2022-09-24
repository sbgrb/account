import { defineComponent } from "vue";
import s from './WelcomeLayout.module.scss';
import time from '../../assets/icons/time.svg';
import { WelcomeLayout } from './WelcomeLayout';
export const Second = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img src={time} />,
                    title: () => <h2>每日提醒<br />不遗漏每一笔账单</h2>,
                    button: () => <><router-link class={s.fake} to="">下一页</router-link>
                        <router-link to="/welcome/3">下一页</router-link>
                        <router-link to="/start">跳过</router-link></>
                }}
            </WelcomeLayout>
        )
    }
})