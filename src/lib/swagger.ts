import { createSwaggerSpec } from 'next-swagger-doc'

export function getApiDocs() {
  return createSwaggerSpec({
    apiFolder: 'src/app/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'ALL ALL 2 — API Documentation',
        version: '1.0.0',
        description: 'Documentation des API du site ALL ALL 2',
      },
      tags: [
        { name: 'Auth', description: 'Authentification admin' },
        { name: 'Articles', description: 'Gestion des articles' },
        { name: 'Categories', description: 'Gestion des catégories' },
        { name: 'Comments', description: 'Gestion des commentaires' },
        { name: 'Likes', description: 'Gestion des likes' },
        { name: 'Admin', description: 'Actions admin protégées' },
      ],
      components: {
        securitySchemes: {
          cookieAuth: {
            type: 'apiKey',
            in: 'cookie',
            name: 'sb-access-token',
          },
        },
      },
    },
  })
}