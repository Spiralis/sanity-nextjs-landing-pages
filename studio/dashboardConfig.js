export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2d9c01d88d1f01132c083e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ptxjtw86',
                  apiId: '50c08917-b940-440f-b419-df4a99cc3cef'
                },
                {
                  buildHookId: '5f2d9c013b27420144f43c32',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y65z9cna',
                  apiId: 'beff1dc8-cce4-4262-b30d-4a17d1a6f2a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Spiralis/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y65z9cna.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
