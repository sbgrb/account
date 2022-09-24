import { defineComponent } from "vue";
import s from './WelcomeLayout.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import { WelcomeLayout } from "./WelcomeLayout";
export const Forth = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img src={cloud} />,
                    title: () => <h2>会挣钱<br />会省钱</h2>,
                    button: () => <><router-link class={s.fake} to="">下一页</router-link>
                        <router-link to="/start">完成</router-link>
                        <router-link class={s.fake} to="/start">跳过</router-link></>
                }}
            </WelcomeLayout>
        )
    }
})