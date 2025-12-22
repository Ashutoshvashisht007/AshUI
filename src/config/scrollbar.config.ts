import ScrollbarAnimation from '../builds/scrollbars/ScrollbarAnimation'
import ScrollSynced from '../builds/scrollbars/ScrollSynced'

export const scrollbarAnimation = {
    '1st': {
        title: 'Scrollbar YT',
        component: ScrollbarAnimation,
    },
    '2nd': {
        title: 'Scrollbar Synced',
        component: ScrollSynced,
    }
} as const
