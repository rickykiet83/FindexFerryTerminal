import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        children: [
            {
                id: 'home',
                title: 'Home',
                translate: 'NAV.HOME.TITLE',
                type: 'item',
                icon: 'home',
                url: '/home',
            },
            {
                id: 'ferry_terminal',
                title: 'Ferry Terminal',
                translate: 'NAV.FERRY_TERMINAL.TITLE',
                type: 'item',
                icon: 'email',
                url: '/ferry-terminal',

            }
        ]
    }
];
