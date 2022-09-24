import s from './WelcomeLayout.module.scss';
import pig from '../../assets/icons/pig.svg';
import { WelcomeLayout } from './WelcomeLayout';
export const First = () => (
    <WelcomeLayout>
        {{
            icon: () => <img src={pig} />,
            title: () => <h2>会挣钱<br />会省钱</h2>,
            button: () => <><router-link class={s.fake} to="">下一页</router-link>
                <router-link to="/welcome/2">下一页</router-link>
                <router-link to="/start">跳过</router-link></>
        }}
    </WelcomeLayout>
)

First.displayName = "First" 