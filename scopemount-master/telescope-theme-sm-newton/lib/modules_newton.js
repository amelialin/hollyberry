Telescope.modules.removeAll("postComponents");
Telescope.modules.add("postComponents", [
  {
    template: 'post_vote',
    order: 10
  },
  {
    template: 'post_content',
    order: 20
  },
  {
    template: 'post_rank',
    order: 30
  }
]);

Telescope.modules.removeAll("postHeading");
Telescope.modules.add("postHeading", [
  {
    template: 'post_title',
    order: 10
  },
  {
    template: 'post_domain',
    order: 20
  }
]);

Telescope.modules.removeAll("postMeta");
Telescope.modules.add("postMeta", [
  {
    template: 'post_comments_link',
    order: 10
  },
  {
    template: 'post_info',
    order: 20
  },
  {
    template: 'post_author',
    order: 30
  },
  {
    template: 'post_admin',
    order: 40
  }
]);
