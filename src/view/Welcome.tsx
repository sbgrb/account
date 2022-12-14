import { defineComponent, Transition, ref, VNode } from "vue";
import { RouterView, RouteLocationNormalizedLoaded } from "vue-router";
import s from './Welcome.module.scss'
export const Welcome = defineComponent({
    setup: (props, context) => {
        const main = ref<HTMLElement | null>(null)
        return () => <div class={s.wrapper}>
            <header>
                <svg>
                    <use xlinkHref="#logo"></use>
                </svg>
                <h1>山竹记账</h1>
            </header>
            <main class={s.main} ref={main}>
                <RouterView name="main">
                    {({ Component: X, route: R }: { Component: VNode, route: RouteLocationNormalizedLoaded }) =>
                        <Transition enterFromClass={s.slide_fade_enter_from} enterActiveClass={s.slide_fade_enter_active}
                            leaveToClass={s.slide_fade_leave_to} leaveActiveClass={s.slide_fade_leave_active}>
                            {X}
                        </Transition>
                    }
                </RouterView>
            </main>
            <footer>
                <RouterView name="footer" />
            </footer>
        </div>
    }
})