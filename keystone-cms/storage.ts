import type { StorageConfig } from "@keystone-6/core/types";
import { config } from '@keystone-6/core';
import dotenv from 'dotenv';

import type { ImageData } from "@keystone-6/core/types";


export const images = {
    kind: 'local',
    type: 'image',
    generateUrl: (path: string) => `${process.env.baseUrl}/images${path}`,
    serverRoute: {
        path: '/images',
    },
    storagePath: 'public/images',
}  