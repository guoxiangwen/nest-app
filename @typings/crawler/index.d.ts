// declare module 'crawler' {
//   import { IncomingMessage } from 'http';

//   export interface CrawlerResponse extends IncomingMessage {
//     $: any;
//     options: CrawlerOptions;
//     request: any;
//   }

//   export type CrawlerCallback = (
//     error: Error,
//     res: CrawlerResponse,
//     done: () => unknown
//   ) => void;

//   interface JQueryObject {
//     name: string;
//     options: {
//       normalizeWhitespace?: boolean;
//       xmlMode?: boolean;
//       decodeEntities?: boolean;
//     };
//   }

//   type JQuery = boolean | 'cheerio' | JQueryObject;

//   export interface CrawlerOptions {
//     uri?: string;
//     autoWindowClose?: boolean;
//     forceUTF8?: boolean;
//     gzip?: boolean;
//     incomingEncoding?: string;
//     jQuery?: JQuery;
//     maxConnections?: number;
//     method?: string;
//     priority?: number;
//     priorityRange?: number;
//     rateLimit?: number;
//     referer?: boolean;
//     retries?: number;
//     retryTimeout?: number;
//     timeout?: number;
//     skipDuplicates?: boolean;
//     rotateUA?: boolean;
//     homogeneous?: boolean;
//     callback?: CrawlerCallback;
//   }

//   class Crawler {
//     constructor(options: CrawlerOptions);
//     queue(options: string | string[] | CrawlerOptions | CrawlerOptions[]): void;
//   }

//   export default Crawler;
// }
