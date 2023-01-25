
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import {
    text,
    relationship,
    password,
    timestamp,
    select,
    image,
} from '@keystone-6/core/fields';


import { document } from '@keystone-6/fields-document';


import type { Lists } from '.keystone/types';


export const lists: Lists = {

    ProductsList: list({
        access: allowAll,
        fields: {
            productName: text({ validation: { isRequired: true } }),
            productPriceBGN: text({ validation: { isRequired: true } }),
            productDescription: text({ validation: { isRequired: true } }),
            ProductNote: text({ validation: { isRequired: true } }),
            altText: text(),
            image: image({ storage: 'my_local_images' }),
        },

        ui: {
            labelField: 'productName',
            searchFields: ['productName'],
            description: '...',

            label: "Prodcuts",
            singular: "Product",
            plural: "Products",
            path: 'products-list'
        }
    }),

    NewsList: list({
        access: allowAll,

        fields: {
            title: text({ validation: { isRequired: true } }),
            slug: text({ validation: { isRequired: true } }),
            description: text({ validation: { isRequired: true } }),
            content: document({
                formatting: true,
                layouts: [
                    [1, 1],
                    [1, 1, 1],
                    [2, 1],
                    [1, 2],
                    [1, 2, 1],
                ],
                links: true,
                dividers: true,
            }),
            createdAt: timestamp({
                defaultValue: { kind: 'now' },
            }),

        },
        ui: {
            labelField: 'title',
            searchFields: ['title'],
            description: '...',
            isHidden: ({ session, context }) => false,
            hideCreate: ({ session, context }) => false,
            hideDelete: ({ session, context }) => false,
            createView: {
                defaultFieldMode: ({ session, context }) => 'edit',
            },
            itemView: {
                defaultFieldMode: ({ session, context, item }) => 'edit',
            },
            listView: {
                defaultFieldMode: ({ session, context }) => 'read',
                initialColumns: ['title', /* ... */],
                initialSort: { field: 'title', direction: 'ASC' },
                pageSize: 50,
            },
            label: "News",
            singular: "Item",
            plural: "Items",
            path: 'news-list'
        }
    }),


    User: list({
        access: allowAll,

        fields: {
            name: text({ validation: { isRequired: true } }),

            email: text({
                validation: { isRequired: true },
                isIndexed: 'unique',
            }),

            password: password({ validation: { isRequired: true } }),

            posts: relationship({ ref: 'Post.author', many: true }),

            createdAt: timestamp({
                defaultValue: { kind: 'now' },
            }),
        },
    }),

    Post: list({
        access: allowAll,

        fields: {
            title: text({ validation: { isRequired: true } }),

            content: document({
                formatting: true,
                layouts: [
                    [1, 1],
                    [1, 1, 1],
                    [2, 1],
                    [1, 2],
                    [1, 2, 1],
                ],
                links: true,
                dividers: true,
            }),

            author: relationship({
                ref: 'User.posts',

                ui: {
                    displayMode: 'cards',
                    cardFields: ['name', 'email'],
                    inlineEdit: { fields: ['name', 'email'] },
                    linkToItem: true,
                    inlineConnect: true,
                },
                many: false,
            }),

            tags: relationship({
                ref: 'Tag.posts',

                many: true,

                ui: {
                    displayMode: 'cards',
                    cardFields: ['name'],
                    inlineEdit: { fields: ['name'] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ['name'] },
                },
            }),
        },
    }),

    // this last list is our Tag list, it only has a name field for now
    Tag: list({

        access: allowAll,

        // setting this to isHidden for the user interface prevents this list being visible in the Admin UI
        ui: {
            isHidden: false,
        },

        // this is the fields for our Tag list
        fields: {
            name: text(),
            // this can be helpful to find out all the Posts associated with a Tag
            posts: relationship({ ref: 'Post.tags', many: true }),
        },
    }),
};
