import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    children: [
      {
        id: 'ferry_terminal',
        title: 'Ferry Terminal',
        translate: 'NAV.FERRY_TERMINAL.TITLE',
        type: 'item',
        icon: 'email',
        url: '/ferry-terminal',
        badge: {
          title: '25',
          translate: 'NAV.FERRY_TERMINAL.BADGE',
          bg: '#F44336',
          fg: '#FFFFFF'
        }
      }
    ]
  }
];
