import { defineComponent } from "vue";
import { RouterView } from "vue-router";
export const Welcome = defineComponent({
    setup:()=> {
        return () => <div>
            <header>1</header>
            <main><RouterView/></main>
            <footer>22</footer>
        </div>
    }
})