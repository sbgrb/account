import s from './WelcomeLayout.module.scss';
export const ThirdAction = () => {
    return <div class={s.actions}>
        <router-link class={s.fake} to="">下一页</router-link>
        <router-link to="/welcome/4">下一页</router-link>
        <router-link to="/start">跳过</router-link>
    </div>
}

ThirdAction.displayName = 'ThirdAction'