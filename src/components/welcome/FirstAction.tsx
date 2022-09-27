import s from './WelcomeLayout.module.scss';
export const FirstAction = () => {
    return <div class={s.actions}>
        <router-link class={s.fake} to="">下一页</router-link>
        <router-link to="/welcome/2">下一页</router-link>
        <router-link to="/start">跳过</router-link>
    </div>
}

FirstAction.displayName = 'FirstAction'