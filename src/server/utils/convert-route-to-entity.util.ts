const mapping: Record<string, string> = {
  'blog-posts': 'blog_post',
  organizations: 'organization',
  subscriptions: 'subscription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
