import { computed } from 'vue'
import { useDisplay } from 'vuetify'

export function useBreakpoints() {
    const { xs, sm } = useDisplay()
    const isSmallScreen = computed(() => {
        return xs.value || sm.value
    })

    return { isSmallScreen }
}