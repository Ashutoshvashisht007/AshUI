import Layout_Translate from '../builds/motion/layout/Layout_Translate'
import Layout_Hover from '../builds/motion/layout/Layout_Hover'

export const motionLayouts = {
    '1st': {
        title: 'Translate Layout',
        component: Layout_Translate,
    },
    '2nd': {
        title: 'Hover & Exit Layout',
        component: Layout_Hover,
    },
} as const
