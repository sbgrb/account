import s from './WelcomeLayout.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import { FunctionalComponent } from 'vue';
export const Forth: FunctionalComponent = () => {
    return <div class={s.card}>
        <img src={cloud} />
        <h2>会挣钱<br />还会省钱</h2>
    </div>
}

Forth.displayName = "Forth" 