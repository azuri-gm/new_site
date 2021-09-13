import { BlogsResponse } from '@/common/types';
import {
  ContentfulClientApi,
  createClient,
  Entry,
  EntryCollection,
} from 'contentful';

const space: string = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '';
const accessToken: string =
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '';

const client: ContentfulClientApi = createClient({
  space,
  accessToken,
});

export const fetchPosts = async (): Promise<Entry<BlogsResponse>[]> => {
  const entries: EntryCollection<BlogsResponse> = await client.getEntries();
  const posts = entries.items ?? {};
  return posts;
};