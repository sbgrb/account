import { defineComponent } from "vue";
import s from './WelcomeLayout.module.scss';
import chart from '../../assets/icons/chart.svg';
import { WelcomeLayout } from "./WelcomeLayout";
export const Third = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img src={chart} />,
                    title: () => <h2>会挣钱<br />会省钱</h2>,
                    button: () => <><router-link class={s.fake} to="">下一页</router-link>
                        <router-link to="/welcome/4">下一页</router-link>
                        <router-link to="/start">跳过</router-link></>
                }}
            </WelcomeLayout>
        )
    }
})