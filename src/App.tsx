import { defineComponent, ref } from "vue"
import { RouterLink, RouterView } from "vue-router"

export const App = defineComponent({
    setup() {
        return () => <>
            <header>
                <ul>
                    <li>
                        <RouterLink to="/">Foo</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">Bar</RouterLink>
                    </li>
                </ul>
            </header>
            <div>
                <RouterView />
            </div>
            <footer>
                页脚
            </footer>
        </>
    }
})
