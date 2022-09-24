import { defineComponent } from "vue";
import s from './First.module.scss';
import pig from '../../assets/icons/pig.svg';
import { WelcomeLayout } from './WelcomeLayout';
export const First = defineComponent({
    setup: (props, context) => {
        const slots = {
            icon: () => <img src={pig} />,
            title: () => <h2>会挣钱<br />会省钱</h2>,
            button: () => <><router-link class={s.fake} to="">下一页</router-link>
                <router-link to="/welcome/2">下一页</router-link>
                <router-link to="/start">跳过</router-link></>

        }
        return () => (
            <WelcomeLayout v-slots={slots}></WelcomeLayout>
        )
    }
})