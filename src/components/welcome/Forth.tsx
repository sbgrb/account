import s from './WelcomeLayout.module.scss';
import { FunctionalComponent } from 'vue';
export const Forth: FunctionalComponent = () => {
    return <div class={s.card}>
        <svg>
            <use xlinkHref='#cloud'></use>
        </svg>
        <h2>会挣钱<br />还会省钱</h2>
    </div>
}

Forth.displayName = "Forth" 