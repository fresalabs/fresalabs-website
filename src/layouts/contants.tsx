export const primaryNavigationRoutes: Record<string, string> = {
  home: '/home',
  apps: '/apps',
  blog: '/blog',
  support: '/support',
  privacy: '/privacy',
  terms: '/terms',
  register: '/register',
  login: '/login',
};

export interface MenuItem {
  id: string;
  name: string;
  path: (id?: string) => string;
}

export const menuItems: MenuItem[] = [
  {
    id: primaryNavigationRoutes.home,
    name: 'Home',
    path: () => primaryNavigationRoutes.home,
  },
  {
    id: primaryNavigationRoutes.apps,
    name: 'Apps',
    path: () => primaryNavigationRoutes.apps,
  },
  {
    id: primaryNavigationRoutes.blog,
    name: 'Blog',
    path: () => primaryNavigationRoutes.blog,
  },
  {
    id: primaryNavigationRoutes.support,
    name: 'Support',
    path: () => primaryNavigationRoutes.support,
  },
];
