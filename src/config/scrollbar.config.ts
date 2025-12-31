import ScrollAndAlignCards from '../builds/scrollbars/ScrollAndAlignCards'
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
    },
    '3rd': {
        title: 'Scrollbar and Align Cards',
        component: ScrollAndAlignCards,
    }
} as const
