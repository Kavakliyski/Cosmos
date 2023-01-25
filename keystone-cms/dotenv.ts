import { config } from '@keystone-6/core';
import * as dotenv from 'dotenv';
import { lists } from './schema';

dotenv.config();

export const {
    ASSET_BASE_URL: baseUrl = 'http://localhost:3000',
} = process.env;