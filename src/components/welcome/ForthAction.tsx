import s from './WelcomeLayout.module.scss';
export const ForthAction = () => {
    return <div class={s.actions}>
        <router-link class={s.fake} to="">下一页</router-link>
        <router-link to="/start">完成</router-link>
        <router-link class={s.fake} to="/start">跳过</router-link>
    </div>
}

ForthAction.displayName = 'ForthAction'