
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model comments
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model post_tags
 * 
 */
export type post_tags = $Result.DefaultSelection<Prisma.$post_tagsPayload>
/**
 * Model posts
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model like
 * 
 */
export type like = $Result.DefaultSelection<Prisma.$likePayload>
/**
 * Model settings
 * 
 */
export type settings = $Result.DefaultSelection<Prisma.$settingsPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post_tags`: Exposes CRUD operations for the **post_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Post_tags
    * const post_tags = await prisma.post_tags.findMany()
    * ```
    */
  get post_tags(): Prisma.post_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.likeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.settingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    categories: 'categories',
    comments: 'comments',
    post_tags: 'post_tags',
    posts: 'posts',
    like: 'like',
    settings: 'settings',
    tags: 'tags',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categories" | "comments" | "post_tags" | "posts" | "like" | "settings" | "tags" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      post_tags: {
        payload: Prisma.$post_tagsPayload<ExtArgs>
        fields: Prisma.post_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.post_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.post_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>
          }
          findFirst: {
            args: Prisma.post_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.post_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>
          }
          findMany: {
            args: Prisma.post_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>[]
          }
          create: {
            args: Prisma.post_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>
          }
          createMany: {
            args: Prisma.post_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.post_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>[]
          }
          delete: {
            args: Prisma.post_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>
          }
          update: {
            args: Prisma.post_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>
          }
          deleteMany: {
            args: Prisma.post_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.post_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.post_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>[]
          }
          upsert: {
            args: Prisma.post_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagsPayload>
          }
          aggregate: {
            args: Prisma.Post_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost_tags>
          }
          groupBy: {
            args: Prisma.post_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Post_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.post_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Post_tagsCountAggregateOutputType> | number
          }
        }
      }
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.postsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.postsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      like: {
        payload: Prisma.$likePayload<ExtArgs>
        fields: Prisma.likeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.likeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.likeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          findFirst: {
            args: Prisma.likeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.likeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          findMany: {
            args: Prisma.likeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>[]
          }
          create: {
            args: Prisma.likeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          createMany: {
            args: Prisma.likeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.likeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>[]
          }
          delete: {
            args: Prisma.likeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          update: {
            args: Prisma.likeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          deleteMany: {
            args: Prisma.likeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.likeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.likeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>[]
          }
          upsert: {
            args: Prisma.likeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.likeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.likeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      settings: {
        payload: Prisma.$settingsPayload<ExtArgs>
        fields: Prisma.settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findFirst: {
            args: Prisma.settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findMany: {
            args: Prisma.settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          create: {
            args: Prisma.settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          createMany: {
            args: Prisma.settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.settingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          delete: {
            args: Prisma.settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          update: {
            args: Prisma.settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          deleteMany: {
            args: Prisma.settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.settingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          upsert: {
            args: Prisma.settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.settingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categories?: categoriesOmit
    comments?: commentsOmit
    post_tags?: post_tagsOmit
    posts?: postsOmit
    like?: likeOmit
    settings?: settingsOmit
    tags?: tagsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    posts: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CategoriesCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }


  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    other_comments: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_comments?: boolean | CommentsCountOutputTypeCountOther_commentsArgs
  }

  // Custom InputTypes
  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountOther_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    likes: number
    comments: number
    post_tags: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | PostsCountOutputTypeCountLikesArgs
    comments?: boolean | PostsCountOutputTypeCountCommentsArgs
    post_tags?: boolean | PostsCountOutputTypeCountPost_tagsArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likeWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountPost_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_tagsWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    post_tags: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_tags?: boolean | TagsCountOutputTypeCountPost_tagsArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountPost_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_tagsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    comments: number
    posts: number
    likes: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    posts?: boolean | UsersCountOutputTypeCountPostsArgs
    likes?: boolean | UsersCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    category_id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    category_id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    category_id: number | null
    name: string | null
    slug: string | null
    description: string | null
    created_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    category_id: number | null
    name: string | null
    slug: string | null
    description: string | null
    created_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    category_id: number
    name: number
    slug: number
    description: number
    created_at: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    category_id?: true
  }

  export type CategoriesSumAggregateInputType = {
    category_id?: true
  }

  export type CategoriesMinAggregateInputType = {
    category_id?: true
    name?: true
    slug?: true
    description?: true
    created_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    category_id?: true
    name?: true
    slug?: true
    description?: true
    created_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    category_id?: true
    name?: true
    slug?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    category_id: number
    name: string
    slug: string
    description: string | null
    created_at: Date | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    created_at?: boolean
    posts?: boolean | categories$postsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    category_id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "name" | "slug" | "description" | "created_at", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | categories$postsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      posts: Prisma.$postsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      name: string
      slug: string
      description: string | null
      created_at: Date | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.updateManyAndReturn({
     *   select: { category_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends categories$postsArgs<ExtArgs> = {}>(args?: Subset<T, categories$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly category_id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
    readonly slug: FieldRef<"categories", 'String'>
    readonly description: FieldRef<"categories", 'String'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.posts
   */
  export type categories$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    comment_id: number | null
    post_id: number | null
    user_id: number | null
    parent_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    comment_id: number | null
    post_id: number | null
    user_id: number | null
    parent_id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    comment_id: number | null
    post_id: number | null
    user_id: number | null
    author_name: string | null
    author_email: string | null
    content: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    parent_id: number | null
  }

  export type CommentsMaxAggregateOutputType = {
    comment_id: number | null
    post_id: number | null
    user_id: number | null
    author_name: string | null
    author_email: string | null
    content: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    parent_id: number | null
  }

  export type CommentsCountAggregateOutputType = {
    comment_id: number
    post_id: number
    user_id: number
    author_name: number
    author_email: number
    content: number
    status: number
    created_at: number
    updated_at: number
    parent_id: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    comment_id?: true
    post_id?: true
    user_id?: true
    parent_id?: true
  }

  export type CommentsSumAggregateInputType = {
    comment_id?: true
    post_id?: true
    user_id?: true
    parent_id?: true
  }

  export type CommentsMinAggregateInputType = {
    comment_id?: true
    post_id?: true
    user_id?: true
    author_name?: true
    author_email?: true
    content?: true
    status?: true
    created_at?: true
    updated_at?: true
    parent_id?: true
  }

  export type CommentsMaxAggregateInputType = {
    comment_id?: true
    post_id?: true
    user_id?: true
    author_name?: true
    author_email?: true
    content?: true
    status?: true
    created_at?: true
    updated_at?: true
    parent_id?: true
  }

  export type CommentsCountAggregateInputType = {
    comment_id?: true
    post_id?: true
    user_id?: true
    author_name?: true
    author_email?: true
    content?: true
    status?: true
    created_at?: true
    updated_at?: true
    parent_id?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    comment_id: number
    post_id: number
    user_id: number | null
    author_name: string | null
    author_email: string | null
    content: string
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    parent_id: number | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    post_id?: boolean
    user_id?: boolean
    author_name?: boolean
    author_email?: boolean
    content?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent_id?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    other_comments?: boolean | comments$other_commentsArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    post_id?: boolean
    user_id?: boolean
    author_name?: boolean
    author_email?: boolean
    content?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent_id?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    post_id?: boolean
    user_id?: boolean
    author_name?: boolean
    author_email?: boolean
    content?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent_id?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    comment_id?: boolean
    post_id?: boolean
    user_id?: boolean
    author_name?: boolean
    author_email?: boolean
    content?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent_id?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_id" | "post_id" | "user_id" | "author_name" | "author_email" | "content" | "status" | "created_at" | "updated_at" | "parent_id", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    other_comments?: boolean | comments$other_commentsArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs> | null
      other_comments: Prisma.$commentsPayload<ExtArgs>[]
      posts: Prisma.$postsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      comment_id: number
      post_id: number
      user_id: number | null
      author_name: string | null
      author_email: string | null
      content: string
      status: string | null
      created_at: Date | null
      updated_at: Date | null
      parent_id: number | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.findMany({ select: { comment_id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.createManyAndReturn({
     *   select: { comment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.updateManyAndReturn({
     *   select: { comment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends comments$commentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$commentsArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_comments<T extends comments$other_commentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$other_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends comments$usersArgs<ExtArgs> = {}>(args?: Subset<T, comments$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly comment_id: FieldRef<"comments", 'Int'>
    readonly post_id: FieldRef<"comments", 'Int'>
    readonly user_id: FieldRef<"comments", 'Int'>
    readonly author_name: FieldRef<"comments", 'String'>
    readonly author_email: FieldRef<"comments", 'String'>
    readonly content: FieldRef<"comments", 'String'>
    readonly status: FieldRef<"comments", 'String'>
    readonly created_at: FieldRef<"comments", 'DateTime'>
    readonly updated_at: FieldRef<"comments", 'DateTime'>
    readonly parent_id: FieldRef<"comments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments.comments
   */
  export type comments$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
  }

  /**
   * comments.other_comments
   */
  export type comments$other_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments.users
   */
  export type comments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model post_tags
   */

  export type AggregatePost_tags = {
    _count: Post_tagsCountAggregateOutputType | null
    _avg: Post_tagsAvgAggregateOutputType | null
    _sum: Post_tagsSumAggregateOutputType | null
    _min: Post_tagsMinAggregateOutputType | null
    _max: Post_tagsMaxAggregateOutputType | null
  }

  export type Post_tagsAvgAggregateOutputType = {
    post_id: number | null
    tag_id: number | null
  }

  export type Post_tagsSumAggregateOutputType = {
    post_id: number | null
    tag_id: number | null
  }

  export type Post_tagsMinAggregateOutputType = {
    post_id: number | null
    tag_id: number | null
  }

  export type Post_tagsMaxAggregateOutputType = {
    post_id: number | null
    tag_id: number | null
  }

  export type Post_tagsCountAggregateOutputType = {
    post_id: number
    tag_id: number
    _all: number
  }


  export type Post_tagsAvgAggregateInputType = {
    post_id?: true
    tag_id?: true
  }

  export type Post_tagsSumAggregateInputType = {
    post_id?: true
    tag_id?: true
  }

  export type Post_tagsMinAggregateInputType = {
    post_id?: true
    tag_id?: true
  }

  export type Post_tagsMaxAggregateInputType = {
    post_id?: true
    tag_id?: true
  }

  export type Post_tagsCountAggregateInputType = {
    post_id?: true
    tag_id?: true
    _all?: true
  }

  export type Post_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_tags to aggregate.
     */
    where?: post_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_tags to fetch.
     */
    orderBy?: post_tagsOrderByWithRelationInput | post_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: post_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned post_tags
    **/
    _count?: true | Post_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Post_tagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Post_tagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Post_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Post_tagsMaxAggregateInputType
  }

  export type GetPost_tagsAggregateType<T extends Post_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregatePost_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost_tags[P]>
      : GetScalarType<T[P], AggregatePost_tags[P]>
  }




  export type post_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_tagsWhereInput
    orderBy?: post_tagsOrderByWithAggregationInput | post_tagsOrderByWithAggregationInput[]
    by: Post_tagsScalarFieldEnum[] | Post_tagsScalarFieldEnum
    having?: post_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Post_tagsCountAggregateInputType | true
    _avg?: Post_tagsAvgAggregateInputType
    _sum?: Post_tagsSumAggregateInputType
    _min?: Post_tagsMinAggregateInputType
    _max?: Post_tagsMaxAggregateInputType
  }

  export type Post_tagsGroupByOutputType = {
    post_id: number
    tag_id: number
    _count: Post_tagsCountAggregateOutputType | null
    _avg: Post_tagsAvgAggregateOutputType | null
    _sum: Post_tagsSumAggregateOutputType | null
    _min: Post_tagsMinAggregateOutputType | null
    _max: Post_tagsMaxAggregateOutputType | null
  }

  type GetPost_tagsGroupByPayload<T extends post_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Post_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Post_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Post_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Post_tagsGroupByOutputType[P]>
        }
      >
    >


  export type post_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    tag_id?: boolean
    posts?: boolean | postsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_tags"]>

  export type post_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    tag_id?: boolean
    posts?: boolean | postsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_tags"]>

  export type post_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    tag_id?: boolean
    posts?: boolean | postsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_tags"]>

  export type post_tagsSelectScalar = {
    post_id?: boolean
    tag_id?: boolean
  }

  export type post_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "tag_id", ExtArgs["result"]["post_tags"]>
  export type post_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | postsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type post_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | postsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type post_tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | postsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $post_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "post_tags"
    objects: {
      posts: Prisma.$postsPayload<ExtArgs>
      tags: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: number
      tag_id: number
    }, ExtArgs["result"]["post_tags"]>
    composites: {}
  }

  type post_tagsGetPayload<S extends boolean | null | undefined | post_tagsDefaultArgs> = $Result.GetResult<Prisma.$post_tagsPayload, S>

  type post_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<post_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Post_tagsCountAggregateInputType | true
    }

  export interface post_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['post_tags'], meta: { name: 'post_tags' } }
    /**
     * Find zero or one Post_tags that matches the filter.
     * @param {post_tagsFindUniqueArgs} args - Arguments to find a Post_tags
     * @example
     * // Get one Post_tags
     * const post_tags = await prisma.post_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends post_tagsFindUniqueArgs>(args: SelectSubset<T, post_tagsFindUniqueArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {post_tagsFindUniqueOrThrowArgs} args - Arguments to find a Post_tags
     * @example
     * // Get one Post_tags
     * const post_tags = await prisma.post_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends post_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, post_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagsFindFirstArgs} args - Arguments to find a Post_tags
     * @example
     * // Get one Post_tags
     * const post_tags = await prisma.post_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends post_tagsFindFirstArgs>(args?: SelectSubset<T, post_tagsFindFirstArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagsFindFirstOrThrowArgs} args - Arguments to find a Post_tags
     * @example
     * // Get one Post_tags
     * const post_tags = await prisma.post_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends post_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, post_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Post_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Post_tags
     * const post_tags = await prisma.post_tags.findMany()
     * 
     * // Get first 10 Post_tags
     * const post_tags = await prisma.post_tags.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const post_tagsWithPost_idOnly = await prisma.post_tags.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends post_tagsFindManyArgs>(args?: SelectSubset<T, post_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post_tags.
     * @param {post_tagsCreateArgs} args - Arguments to create a Post_tags.
     * @example
     * // Create one Post_tags
     * const Post_tags = await prisma.post_tags.create({
     *   data: {
     *     // ... data to create a Post_tags
     *   }
     * })
     * 
     */
    create<T extends post_tagsCreateArgs>(args: SelectSubset<T, post_tagsCreateArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Post_tags.
     * @param {post_tagsCreateManyArgs} args - Arguments to create many Post_tags.
     * @example
     * // Create many Post_tags
     * const post_tags = await prisma.post_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends post_tagsCreateManyArgs>(args?: SelectSubset<T, post_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Post_tags and returns the data saved in the database.
     * @param {post_tagsCreateManyAndReturnArgs} args - Arguments to create many Post_tags.
     * @example
     * // Create many Post_tags
     * const post_tags = await prisma.post_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Post_tags and only return the `post_id`
     * const post_tagsWithPost_idOnly = await prisma.post_tags.createManyAndReturn({
     *   select: { post_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends post_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, post_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post_tags.
     * @param {post_tagsDeleteArgs} args - Arguments to delete one Post_tags.
     * @example
     * // Delete one Post_tags
     * const Post_tags = await prisma.post_tags.delete({
     *   where: {
     *     // ... filter to delete one Post_tags
     *   }
     * })
     * 
     */
    delete<T extends post_tagsDeleteArgs>(args: SelectSubset<T, post_tagsDeleteArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post_tags.
     * @param {post_tagsUpdateArgs} args - Arguments to update one Post_tags.
     * @example
     * // Update one Post_tags
     * const post_tags = await prisma.post_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends post_tagsUpdateArgs>(args: SelectSubset<T, post_tagsUpdateArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Post_tags.
     * @param {post_tagsDeleteManyArgs} args - Arguments to filter Post_tags to delete.
     * @example
     * // Delete a few Post_tags
     * const { count } = await prisma.post_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends post_tagsDeleteManyArgs>(args?: SelectSubset<T, post_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Post_tags
     * const post_tags = await prisma.post_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends post_tagsUpdateManyArgs>(args: SelectSubset<T, post_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_tags and returns the data updated in the database.
     * @param {post_tagsUpdateManyAndReturnArgs} args - Arguments to update many Post_tags.
     * @example
     * // Update many Post_tags
     * const post_tags = await prisma.post_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Post_tags and only return the `post_id`
     * const post_tagsWithPost_idOnly = await prisma.post_tags.updateManyAndReturn({
     *   select: { post_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends post_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, post_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post_tags.
     * @param {post_tagsUpsertArgs} args - Arguments to update or create a Post_tags.
     * @example
     * // Update or create a Post_tags
     * const post_tags = await prisma.post_tags.upsert({
     *   create: {
     *     // ... data to create a Post_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post_tags we want to update
     *   }
     * })
     */
    upsert<T extends post_tagsUpsertArgs>(args: SelectSubset<T, post_tagsUpsertArgs<ExtArgs>>): Prisma__post_tagsClient<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Post_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagsCountArgs} args - Arguments to filter Post_tags to count.
     * @example
     * // Count the number of Post_tags
     * const count = await prisma.post_tags.count({
     *   where: {
     *     // ... the filter for the Post_tags we want to count
     *   }
     * })
    **/
    count<T extends post_tagsCountArgs>(
      args?: Subset<T, post_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Post_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Post_tagsAggregateArgs>(args: Subset<T, Post_tagsAggregateArgs>): Prisma.PrismaPromise<GetPost_tagsAggregateType<T>>

    /**
     * Group by Post_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends post_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: post_tagsGroupByArgs['orderBy'] }
        : { orderBy?: post_tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, post_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPost_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the post_tags model
   */
  readonly fields: post_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for post_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__post_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the post_tags model
   */
  interface post_tagsFieldRefs {
    readonly post_id: FieldRef<"post_tags", 'Int'>
    readonly tag_id: FieldRef<"post_tags", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * post_tags findUnique
   */
  export type post_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * Filter, which post_tags to fetch.
     */
    where: post_tagsWhereUniqueInput
  }

  /**
   * post_tags findUniqueOrThrow
   */
  export type post_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * Filter, which post_tags to fetch.
     */
    where: post_tagsWhereUniqueInput
  }

  /**
   * post_tags findFirst
   */
  export type post_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * Filter, which post_tags to fetch.
     */
    where?: post_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_tags to fetch.
     */
    orderBy?: post_tagsOrderByWithRelationInput | post_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_tags.
     */
    cursor?: post_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_tags.
     */
    distinct?: Post_tagsScalarFieldEnum | Post_tagsScalarFieldEnum[]
  }

  /**
   * post_tags findFirstOrThrow
   */
  export type post_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * Filter, which post_tags to fetch.
     */
    where?: post_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_tags to fetch.
     */
    orderBy?: post_tagsOrderByWithRelationInput | post_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_tags.
     */
    cursor?: post_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_tags.
     */
    distinct?: Post_tagsScalarFieldEnum | Post_tagsScalarFieldEnum[]
  }

  /**
   * post_tags findMany
   */
  export type post_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * Filter, which post_tags to fetch.
     */
    where?: post_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_tags to fetch.
     */
    orderBy?: post_tagsOrderByWithRelationInput | post_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing post_tags.
     */
    cursor?: post_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_tags.
     */
    skip?: number
    distinct?: Post_tagsScalarFieldEnum | Post_tagsScalarFieldEnum[]
  }

  /**
   * post_tags create
   */
  export type post_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a post_tags.
     */
    data: XOR<post_tagsCreateInput, post_tagsUncheckedCreateInput>
  }

  /**
   * post_tags createMany
   */
  export type post_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many post_tags.
     */
    data: post_tagsCreateManyInput | post_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * post_tags createManyAndReturn
   */
  export type post_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many post_tags.
     */
    data: post_tagsCreateManyInput | post_tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_tags update
   */
  export type post_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a post_tags.
     */
    data: XOR<post_tagsUpdateInput, post_tagsUncheckedUpdateInput>
    /**
     * Choose, which post_tags to update.
     */
    where: post_tagsWhereUniqueInput
  }

  /**
   * post_tags updateMany
   */
  export type post_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update post_tags.
     */
    data: XOR<post_tagsUpdateManyMutationInput, post_tagsUncheckedUpdateManyInput>
    /**
     * Filter which post_tags to update
     */
    where?: post_tagsWhereInput
    /**
     * Limit how many post_tags to update.
     */
    limit?: number
  }

  /**
   * post_tags updateManyAndReturn
   */
  export type post_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * The data used to update post_tags.
     */
    data: XOR<post_tagsUpdateManyMutationInput, post_tagsUncheckedUpdateManyInput>
    /**
     * Filter which post_tags to update
     */
    where?: post_tagsWhereInput
    /**
     * Limit how many post_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_tags upsert
   */
  export type post_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the post_tags to update in case it exists.
     */
    where: post_tagsWhereUniqueInput
    /**
     * In case the post_tags found by the `where` argument doesn't exist, create a new post_tags with this data.
     */
    create: XOR<post_tagsCreateInput, post_tagsUncheckedCreateInput>
    /**
     * In case the post_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<post_tagsUpdateInput, post_tagsUncheckedUpdateInput>
  }

  /**
   * post_tags delete
   */
  export type post_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    /**
     * Filter which post_tags to delete.
     */
    where: post_tagsWhereUniqueInput
  }

  /**
   * post_tags deleteMany
   */
  export type post_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_tags to delete
     */
    where?: post_tagsWhereInput
    /**
     * Limit how many post_tags to delete.
     */
    limit?: number
  }

  /**
   * post_tags without action
   */
  export type post_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
  }


  /**
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    post_id: number | null
    likeCount: number | null
    author_id: number | null
    category_id: number | null
  }

  export type PostsSumAggregateOutputType = {
    post_id: number | null
    likeCount: number | null
    author_id: number | null
    category_id: number | null
  }

  export type PostsMinAggregateOutputType = {
    post_id: number | null
    title: string | null
    likeCount: number | null
    excerpt: string | null
    content: string | null
    author_id: number | null
    category_id: number | null
    status: string | null
    published_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    featured_image_url: string | null
    meta_title: string | null
    meta_description: string | null
  }

  export type PostsMaxAggregateOutputType = {
    post_id: number | null
    title: string | null
    likeCount: number | null
    excerpt: string | null
    content: string | null
    author_id: number | null
    category_id: number | null
    status: string | null
    published_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    featured_image_url: string | null
    meta_title: string | null
    meta_description: string | null
  }

  export type PostsCountAggregateOutputType = {
    post_id: number
    title: number
    likeCount: number
    excerpt: number
    content: number
    author_id: number
    category_id: number
    status: number
    published_at: number
    created_at: number
    updated_at: number
    featured_image_url: number
    meta_title: number
    meta_description: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    post_id?: true
    likeCount?: true
    author_id?: true
    category_id?: true
  }

  export type PostsSumAggregateInputType = {
    post_id?: true
    likeCount?: true
    author_id?: true
    category_id?: true
  }

  export type PostsMinAggregateInputType = {
    post_id?: true
    title?: true
    likeCount?: true
    excerpt?: true
    content?: true
    author_id?: true
    category_id?: true
    status?: true
    published_at?: true
    created_at?: true
    updated_at?: true
    featured_image_url?: true
    meta_title?: true
    meta_description?: true
  }

  export type PostsMaxAggregateInputType = {
    post_id?: true
    title?: true
    likeCount?: true
    excerpt?: true
    content?: true
    author_id?: true
    category_id?: true
    status?: true
    published_at?: true
    created_at?: true
    updated_at?: true
    featured_image_url?: true
    meta_title?: true
    meta_description?: true
  }

  export type PostsCountAggregateInputType = {
    post_id?: true
    title?: true
    likeCount?: true
    excerpt?: true
    content?: true
    author_id?: true
    category_id?: true
    status?: true
    published_at?: true
    created_at?: true
    updated_at?: true
    featured_image_url?: true
    meta_title?: true
    meta_description?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    post_id: number
    title: string
    likeCount: number
    excerpt: string | null
    content: string
    author_id: number
    category_id: number | null
    status: string | null
    published_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    featured_image_url: string | null
    meta_title: string | null
    meta_description: string | null
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    title?: boolean
    likeCount?: boolean
    excerpt?: boolean
    content?: boolean
    author_id?: boolean
    category_id?: boolean
    status?: boolean
    published_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    featured_image_url?: boolean
    meta_title?: boolean
    meta_description?: boolean
    likes?: boolean | posts$likesArgs<ExtArgs>
    comments?: boolean | posts$commentsArgs<ExtArgs>
    post_tags?: boolean | posts$post_tagsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    categories?: boolean | posts$categoriesArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    title?: boolean
    likeCount?: boolean
    excerpt?: boolean
    content?: boolean
    author_id?: boolean
    category_id?: boolean
    status?: boolean
    published_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    featured_image_url?: boolean
    meta_title?: boolean
    meta_description?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    categories?: boolean | posts$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    title?: boolean
    likeCount?: boolean
    excerpt?: boolean
    content?: boolean
    author_id?: boolean
    category_id?: boolean
    status?: boolean
    published_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    featured_image_url?: boolean
    meta_title?: boolean
    meta_description?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    categories?: boolean | posts$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectScalar = {
    post_id?: boolean
    title?: boolean
    likeCount?: boolean
    excerpt?: boolean
    content?: boolean
    author_id?: boolean
    category_id?: boolean
    status?: boolean
    published_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    featured_image_url?: boolean
    meta_title?: boolean
    meta_description?: boolean
  }

  export type postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "title" | "likeCount" | "excerpt" | "content" | "author_id" | "category_id" | "status" | "published_at" | "created_at" | "updated_at" | "featured_image_url" | "meta_title" | "meta_description", ExtArgs["result"]["posts"]>
  export type postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | posts$likesArgs<ExtArgs>
    comments?: boolean | posts$commentsArgs<ExtArgs>
    post_tags?: boolean | posts$post_tagsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    categories?: boolean | posts$categoriesArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type postsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    categories?: boolean | posts$categoriesArgs<ExtArgs>
  }
  export type postsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    categories?: boolean | posts$categoriesArgs<ExtArgs>
  }

  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {
      likes: Prisma.$likePayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs>[]
      post_tags: Prisma.$post_tagsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      categories: Prisma.$categoriesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: number
      title: string
      likeCount: number
      excerpt: string | null
      content: string
      author_id: number
      category_id: number | null
      status: string | null
      published_at: Date | null
      created_at: Date | null
      updated_at: Date | null
      featured_image_url: string | null
      meta_title: string | null
      meta_description: string | null
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postsFindUniqueArgs>(args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs>(args: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postsFindFirstArgs>(args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs>(args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const postsWithPost_idOnly = await prisma.posts.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends postsFindManyArgs>(args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends postsCreateArgs>(args: SelectSubset<T, postsCreateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {postsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postsCreateManyArgs>(args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {postsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `post_id`
     * const postsWithPost_idOnly = await prisma.posts.createManyAndReturn({
     *   select: { post_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends postsCreateManyAndReturnArgs>(args?: SelectSubset<T, postsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends postsDeleteArgs>(args: SelectSubset<T, postsDeleteArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postsUpdateArgs>(args: SelectSubset<T, postsUpdateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postsDeleteManyArgs>(args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postsUpdateManyArgs>(args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {postsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `post_id`
     * const postsWithPost_idOnly = await prisma.posts.updateManyAndReturn({
     *   select: { post_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends postsUpdateManyAndReturnArgs>(args: SelectSubset<T, postsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends postsUpsertArgs>(args: SelectSubset<T, postsUpsertArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likes<T extends posts$likesArgs<ExtArgs> = {}>(args?: Subset<T, posts$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends posts$commentsArgs<ExtArgs> = {}>(args?: Subset<T, posts$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post_tags<T extends posts$post_tagsArgs<ExtArgs> = {}>(args?: Subset<T, posts$post_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends posts$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, posts$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the posts model
   */
  interface postsFieldRefs {
    readonly post_id: FieldRef<"posts", 'Int'>
    readonly title: FieldRef<"posts", 'String'>
    readonly likeCount: FieldRef<"posts", 'Int'>
    readonly excerpt: FieldRef<"posts", 'String'>
    readonly content: FieldRef<"posts", 'String'>
    readonly author_id: FieldRef<"posts", 'Int'>
    readonly category_id: FieldRef<"posts", 'Int'>
    readonly status: FieldRef<"posts", 'String'>
    readonly published_at: FieldRef<"posts", 'DateTime'>
    readonly created_at: FieldRef<"posts", 'DateTime'>
    readonly updated_at: FieldRef<"posts", 'DateTime'>
    readonly featured_image_url: FieldRef<"posts", 'String'>
    readonly meta_title: FieldRef<"posts", 'String'>
    readonly meta_description: FieldRef<"posts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }

  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts createManyAndReturn
   */
  export type postsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * posts updateManyAndReturn
   */
  export type postsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }

  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to delete.
     */
    limit?: number
  }

  /**
   * posts.likes
   */
  export type posts$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    where?: likeWhereInput
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    cursor?: likeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * posts.comments
   */
  export type posts$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * posts.post_tags
   */
  export type posts$post_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    where?: post_tagsWhereInput
    orderBy?: post_tagsOrderByWithRelationInput | post_tagsOrderByWithRelationInput[]
    cursor?: post_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_tagsScalarFieldEnum | Post_tagsScalarFieldEnum[]
  }

  /**
   * posts.categories
   */
  export type posts$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
  }


  /**
   * Model like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    like_id: number | null
    post_id: number | null
    user_id: number | null
  }

  export type LikeSumAggregateOutputType = {
    like_id: number | null
    post_id: number | null
    user_id: number | null
  }

  export type LikeMinAggregateOutputType = {
    like_id: number | null
    post_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    like_id: number | null
    post_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type LikeCountAggregateOutputType = {
    like_id: number
    post_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    like_id?: true
    post_id?: true
    user_id?: true
  }

  export type LikeSumAggregateInputType = {
    like_id?: true
    post_id?: true
    user_id?: true
  }

  export type LikeMinAggregateInputType = {
    like_id?: true
    post_id?: true
    user_id?: true
    created_at?: true
  }

  export type LikeMaxAggregateInputType = {
    like_id?: true
    post_id?: true
    user_id?: true
    created_at?: true
  }

  export type LikeCountAggregateInputType = {
    like_id?: true
    post_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which like to aggregate.
     */
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type likeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likeWhereInput
    orderBy?: likeOrderByWithAggregationInput | likeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: likeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    like_id: number
    post_id: number
    user_id: number
    created_at: Date
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends likeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type likeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    like_id?: boolean
    post_id?: boolean
    user_id?: boolean
    created_at?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type likeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    like_id?: boolean
    post_id?: boolean
    user_id?: boolean
    created_at?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type likeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    like_id?: boolean
    post_id?: boolean
    user_id?: boolean
    created_at?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type likeSelectScalar = {
    like_id?: boolean
    post_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type likeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"like_id" | "post_id" | "user_id" | "created_at", ExtArgs["result"]["like"]>
  export type likeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type likeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type likeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $likePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "like"
    objects: {
      post: Prisma.$postsPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      like_id: number
      post_id: number
      user_id: number
      created_at: Date
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type likeGetPayload<S extends boolean | null | undefined | likeDefaultArgs> = $Result.GetResult<Prisma.$likePayload, S>

  type likeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<likeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface likeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['like'], meta: { name: 'like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {likeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends likeFindUniqueArgs>(args: SelectSubset<T, likeFindUniqueArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {likeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends likeFindUniqueOrThrowArgs>(args: SelectSubset<T, likeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends likeFindFirstArgs>(args?: SelectSubset<T, likeFindFirstArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends likeFindFirstOrThrowArgs>(args?: SelectSubset<T, likeFindFirstOrThrowArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `like_id`
     * const likeWithLike_idOnly = await prisma.like.findMany({ select: { like_id: true } })
     * 
     */
    findMany<T extends likeFindManyArgs>(args?: SelectSubset<T, likeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {likeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends likeCreateArgs>(args: SelectSubset<T, likeCreateArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {likeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends likeCreateManyArgs>(args?: SelectSubset<T, likeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {likeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `like_id`
     * const likeWithLike_idOnly = await prisma.like.createManyAndReturn({
     *   select: { like_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends likeCreateManyAndReturnArgs>(args?: SelectSubset<T, likeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Like.
     * @param {likeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends likeDeleteArgs>(args: SelectSubset<T, likeDeleteArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {likeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends likeUpdateArgs>(args: SelectSubset<T, likeUpdateArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {likeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends likeDeleteManyArgs>(args?: SelectSubset<T, likeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends likeUpdateManyArgs>(args: SelectSubset<T, likeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {likeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `like_id`
     * const likeWithLike_idOnly = await prisma.like.updateManyAndReturn({
     *   select: { like_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends likeUpdateManyAndReturnArgs>(args: SelectSubset<T, likeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Like.
     * @param {likeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends likeUpsertArgs>(args: SelectSubset<T, likeUpsertArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends likeCountArgs>(
      args?: Subset<T, likeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends likeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: likeGroupByArgs['orderBy'] }
        : { orderBy?: likeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, likeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the like model
   */
  readonly fields: likeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__likeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the like model
   */
  interface likeFieldRefs {
    readonly like_id: FieldRef<"like", 'Int'>
    readonly post_id: FieldRef<"like", 'Int'>
    readonly user_id: FieldRef<"like", 'Int'>
    readonly created_at: FieldRef<"like", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * like findUnique
   */
  export type likeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which like to fetch.
     */
    where: likeWhereUniqueInput
  }

  /**
   * like findUniqueOrThrow
   */
  export type likeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which like to fetch.
     */
    where: likeWhereUniqueInput
  }

  /**
   * like findFirst
   */
  export type likeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which like to fetch.
     */
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * like findFirstOrThrow
   */
  export type likeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which like to fetch.
     */
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * like findMany
   */
  export type likeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing likes.
     */
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * like create
   */
  export type likeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * The data needed to create a like.
     */
    data: XOR<likeCreateInput, likeUncheckedCreateInput>
  }

  /**
   * like createMany
   */
  export type likeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many likes.
     */
    data: likeCreateManyInput | likeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * like createManyAndReturn
   */
  export type likeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * The data used to create many likes.
     */
    data: likeCreateManyInput | likeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * like update
   */
  export type likeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * The data needed to update a like.
     */
    data: XOR<likeUpdateInput, likeUncheckedUpdateInput>
    /**
     * Choose, which like to update.
     */
    where: likeWhereUniqueInput
  }

  /**
   * like updateMany
   */
  export type likeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update likes.
     */
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likeWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
  }

  /**
   * like updateManyAndReturn
   */
  export type likeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * The data used to update likes.
     */
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likeWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * like upsert
   */
  export type likeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * The filter to search for the like to update in case it exists.
     */
    where: likeWhereUniqueInput
    /**
     * In case the like found by the `where` argument doesn't exist, create a new like with this data.
     */
    create: XOR<likeCreateInput, likeUncheckedCreateInput>
    /**
     * In case the like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<likeUpdateInput, likeUncheckedUpdateInput>
  }

  /**
   * like delete
   */
  export type likeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter which like to delete.
     */
    where: likeWhereUniqueInput
  }

  /**
   * like deleteMany
   */
  export type likeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to delete
     */
    where?: likeWhereInput
    /**
     * Limit how many likes to delete.
     */
    limit?: number
  }

  /**
   * like without action
   */
  export type likeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
  }


  /**
   * Model settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    setting_id: number | null
  }

  export type SettingsSumAggregateOutputType = {
    setting_id: number | null
  }

  export type SettingsMinAggregateOutputType = {
    setting_id: number | null
    setting_key: string | null
    setting_value: string | null
    setting_group: string | null
    is_public: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    setting_id: number | null
    setting_key: string | null
    setting_value: string | null
    setting_group: string | null
    is_public: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    setting_id: number
    setting_key: number
    setting_value: number
    setting_group: number
    is_public: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    setting_id?: true
  }

  export type SettingsSumAggregateInputType = {
    setting_id?: true
  }

  export type SettingsMinAggregateInputType = {
    setting_id?: true
    setting_key?: true
    setting_value?: true
    setting_group?: true
    is_public?: true
    created_at?: true
    updated_at?: true
  }

  export type SettingsMaxAggregateInputType = {
    setting_id?: true
    setting_key?: true
    setting_value?: true
    setting_group?: true
    is_public?: true
    created_at?: true
    updated_at?: true
  }

  export type SettingsCountAggregateInputType = {
    setting_id?: true
    setting_key?: true
    setting_value?: true
    setting_group?: true
    is_public?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to aggregate.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settingsWhereInput
    orderBy?: settingsOrderByWithAggregationInput | settingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    setting_id: number
    setting_key: string
    setting_value: string | null
    setting_group: string | null
    is_public: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    setting_id?: boolean
    setting_key?: boolean
    setting_value?: boolean
    setting_group?: boolean
    is_public?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    setting_id?: boolean
    setting_key?: boolean
    setting_value?: boolean
    setting_group?: boolean
    is_public?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    setting_id?: boolean
    setting_key?: boolean
    setting_value?: boolean
    setting_group?: boolean
    is_public?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectScalar = {
    setting_id?: boolean
    setting_key?: boolean
    setting_value?: boolean
    setting_group?: boolean
    is_public?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type settingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"setting_id" | "setting_key" | "setting_value" | "setting_group" | "is_public" | "created_at" | "updated_at", ExtArgs["result"]["settings"]>

  export type $settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      setting_id: number
      setting_key: string
      setting_value: string | null
      setting_group: string | null
      is_public: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type settingsGetPayload<S extends boolean | null | undefined | settingsDefaultArgs> = $Result.GetResult<Prisma.$settingsPayload, S>

  type settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['settings'], meta: { name: 'settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {settingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends settingsFindUniqueArgs>(args: SelectSubset<T, settingsFindUniqueArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {settingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends settingsFindFirstArgs>(args?: SelectSubset<T, settingsFindFirstArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `setting_id`
     * const settingsWithSetting_idOnly = await prisma.settings.findMany({ select: { setting_id: true } })
     * 
     */
    findMany<T extends settingsFindManyArgs>(args?: SelectSubset<T, settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {settingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends settingsCreateArgs>(args: SelectSubset<T, settingsCreateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {settingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends settingsCreateManyArgs>(args?: SelectSubset<T, settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {settingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `setting_id`
     * const settingsWithSetting_idOnly = await prisma.settings.createManyAndReturn({
     *   select: { setting_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends settingsCreateManyAndReturnArgs>(args?: SelectSubset<T, settingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {settingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends settingsDeleteArgs>(args: SelectSubset<T, settingsDeleteArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {settingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends settingsUpdateArgs>(args: SelectSubset<T, settingsUpdateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {settingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends settingsDeleteManyArgs>(args?: SelectSubset<T, settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends settingsUpdateManyArgs>(args: SelectSubset<T, settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {settingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `setting_id`
     * const settingsWithSetting_idOnly = await prisma.settings.updateManyAndReturn({
     *   select: { setting_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends settingsUpdateManyAndReturnArgs>(args: SelectSubset<T, settingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {settingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends settingsUpsertArgs>(args: SelectSubset<T, settingsUpsertArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends settingsCountArgs>(
      args?: Subset<T, settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: settingsGroupByArgs['orderBy'] }
        : { orderBy?: settingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the settings model
   */
  readonly fields: settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the settings model
   */
  interface settingsFieldRefs {
    readonly setting_id: FieldRef<"settings", 'Int'>
    readonly setting_key: FieldRef<"settings", 'String'>
    readonly setting_value: FieldRef<"settings", 'String'>
    readonly setting_group: FieldRef<"settings", 'String'>
    readonly is_public: FieldRef<"settings", 'Boolean'>
    readonly created_at: FieldRef<"settings", 'DateTime'>
    readonly updated_at: FieldRef<"settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * settings findUnique
   */
  export type settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findUniqueOrThrow
   */
  export type settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findFirst
   */
  export type settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findFirstOrThrow
   */
  export type settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findMany
   */
  export type settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings create
   */
  export type settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to create a settings.
     */
    data: XOR<settingsCreateInput, settingsUncheckedCreateInput>
  }

  /**
   * settings createMany
   */
  export type settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * settings createManyAndReturn
   */
  export type settingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * settings update
   */
  export type settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to update a settings.
     */
    data: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
    /**
     * Choose, which settings to update.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings updateMany
   */
  export type settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to update.
     */
    limit?: number
  }

  /**
   * settings updateManyAndReturn
   */
  export type settingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to update.
     */
    limit?: number
  }

  /**
   * settings upsert
   */
  export type settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The filter to search for the settings to update in case it exists.
     */
    where: settingsWhereUniqueInput
    /**
     * In case the settings found by the `where` argument doesn't exist, create a new settings with this data.
     */
    create: XOR<settingsCreateInput, settingsUncheckedCreateInput>
    /**
     * In case the settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
  }

  /**
   * settings delete
   */
  export type settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter which settings to delete.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings deleteMany
   */
  export type settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to delete
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to delete.
     */
    limit?: number
  }

  /**
   * settings without action
   */
  export type settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    tag_id: number | null
  }

  export type TagsSumAggregateOutputType = {
    tag_id: number | null
  }

  export type TagsMinAggregateOutputType = {
    tag_id: number | null
    name: string | null
    slug: string | null
    description: string | null
    created_at: Date | null
  }

  export type TagsMaxAggregateOutputType = {
    tag_id: number | null
    name: string | null
    slug: string | null
    description: string | null
    created_at: Date | null
  }

  export type TagsCountAggregateOutputType = {
    tag_id: number
    name: number
    slug: number
    description: number
    created_at: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    tag_id?: true
  }

  export type TagsSumAggregateInputType = {
    tag_id?: true
  }

  export type TagsMinAggregateInputType = {
    tag_id?: true
    name?: true
    slug?: true
    description?: true
    created_at?: true
  }

  export type TagsMaxAggregateInputType = {
    tag_id?: true
    name?: true
    slug?: true
    description?: true
    created_at?: true
  }

  export type TagsCountAggregateInputType = {
    tag_id?: true
    name?: true
    slug?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    tag_id: number
    name: string
    slug: string
    description: string | null
    created_at: Date | null
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    created_at?: boolean
    post_tags?: boolean | tags$post_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    tag_id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag_id" | "name" | "slug" | "description" | "created_at", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_tags?: boolean | tags$post_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      post_tags: Prisma.$post_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tag_id: number
      name: string
      slug: string
      description: string | null
      created_at: Date | null
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `tag_id`
     * const tagsWithTag_idOnly = await prisma.tags.findMany({ select: { tag_id: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `tag_id`
     * const tagsWithTag_idOnly = await prisma.tags.createManyAndReturn({
     *   select: { tag_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `tag_id`
     * const tagsWithTag_idOnly = await prisma.tags.updateManyAndReturn({
     *   select: { tag_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post_tags<T extends tags$post_tagsArgs<ExtArgs> = {}>(args?: Subset<T, tags$post_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly tag_id: FieldRef<"tags", 'Int'>
    readonly name: FieldRef<"tags", 'String'>
    readonly slug: FieldRef<"tags", 'String'>
    readonly description: FieldRef<"tags", 'String'>
    readonly created_at: FieldRef<"tags", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags createManyAndReturn
   */
  export type tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags updateManyAndReturn
   */
  export type tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.post_tags
   */
  export type tags$post_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tags
     */
    select?: post_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tags
     */
    omit?: post_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagsInclude<ExtArgs> | null
    where?: post_tagsWhereInput
    orderBy?: post_tagsOrderByWithRelationInput | post_tagsOrderByWithRelationInput[]
    cursor?: post_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_tagsScalarFieldEnum | Post_tagsScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    full_name: string | null
    bio: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    is_active: boolean | null
    is_admin: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    full_name: string | null
    bio: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    is_active: boolean | null
    is_admin: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    username: number
    email: number
    password_hash: number
    full_name: number
    bio: number
    avatar_url: number
    created_at: number
    updated_at: number
    is_active: number
    is_admin: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password_hash?: true
    full_name?: true
    bio?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    is_active?: true
    is_admin?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password_hash?: true
    full_name?: true
    bio?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    is_active?: true
    is_admin?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password_hash?: true
    full_name?: true
    bio?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    is_active?: true
    is_admin?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    username: string
    email: string
    password_hash: string
    full_name: string | null
    bio: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    is_active: boolean | null
    is_admin: boolean | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    full_name?: boolean
    bio?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_active?: boolean
    is_admin?: boolean
    comments?: boolean | users$commentsArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    likes?: boolean | users$likesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    full_name?: boolean
    bio?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_active?: boolean
    is_admin?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    full_name?: boolean
    bio?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_active?: boolean
    is_admin?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    full_name?: boolean
    bio?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_active?: boolean
    is_admin?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "username" | "email" | "password_hash" | "full_name" | "bio" | "avatar_url" | "created_at" | "updated_at" | "is_active" | "is_admin", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | users$commentsArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    likes?: boolean | users$likesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      posts: Prisma.$postsPayload<ExtArgs>[]
      likes: Prisma.$likePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      username: string
      email: string
      password_hash: string
      full_name: string | null
      bio: string | null
      avatar_url: string | null
      created_at: Date | null
      updated_at: Date | null
      is_active: boolean | null
      is_admin: boolean | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends users$postsArgs<ExtArgs> = {}>(args?: Subset<T, users$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends users$likesArgs<ExtArgs> = {}>(args?: Subset<T, users$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly full_name: FieldRef<"users", 'String'>
    readonly bio: FieldRef<"users", 'String'>
    readonly avatar_url: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly is_admin: FieldRef<"users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users.posts
   */
  export type users$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * users.likes
   */
  export type users$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    where?: likeWhereInput
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    cursor?: likeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriesScalarFieldEnum: {
    category_id: 'category_id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    created_at: 'created_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    comment_id: 'comment_id',
    post_id: 'post_id',
    user_id: 'user_id',
    author_name: 'author_name',
    author_email: 'author_email',
    content: 'content',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    parent_id: 'parent_id'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const Post_tagsScalarFieldEnum: {
    post_id: 'post_id',
    tag_id: 'tag_id'
  };

  export type Post_tagsScalarFieldEnum = (typeof Post_tagsScalarFieldEnum)[keyof typeof Post_tagsScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    post_id: 'post_id',
    title: 'title',
    likeCount: 'likeCount',
    excerpt: 'excerpt',
    content: 'content',
    author_id: 'author_id',
    category_id: 'category_id',
    status: 'status',
    published_at: 'published_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    featured_image_url: 'featured_image_url',
    meta_title: 'meta_title',
    meta_description: 'meta_description'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    like_id: 'like_id',
    post_id: 'post_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    setting_id: 'setting_id',
    setting_key: 'setting_key',
    setting_value: 'setting_value',
    setting_group: 'setting_group',
    is_public: 'is_public',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    tag_id: 'tag_id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    created_at: 'created_at'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    full_name: 'full_name',
    bio: 'bio',
    avatar_url: 'avatar_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_active: 'is_active',
    is_admin: 'is_admin'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    category_id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    slug?: StringFilter<"categories"> | string
    description?: StringNullableFilter<"categories"> | string | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    posts?: PostsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    category_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    posts?: postsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    name?: string
    slug?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    description?: StringNullableFilter<"categories"> | string | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    posts?: PostsListRelationFilter
  }, "category_id" | "name" | "slug">

  export type categoriesOrderByWithAggregationInput = {
    category_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
    slug?: StringWithAggregatesFilter<"categories"> | string
    description?: StringNullableWithAggregatesFilter<"categories"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    comment_id?: IntFilter<"comments"> | number
    post_id?: IntFilter<"comments"> | number
    user_id?: IntNullableFilter<"comments"> | number | null
    author_name?: StringNullableFilter<"comments"> | string | null
    author_email?: StringNullableFilter<"comments"> | string | null
    content?: StringFilter<"comments"> | string
    status?: StringNullableFilter<"comments"> | string | null
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    parent_id?: IntNullableFilter<"comments"> | number | null
    comments?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    other_comments?: CommentsListRelationFilter
    posts?: XOR<PostsScalarRelationFilter, postsWhereInput>
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type commentsOrderByWithRelationInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    author_name?: SortOrderInput | SortOrder
    author_email?: SortOrderInput | SortOrder
    content?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    parent_id?: SortOrderInput | SortOrder
    comments?: commentsOrderByWithRelationInput
    other_comments?: commentsOrderByRelationAggregateInput
    posts?: postsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    comment_id?: number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    post_id?: IntFilter<"comments"> | number
    user_id?: IntNullableFilter<"comments"> | number | null
    author_name?: StringNullableFilter<"comments"> | string | null
    author_email?: StringNullableFilter<"comments"> | string | null
    content?: StringFilter<"comments"> | string
    status?: StringNullableFilter<"comments"> | string | null
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    parent_id?: IntNullableFilter<"comments"> | number | null
    comments?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    other_comments?: CommentsListRelationFilter
    posts?: XOR<PostsScalarRelationFilter, postsWhereInput>
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "comment_id">

  export type commentsOrderByWithAggregationInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    author_name?: SortOrderInput | SortOrder
    author_email?: SortOrderInput | SortOrder
    content?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    parent_id?: SortOrderInput | SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    comment_id?: IntWithAggregatesFilter<"comments"> | number
    post_id?: IntWithAggregatesFilter<"comments"> | number
    user_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    author_name?: StringNullableWithAggregatesFilter<"comments"> | string | null
    author_email?: StringNullableWithAggregatesFilter<"comments"> | string | null
    content?: StringWithAggregatesFilter<"comments"> | string
    status?: StringNullableWithAggregatesFilter<"comments"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
    parent_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
  }

  export type post_tagsWhereInput = {
    AND?: post_tagsWhereInput | post_tagsWhereInput[]
    OR?: post_tagsWhereInput[]
    NOT?: post_tagsWhereInput | post_tagsWhereInput[]
    post_id?: IntFilter<"post_tags"> | number
    tag_id?: IntFilter<"post_tags"> | number
    posts?: XOR<PostsScalarRelationFilter, postsWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }

  export type post_tagsOrderByWithRelationInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
    posts?: postsOrderByWithRelationInput
    tags?: tagsOrderByWithRelationInput
  }

  export type post_tagsWhereUniqueInput = Prisma.AtLeast<{
    post_id_tag_id?: post_tagsPost_idTag_idCompoundUniqueInput
    AND?: post_tagsWhereInput | post_tagsWhereInput[]
    OR?: post_tagsWhereInput[]
    NOT?: post_tagsWhereInput | post_tagsWhereInput[]
    post_id?: IntFilter<"post_tags"> | number
    tag_id?: IntFilter<"post_tags"> | number
    posts?: XOR<PostsScalarRelationFilter, postsWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }, "post_id_tag_id">

  export type post_tagsOrderByWithAggregationInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
    _count?: post_tagsCountOrderByAggregateInput
    _avg?: post_tagsAvgOrderByAggregateInput
    _max?: post_tagsMaxOrderByAggregateInput
    _min?: post_tagsMinOrderByAggregateInput
    _sum?: post_tagsSumOrderByAggregateInput
  }

  export type post_tagsScalarWhereWithAggregatesInput = {
    AND?: post_tagsScalarWhereWithAggregatesInput | post_tagsScalarWhereWithAggregatesInput[]
    OR?: post_tagsScalarWhereWithAggregatesInput[]
    NOT?: post_tagsScalarWhereWithAggregatesInput | post_tagsScalarWhereWithAggregatesInput[]
    post_id?: IntWithAggregatesFilter<"post_tags"> | number
    tag_id?: IntWithAggregatesFilter<"post_tags"> | number
  }

  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    post_id?: IntFilter<"posts"> | number
    title?: StringFilter<"posts"> | string
    likeCount?: IntFilter<"posts"> | number
    excerpt?: StringNullableFilter<"posts"> | string | null
    content?: StringFilter<"posts"> | string
    author_id?: IntFilter<"posts"> | number
    category_id?: IntNullableFilter<"posts"> | number | null
    status?: StringNullableFilter<"posts"> | string | null
    published_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    featured_image_url?: StringNullableFilter<"posts"> | string | null
    meta_title?: StringNullableFilter<"posts"> | string | null
    meta_description?: StringNullableFilter<"posts"> | string | null
    likes?: LikeListRelationFilter
    comments?: CommentsListRelationFilter
    post_tags?: Post_tagsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
  }

  export type postsOrderByWithRelationInput = {
    post_id?: SortOrder
    title?: SortOrder
    likeCount?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    author_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    published_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    featured_image_url?: SortOrderInput | SortOrder
    meta_title?: SortOrderInput | SortOrder
    meta_description?: SortOrderInput | SortOrder
    likes?: likeOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
    post_tags?: post_tagsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    categories?: categoriesOrderByWithRelationInput
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    post_id?: number
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    title?: StringFilter<"posts"> | string
    likeCount?: IntFilter<"posts"> | number
    excerpt?: StringNullableFilter<"posts"> | string | null
    content?: StringFilter<"posts"> | string
    author_id?: IntFilter<"posts"> | number
    category_id?: IntNullableFilter<"posts"> | number | null
    status?: StringNullableFilter<"posts"> | string | null
    published_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    featured_image_url?: StringNullableFilter<"posts"> | string | null
    meta_title?: StringNullableFilter<"posts"> | string | null
    meta_description?: StringNullableFilter<"posts"> | string | null
    likes?: LikeListRelationFilter
    comments?: CommentsListRelationFilter
    post_tags?: Post_tagsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
  }, "post_id">

  export type postsOrderByWithAggregationInput = {
    post_id?: SortOrder
    title?: SortOrder
    likeCount?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    author_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    published_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    featured_image_url?: SortOrderInput | SortOrder
    meta_title?: SortOrderInput | SortOrder
    meta_description?: SortOrderInput | SortOrder
    _count?: postsCountOrderByAggregateInput
    _avg?: postsAvgOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
    _sum?: postsSumOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    post_id?: IntWithAggregatesFilter<"posts"> | number
    title?: StringWithAggregatesFilter<"posts"> | string
    likeCount?: IntWithAggregatesFilter<"posts"> | number
    excerpt?: StringNullableWithAggregatesFilter<"posts"> | string | null
    content?: StringWithAggregatesFilter<"posts"> | string
    author_id?: IntWithAggregatesFilter<"posts"> | number
    category_id?: IntNullableWithAggregatesFilter<"posts"> | number | null
    status?: StringNullableWithAggregatesFilter<"posts"> | string | null
    published_at?: DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null
    featured_image_url?: StringNullableWithAggregatesFilter<"posts"> | string | null
    meta_title?: StringNullableWithAggregatesFilter<"posts"> | string | null
    meta_description?: StringNullableWithAggregatesFilter<"posts"> | string | null
  }

  export type likeWhereInput = {
    AND?: likeWhereInput | likeWhereInput[]
    OR?: likeWhereInput[]
    NOT?: likeWhereInput | likeWhereInput[]
    like_id?: IntFilter<"like"> | number
    post_id?: IntFilter<"like"> | number
    user_id?: IntFilter<"like"> | number
    created_at?: DateTimeFilter<"like"> | Date | string
    post?: XOR<PostsScalarRelationFilter, postsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type likeOrderByWithRelationInput = {
    like_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    post?: postsOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type likeWhereUniqueInput = Prisma.AtLeast<{
    like_id?: number
    post_id_user_id?: likePost_idUser_idCompoundUniqueInput
    AND?: likeWhereInput | likeWhereInput[]
    OR?: likeWhereInput[]
    NOT?: likeWhereInput | likeWhereInput[]
    post_id?: IntFilter<"like"> | number
    user_id?: IntFilter<"like"> | number
    created_at?: DateTimeFilter<"like"> | Date | string
    post?: XOR<PostsScalarRelationFilter, postsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "like_id" | "post_id_user_id">

  export type likeOrderByWithAggregationInput = {
    like_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: likeCountOrderByAggregateInput
    _avg?: likeAvgOrderByAggregateInput
    _max?: likeMaxOrderByAggregateInput
    _min?: likeMinOrderByAggregateInput
    _sum?: likeSumOrderByAggregateInput
  }

  export type likeScalarWhereWithAggregatesInput = {
    AND?: likeScalarWhereWithAggregatesInput | likeScalarWhereWithAggregatesInput[]
    OR?: likeScalarWhereWithAggregatesInput[]
    NOT?: likeScalarWhereWithAggregatesInput | likeScalarWhereWithAggregatesInput[]
    like_id?: IntWithAggregatesFilter<"like"> | number
    post_id?: IntWithAggregatesFilter<"like"> | number
    user_id?: IntWithAggregatesFilter<"like"> | number
    created_at?: DateTimeWithAggregatesFilter<"like"> | Date | string
  }

  export type settingsWhereInput = {
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    setting_id?: IntFilter<"settings"> | number
    setting_key?: StringFilter<"settings"> | string
    setting_value?: StringNullableFilter<"settings"> | string | null
    setting_group?: StringNullableFilter<"settings"> | string | null
    is_public?: BoolNullableFilter<"settings"> | boolean | null
    created_at?: DateTimeNullableFilter<"settings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"settings"> | Date | string | null
  }

  export type settingsOrderByWithRelationInput = {
    setting_id?: SortOrder
    setting_key?: SortOrder
    setting_value?: SortOrderInput | SortOrder
    setting_group?: SortOrderInput | SortOrder
    is_public?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type settingsWhereUniqueInput = Prisma.AtLeast<{
    setting_id?: number
    setting_key?: string
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    setting_value?: StringNullableFilter<"settings"> | string | null
    setting_group?: StringNullableFilter<"settings"> | string | null
    is_public?: BoolNullableFilter<"settings"> | boolean | null
    created_at?: DateTimeNullableFilter<"settings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"settings"> | Date | string | null
  }, "setting_id" | "setting_key">

  export type settingsOrderByWithAggregationInput = {
    setting_id?: SortOrder
    setting_key?: SortOrder
    setting_value?: SortOrderInput | SortOrder
    setting_group?: SortOrderInput | SortOrder
    is_public?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: settingsCountOrderByAggregateInput
    _avg?: settingsAvgOrderByAggregateInput
    _max?: settingsMaxOrderByAggregateInput
    _min?: settingsMinOrderByAggregateInput
    _sum?: settingsSumOrderByAggregateInput
  }

  export type settingsScalarWhereWithAggregatesInput = {
    AND?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    OR?: settingsScalarWhereWithAggregatesInput[]
    NOT?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    setting_id?: IntWithAggregatesFilter<"settings"> | number
    setting_key?: StringWithAggregatesFilter<"settings"> | string
    setting_value?: StringNullableWithAggregatesFilter<"settings"> | string | null
    setting_group?: StringNullableWithAggregatesFilter<"settings"> | string | null
    is_public?: BoolNullableWithAggregatesFilter<"settings"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"settings"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"settings"> | Date | string | null
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    tag_id?: IntFilter<"tags"> | number
    name?: StringFilter<"tags"> | string
    slug?: StringFilter<"tags"> | string
    description?: StringNullableFilter<"tags"> | string | null
    created_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    post_tags?: Post_tagsListRelationFilter
  }

  export type tagsOrderByWithRelationInput = {
    tag_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    post_tags?: post_tagsOrderByRelationAggregateInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    tag_id?: number
    name?: string
    slug?: string
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    description?: StringNullableFilter<"tags"> | string | null
    created_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    post_tags?: Post_tagsListRelationFilter
  }, "tag_id" | "name" | "slug">

  export type tagsOrderByWithAggregationInput = {
    tag_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: tagsCountOrderByAggregateInput
    _avg?: tagsAvgOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
    _sum?: tagsSumOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    tag_id?: IntWithAggregatesFilter<"tags"> | number
    name?: StringWithAggregatesFilter<"tags"> | string
    slug?: StringWithAggregatesFilter<"tags"> | string
    description?: StringNullableWithAggregatesFilter<"tags"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tags"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    full_name?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    avatar_url?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
    is_admin?: BoolNullableFilter<"users"> | boolean | null
    comments?: CommentsListRelationFilter
    posts?: PostsListRelationFilter
    likes?: LikeListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    is_admin?: SortOrderInput | SortOrder
    comments?: commentsOrderByRelationAggregateInput
    posts?: postsOrderByRelationAggregateInput
    likes?: likeOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    full_name?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    avatar_url?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
    is_admin?: BoolNullableFilter<"users"> | boolean | null
    comments?: CommentsListRelationFilter
    posts?: PostsListRelationFilter
    likes?: LikeListRelationFilter
  }, "user_id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    is_admin?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    full_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    is_active?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    is_admin?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
  }

  export type categoriesCreateInput = {
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    posts?: postsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    category_id?: number
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    posts?: postsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    category_id?: number
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateInput = {
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    posts: postsCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    comment_id?: number
    post_id: number
    user_id?: number | null
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    parent_id?: number | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsUpdateInput = {
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    posts?: postsUpdateOneRequiredWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsCreateManyInput = {
    comment_id?: number
    post_id: number
    user_id?: number | null
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    parent_id?: number | null
  }

  export type commentsUpdateManyMutationInput = {
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type post_tagsCreateInput = {
    posts: postsCreateNestedOneWithoutPost_tagsInput
    tags: tagsCreateNestedOneWithoutPost_tagsInput
  }

  export type post_tagsUncheckedCreateInput = {
    post_id: number
    tag_id: number
  }

  export type post_tagsUpdateInput = {
    posts?: postsUpdateOneRequiredWithoutPost_tagsNestedInput
    tags?: tagsUpdateOneRequiredWithoutPost_tagsNestedInput
  }

  export type post_tagsUncheckedUpdateInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type post_tagsCreateManyInput = {
    post_id: number
    tag_id: number
  }

  export type post_tagsUpdateManyMutationInput = {

  }

  export type post_tagsUncheckedUpdateManyInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type postsCreateInput = {
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
    likes?: likeCreateNestedManyWithoutPostInput
    comments?: commentsCreateNestedManyWithoutPostsInput
    post_tags?: post_tagsCreateNestedManyWithoutPostsInput
    users: usersCreateNestedOneWithoutPostsInput
    categories?: categoriesCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateInput = {
    post_id?: number
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    author_id: number
    category_id?: number | null
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
    likes?: likeUncheckedCreateNestedManyWithoutPostInput
    comments?: commentsUncheckedCreateNestedManyWithoutPostsInput
    post_tags?: post_tagsUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: likeUpdateManyWithoutPostNestedInput
    comments?: commentsUpdateManyWithoutPostsNestedInput
    post_tags?: post_tagsUpdateManyWithoutPostsNestedInput
    users?: usersUpdateOneRequiredWithoutPostsNestedInput
    categories?: categoriesUpdateOneWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    author_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: likeUncheckedUpdateManyWithoutPostNestedInput
    comments?: commentsUncheckedUpdateManyWithoutPostsNestedInput
    post_tags?: post_tagsUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type postsCreateManyInput = {
    post_id?: number
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    author_id: number
    category_id?: number | null
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
  }

  export type postsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postsUncheckedUpdateManyInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    author_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type likeCreateInput = {
    created_at?: Date | string
    post: postsCreateNestedOneWithoutLikesInput
    user: usersCreateNestedOneWithoutLikesInput
  }

  export type likeUncheckedCreateInput = {
    like_id?: number
    post_id: number
    user_id: number
    created_at?: Date | string
  }

  export type likeUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postsUpdateOneRequiredWithoutLikesNestedInput
    user?: usersUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likeUncheckedUpdateInput = {
    like_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeCreateManyInput = {
    like_id?: number
    post_id: number
    user_id: number
    created_at?: Date | string
  }

  export type likeUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeUncheckedUpdateManyInput = {
    like_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsCreateInput = {
    setting_key: string
    setting_value?: string | null
    setting_group?: string | null
    is_public?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type settingsUncheckedCreateInput = {
    setting_id?: number
    setting_key: string
    setting_value?: string | null
    setting_group?: string | null
    is_public?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type settingsUpdateInput = {
    setting_key?: StringFieldUpdateOperationsInput | string
    setting_value?: NullableStringFieldUpdateOperationsInput | string | null
    setting_group?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type settingsUncheckedUpdateInput = {
    setting_id?: IntFieldUpdateOperationsInput | number
    setting_key?: StringFieldUpdateOperationsInput | string
    setting_value?: NullableStringFieldUpdateOperationsInput | string | null
    setting_group?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type settingsCreateManyInput = {
    setting_id?: number
    setting_key: string
    setting_value?: string | null
    setting_group?: string | null
    is_public?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type settingsUpdateManyMutationInput = {
    setting_key?: StringFieldUpdateOperationsInput | string
    setting_value?: NullableStringFieldUpdateOperationsInput | string | null
    setting_group?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type settingsUncheckedUpdateManyInput = {
    setting_id?: IntFieldUpdateOperationsInput | number
    setting_key?: StringFieldUpdateOperationsInput | string
    setting_value?: NullableStringFieldUpdateOperationsInput | string | null
    setting_group?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsCreateInput = {
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    post_tags?: post_tagsCreateNestedManyWithoutTagsInput
  }

  export type tagsUncheckedCreateInput = {
    tag_id?: number
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    post_tags?: post_tagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_tags?: post_tagsUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_tags?: post_tagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type tagsCreateManyInput = {
    tag_id?: number
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type tagsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsUncheckedUpdateManyInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    username: string
    email: string
    password_hash: string
    full_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    is_active?: boolean | null
    is_admin?: boolean | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    likes?: likeCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    username: string
    email: string
    password_hash: string
    full_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    is_active?: boolean | null
    is_admin?: boolean | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    likes?: likeUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    likes?: likeUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    likes?: likeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    username: string
    email: string
    password_hash: string
    full_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    is_active?: boolean | null
    is_admin?: boolean | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PostsListRelationFilter = {
    every?: postsWhereInput
    some?: postsWhereInput
    none?: postsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CommentsNullableScalarRelationFilter = {
    is?: commentsWhereInput | null
    isNot?: commentsWhereInput | null
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type PostsScalarRelationFilter = {
    is?: postsWhereInput
    isNot?: postsWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commentsCountOrderByAggregateInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    author_name?: SortOrder
    author_email?: SortOrder
    content?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent_id?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    author_name?: SortOrder
    author_email?: SortOrder
    content?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent_id?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    author_name?: SortOrder
    author_email?: SortOrder
    content?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent_id?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type post_tagsPost_idTag_idCompoundUniqueInput = {
    post_id: number
    tag_id: number
  }

  export type post_tagsCountOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type post_tagsAvgOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type post_tagsMaxOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type post_tagsMinOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type post_tagsSumOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type LikeListRelationFilter = {
    every?: likeWhereInput
    some?: likeWhereInput
    none?: likeWhereInput
  }

  export type Post_tagsListRelationFilter = {
    every?: post_tagsWhereInput
    some?: post_tagsWhereInput
    none?: post_tagsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type likeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type post_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postsCountOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    likeCount?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    author_id?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    featured_image_url?: SortOrder
    meta_title?: SortOrder
    meta_description?: SortOrder
  }

  export type postsAvgOrderByAggregateInput = {
    post_id?: SortOrder
    likeCount?: SortOrder
    author_id?: SortOrder
    category_id?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    likeCount?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    author_id?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    featured_image_url?: SortOrder
    meta_title?: SortOrder
    meta_description?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    likeCount?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    author_id?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    featured_image_url?: SortOrder
    meta_title?: SortOrder
    meta_description?: SortOrder
  }

  export type postsSumOrderByAggregateInput = {
    post_id?: SortOrder
    likeCount?: SortOrder
    author_id?: SortOrder
    category_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type likePost_idUser_idCompoundUniqueInput = {
    post_id: number
    user_id: number
  }

  export type likeCountOrderByAggregateInput = {
    like_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type likeAvgOrderByAggregateInput = {
    like_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type likeMaxOrderByAggregateInput = {
    like_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type likeMinOrderByAggregateInput = {
    like_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type likeSumOrderByAggregateInput = {
    like_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type settingsCountOrderByAggregateInput = {
    setting_id?: SortOrder
    setting_key?: SortOrder
    setting_value?: SortOrder
    setting_group?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsAvgOrderByAggregateInput = {
    setting_id?: SortOrder
  }

  export type settingsMaxOrderByAggregateInput = {
    setting_id?: SortOrder
    setting_key?: SortOrder
    setting_value?: SortOrder
    setting_group?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsMinOrderByAggregateInput = {
    setting_id?: SortOrder
    setting_key?: SortOrder
    setting_value?: SortOrder
    setting_group?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsSumOrderByAggregateInput = {
    setting_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type tagsCountOrderByAggregateInput = {
    tag_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type tagsAvgOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    tag_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    tag_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type tagsSumOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    bio?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_active?: SortOrder
    is_admin?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    bio?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_active?: SortOrder
    is_admin?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    bio?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_active?: SortOrder
    is_admin?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type postsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput> | postsCreateWithoutCategoriesInput[] | postsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: postsCreateOrConnectWithoutCategoriesInput | postsCreateOrConnectWithoutCategoriesInput[]
    createMany?: postsCreateManyCategoriesInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput> | postsCreateWithoutCategoriesInput[] | postsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: postsCreateOrConnectWithoutCategoriesInput | postsCreateOrConnectWithoutCategoriesInput[]
    createMany?: postsCreateManyCategoriesInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type postsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput> | postsCreateWithoutCategoriesInput[] | postsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: postsCreateOrConnectWithoutCategoriesInput | postsCreateOrConnectWithoutCategoriesInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutCategoriesInput | postsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: postsCreateManyCategoriesInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutCategoriesInput | postsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: postsUpdateManyWithWhereWithoutCategoriesInput | postsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type postsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput> | postsCreateWithoutCategoriesInput[] | postsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: postsCreateOrConnectWithoutCategoriesInput | postsCreateOrConnectWithoutCategoriesInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutCategoriesInput | postsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: postsCreateManyCategoriesInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutCategoriesInput | postsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: postsUpdateManyWithWhereWithoutCategoriesInput | postsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type commentsCreateNestedOneWithoutOther_commentsInput = {
    create?: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutOther_commentsInput
    connect?: commentsWhereUniqueInput
  }

  export type commentsCreateNestedManyWithoutCommentsInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type postsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutCommentsInput
    connect?: postsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type commentsUncheckedCreateNestedManyWithoutCommentsInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type commentsUpdateOneWithoutOther_commentsNestedInput = {
    create?: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutOther_commentsInput
    upsert?: commentsUpsertWithoutOther_commentsInput
    disconnect?: commentsWhereInput | boolean
    delete?: commentsWhereInput | boolean
    connect?: commentsWhereUniqueInput
    update?: XOR<XOR<commentsUpdateToOneWithWhereWithoutOther_commentsInput, commentsUpdateWithoutOther_commentsInput>, commentsUncheckedUpdateWithoutOther_commentsInput>
  }

  export type commentsUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommentsInput | commentsUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommentsInput | commentsUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommentsInput | commentsUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type postsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutCommentsInput
    upsert?: postsUpsertWithoutCommentsInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutCommentsInput, postsUpdateWithoutCommentsInput>, postsUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type commentsUncheckedUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommentsInput | commentsUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommentsInput | commentsUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommentsInput | commentsUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type postsCreateNestedOneWithoutPost_tagsInput = {
    create?: XOR<postsCreateWithoutPost_tagsInput, postsUncheckedCreateWithoutPost_tagsInput>
    connectOrCreate?: postsCreateOrConnectWithoutPost_tagsInput
    connect?: postsWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutPost_tagsInput = {
    create?: XOR<tagsCreateWithoutPost_tagsInput, tagsUncheckedCreateWithoutPost_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutPost_tagsInput
    connect?: tagsWhereUniqueInput
  }

  export type postsUpdateOneRequiredWithoutPost_tagsNestedInput = {
    create?: XOR<postsCreateWithoutPost_tagsInput, postsUncheckedCreateWithoutPost_tagsInput>
    connectOrCreate?: postsCreateOrConnectWithoutPost_tagsInput
    upsert?: postsUpsertWithoutPost_tagsInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutPost_tagsInput, postsUpdateWithoutPost_tagsInput>, postsUncheckedUpdateWithoutPost_tagsInput>
  }

  export type tagsUpdateOneRequiredWithoutPost_tagsNestedInput = {
    create?: XOR<tagsCreateWithoutPost_tagsInput, tagsUncheckedCreateWithoutPost_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutPost_tagsInput
    upsert?: tagsUpsertWithoutPost_tagsInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutPost_tagsInput, tagsUpdateWithoutPost_tagsInput>, tagsUncheckedUpdateWithoutPost_tagsInput>
  }

  export type likeCreateNestedManyWithoutPostInput = {
    create?: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput> | likeCreateWithoutPostInput[] | likeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[]
    createMany?: likeCreateManyPostInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutPostsInput = {
    create?: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput> | commentsCreateWithoutPostsInput[] | commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostsInput | commentsCreateOrConnectWithoutPostsInput[]
    createMany?: commentsCreateManyPostsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type post_tagsCreateNestedManyWithoutPostsInput = {
    create?: XOR<post_tagsCreateWithoutPostsInput, post_tagsUncheckedCreateWithoutPostsInput> | post_tagsCreateWithoutPostsInput[] | post_tagsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutPostsInput | post_tagsCreateOrConnectWithoutPostsInput[]
    createMany?: post_tagsCreateManyPostsInputEnvelope
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutPostsInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    connect?: usersWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutPostsInput = {
    create?: XOR<categoriesCreateWithoutPostsInput, categoriesUncheckedCreateWithoutPostsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutPostsInput
    connect?: categoriesWhereUniqueInput
  }

  export type likeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput> | likeCreateWithoutPostInput[] | likeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[]
    createMany?: likeCreateManyPostInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput> | commentsCreateWithoutPostsInput[] | commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostsInput | commentsCreateOrConnectWithoutPostsInput[]
    createMany?: commentsCreateManyPostsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type post_tagsUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<post_tagsCreateWithoutPostsInput, post_tagsUncheckedCreateWithoutPostsInput> | post_tagsCreateWithoutPostsInput[] | post_tagsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutPostsInput | post_tagsCreateOrConnectWithoutPostsInput[]
    createMany?: post_tagsCreateManyPostsInputEnvelope
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
  }

  export type likeUpdateManyWithoutPostNestedInput = {
    create?: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput> | likeCreateWithoutPostInput[] | likeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutPostInput | likeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: likeCreateManyPostInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutPostInput | likeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: likeUpdateManyWithWhereWithoutPostInput | likeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutPostsNestedInput = {
    create?: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput> | commentsCreateWithoutPostsInput[] | commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostsInput | commentsCreateOrConnectWithoutPostsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutPostsInput | commentsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: commentsCreateManyPostsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutPostsInput | commentsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutPostsInput | commentsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type post_tagsUpdateManyWithoutPostsNestedInput = {
    create?: XOR<post_tagsCreateWithoutPostsInput, post_tagsUncheckedCreateWithoutPostsInput> | post_tagsCreateWithoutPostsInput[] | post_tagsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutPostsInput | post_tagsCreateOrConnectWithoutPostsInput[]
    upsert?: post_tagsUpsertWithWhereUniqueWithoutPostsInput | post_tagsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: post_tagsCreateManyPostsInputEnvelope
    set?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    disconnect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    delete?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    update?: post_tagsUpdateWithWhereUniqueWithoutPostsInput | post_tagsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: post_tagsUpdateManyWithWhereWithoutPostsInput | post_tagsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: post_tagsScalarWhereInput | post_tagsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    upsert?: usersUpsertWithoutPostsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPostsInput, usersUpdateWithoutPostsInput>, usersUncheckedUpdateWithoutPostsInput>
  }

  export type categoriesUpdateOneWithoutPostsNestedInput = {
    create?: XOR<categoriesCreateWithoutPostsInput, categoriesUncheckedCreateWithoutPostsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutPostsInput
    upsert?: categoriesUpsertWithoutPostsInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutPostsInput, categoriesUpdateWithoutPostsInput>, categoriesUncheckedUpdateWithoutPostsInput>
  }

  export type likeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput> | likeCreateWithoutPostInput[] | likeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutPostInput | likeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: likeCreateManyPostInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutPostInput | likeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: likeUpdateManyWithWhereWithoutPostInput | likeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput> | commentsCreateWithoutPostsInput[] | commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostsInput | commentsCreateOrConnectWithoutPostsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutPostsInput | commentsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: commentsCreateManyPostsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutPostsInput | commentsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutPostsInput | commentsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type post_tagsUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<post_tagsCreateWithoutPostsInput, post_tagsUncheckedCreateWithoutPostsInput> | post_tagsCreateWithoutPostsInput[] | post_tagsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutPostsInput | post_tagsCreateOrConnectWithoutPostsInput[]
    upsert?: post_tagsUpsertWithWhereUniqueWithoutPostsInput | post_tagsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: post_tagsCreateManyPostsInputEnvelope
    set?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    disconnect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    delete?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    update?: post_tagsUpdateWithWhereUniqueWithoutPostsInput | post_tagsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: post_tagsUpdateManyWithWhereWithoutPostsInput | post_tagsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: post_tagsScalarWhereInput | post_tagsScalarWhereInput[]
  }

  export type postsCreateNestedOneWithoutLikesInput = {
    create?: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: postsCreateOrConnectWithoutLikesInput
    connect?: postsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutLikesInput = {
    create?: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLikesInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type postsUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: postsCreateOrConnectWithoutLikesInput
    upsert?: postsUpsertWithoutLikesInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutLikesInput, postsUpdateWithoutLikesInput>, postsUncheckedUpdateWithoutLikesInput>
  }

  export type usersUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLikesInput
    upsert?: usersUpsertWithoutLikesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLikesInput, usersUpdateWithoutLikesInput>, usersUncheckedUpdateWithoutLikesInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type post_tagsCreateNestedManyWithoutTagsInput = {
    create?: XOR<post_tagsCreateWithoutTagsInput, post_tagsUncheckedCreateWithoutTagsInput> | post_tagsCreateWithoutTagsInput[] | post_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutTagsInput | post_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: post_tagsCreateManyTagsInputEnvelope
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
  }

  export type post_tagsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<post_tagsCreateWithoutTagsInput, post_tagsUncheckedCreateWithoutTagsInput> | post_tagsCreateWithoutTagsInput[] | post_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutTagsInput | post_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: post_tagsCreateManyTagsInputEnvelope
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
  }

  export type post_tagsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<post_tagsCreateWithoutTagsInput, post_tagsUncheckedCreateWithoutTagsInput> | post_tagsCreateWithoutTagsInput[] | post_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutTagsInput | post_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: post_tagsUpsertWithWhereUniqueWithoutTagsInput | post_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: post_tagsCreateManyTagsInputEnvelope
    set?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    disconnect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    delete?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    update?: post_tagsUpdateWithWhereUniqueWithoutTagsInput | post_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: post_tagsUpdateManyWithWhereWithoutTagsInput | post_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: post_tagsScalarWhereInput | post_tagsScalarWhereInput[]
  }

  export type post_tagsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<post_tagsCreateWithoutTagsInput, post_tagsUncheckedCreateWithoutTagsInput> | post_tagsCreateWithoutTagsInput[] | post_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: post_tagsCreateOrConnectWithoutTagsInput | post_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: post_tagsUpsertWithWhereUniqueWithoutTagsInput | post_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: post_tagsCreateManyTagsInputEnvelope
    set?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    disconnect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    delete?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    connect?: post_tagsWhereUniqueInput | post_tagsWhereUniqueInput[]
    update?: post_tagsUpdateWithWhereUniqueWithoutTagsInput | post_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: post_tagsUpdateManyWithWhereWithoutTagsInput | post_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: post_tagsScalarWhereInput | post_tagsScalarWhereInput[]
  }

  export type commentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type postsCreateNestedManyWithoutUsersInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type likeCreateNestedManyWithoutUserInput = {
    create?: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput> | likeCreateWithoutUserInput[] | likeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[]
    createMany?: likeCreateManyUserInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type likeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput> | likeCreateWithoutUserInput[] | likeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[]
    createMany?: likeCreateManyUserInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type commentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type postsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUsersInput | postsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUsersInput | postsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUsersInput | postsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type likeUpdateManyWithoutUserNestedInput = {
    create?: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput> | likeCreateWithoutUserInput[] | likeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutUserInput | likeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: likeCreateManyUserInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutUserInput | likeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: likeUpdateManyWithWhereWithoutUserInput | likeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUsersInput | postsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUsersInput | postsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUsersInput | postsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type likeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput> | likeCreateWithoutUserInput[] | likeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutUserInput | likeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: likeCreateManyUserInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutUserInput | likeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: likeUpdateManyWithWhereWithoutUserInput | likeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type postsCreateWithoutCategoriesInput = {
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
    likes?: likeCreateNestedManyWithoutPostInput
    comments?: commentsCreateNestedManyWithoutPostsInput
    post_tags?: post_tagsCreateNestedManyWithoutPostsInput
    users: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutCategoriesInput = {
    post_id?: number
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    author_id: number
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
    likes?: likeUncheckedCreateNestedManyWithoutPostInput
    comments?: commentsUncheckedCreateNestedManyWithoutPostsInput
    post_tags?: post_tagsUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutCategoriesInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput>
  }

  export type postsCreateManyCategoriesInputEnvelope = {
    data: postsCreateManyCategoriesInput | postsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type postsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutCategoriesInput, postsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<postsCreateWithoutCategoriesInput, postsUncheckedCreateWithoutCategoriesInput>
  }

  export type postsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutCategoriesInput, postsUncheckedUpdateWithoutCategoriesInput>
  }

  export type postsUpdateManyWithWhereWithoutCategoriesInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type postsScalarWhereInput = {
    AND?: postsScalarWhereInput | postsScalarWhereInput[]
    OR?: postsScalarWhereInput[]
    NOT?: postsScalarWhereInput | postsScalarWhereInput[]
    post_id?: IntFilter<"posts"> | number
    title?: StringFilter<"posts"> | string
    likeCount?: IntFilter<"posts"> | number
    excerpt?: StringNullableFilter<"posts"> | string | null
    content?: StringFilter<"posts"> | string
    author_id?: IntFilter<"posts"> | number
    category_id?: IntNullableFilter<"posts"> | number | null
    status?: StringNullableFilter<"posts"> | string | null
    published_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    featured_image_url?: StringNullableFilter<"posts"> | string | null
    meta_title?: StringNullableFilter<"posts"> | string | null
    meta_description?: StringNullableFilter<"posts"> | string | null
  }

  export type commentsCreateWithoutOther_commentsInput = {
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    posts: postsCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutOther_commentsInput = {
    comment_id?: number
    post_id: number
    user_id?: number | null
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    parent_id?: number | null
  }

  export type commentsCreateOrConnectWithoutOther_commentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
  }

  export type commentsCreateWithoutCommentsInput = {
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    posts: postsCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutCommentsInput = {
    comment_id?: number
    post_id: number
    user_id?: number | null
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput>
  }

  export type commentsCreateManyCommentsInputEnvelope = {
    data: commentsCreateManyCommentsInput | commentsCreateManyCommentsInput[]
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutCommentsInput = {
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
    likes?: likeCreateNestedManyWithoutPostInput
    post_tags?: post_tagsCreateNestedManyWithoutPostsInput
    users: usersCreateNestedOneWithoutPostsInput
    categories?: categoriesCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutCommentsInput = {
    post_id?: number
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    author_id: number
    category_id?: number | null
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
    likes?: likeUncheckedCreateNestedManyWithoutPostInput
    post_tags?: post_tagsUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutCommentsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
  }

  export type usersCreateWithoutCommentsInput = {
    username: string
    email: string
    password_hash: string
    full_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    is_active?: boolean | null
    is_admin?: boolean | null
    posts?: postsCreateNestedManyWithoutUsersInput
    likes?: likeCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    user_id?: number
    username: string
    email: string
    password_hash: string
    full_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    is_active?: boolean | null
    is_admin?: boolean | null
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    likes?: likeUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type commentsUpsertWithoutOther_commentsInput = {
    update: XOR<commentsUpdateWithoutOther_commentsInput, commentsUncheckedUpdateWithoutOther_commentsInput>
    create: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    where?: commentsWhereInput
  }

  export type commentsUpdateToOneWithWhereWithoutOther_commentsInput = {
    where?: commentsWhereInput
    data: XOR<commentsUpdateWithoutOther_commentsInput, commentsUncheckedUpdateWithoutOther_commentsInput>
  }

  export type commentsUpdateWithoutOther_commentsInput = {
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    posts?: postsUpdateOneRequiredWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutOther_commentsInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type commentsUpsertWithWhereUniqueWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutCommentsInput, commentsUncheckedUpdateWithoutCommentsInput>
    create: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutCommentsInput, commentsUncheckedUpdateWithoutCommentsInput>
  }

  export type commentsUpdateManyWithWhereWithoutCommentsInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutCommentsInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    comment_id?: IntFilter<"comments"> | number
    post_id?: IntFilter<"comments"> | number
    user_id?: IntNullableFilter<"comments"> | number | null
    author_name?: StringNullableFilter<"comments"> | string | null
    author_email?: StringNullableFilter<"comments"> | string | null
    content?: StringFilter<"comments"> | string
    status?: StringNullableFilter<"comments"> | string | null
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    parent_id?: IntNullableFilter<"comments"> | number | null
  }

  export type postsUpsertWithoutCommentsInput = {
    update: XOR<postsUpdateWithoutCommentsInput, postsUncheckedUpdateWithoutCommentsInput>
    create: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutCommentsInput, postsUncheckedUpdateWithoutCommentsInput>
  }

  export type postsUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: likeUpdateManyWithoutPostNestedInput
    post_tags?: post_tagsUpdateManyWithoutPostsNestedInput
    users?: usersUpdateOneRequiredWithoutPostsNestedInput
    categories?: categoriesUpdateOneWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutCommentsInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    author_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: likeUncheckedUpdateManyWithoutPostNestedInput
    post_tags?: post_tagsUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    posts?: postsUpdateManyWithoutUsersNestedInput
    likes?: likeUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    likes?: likeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type postsCreateWithoutPost_tagsInput = {
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
    likes?: likeCreateNestedManyWithoutPostInput
    comments?: commentsCreateNestedManyWithoutPostsInput
    users: usersCreateNestedOneWithoutPostsInput
    categories?: categoriesCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutPost_tagsInput = {
    post_id?: number
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    author_id: number
    category_id?: number | null
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
    likes?: likeUncheckedCreateNestedManyWithoutPostInput
    comments?: commentsUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutPost_tagsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutPost_tagsInput, postsUncheckedCreateWithoutPost_tagsInput>
  }

  export type tagsCreateWithoutPost_tagsInput = {
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type tagsUncheckedCreateWithoutPost_tagsInput = {
    tag_id?: number
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type tagsCreateOrConnectWithoutPost_tagsInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutPost_tagsInput, tagsUncheckedCreateWithoutPost_tagsInput>
  }

  export type postsUpsertWithoutPost_tagsInput = {
    update: XOR<postsUpdateWithoutPost_tagsInput, postsUncheckedUpdateWithoutPost_tagsInput>
    create: XOR<postsCreateWithoutPost_tagsInput, postsUncheckedCreateWithoutPost_tagsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutPost_tagsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutPost_tagsInput, postsUncheckedUpdateWithoutPost_tagsInput>
  }

  export type postsUpdateWithoutPost_tagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: likeUpdateManyWithoutPostNestedInput
    comments?: commentsUpdateManyWithoutPostsNestedInput
    users?: usersUpdateOneRequiredWithoutPostsNestedInput
    categories?: categoriesUpdateOneWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutPost_tagsInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    author_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: likeUncheckedUpdateManyWithoutPostNestedInput
    comments?: commentsUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type tagsUpsertWithoutPost_tagsInput = {
    update: XOR<tagsUpdateWithoutPost_tagsInput, tagsUncheckedUpdateWithoutPost_tagsInput>
    create: XOR<tagsCreateWithoutPost_tagsInput, tagsUncheckedCreateWithoutPost_tagsInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutPost_tagsInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutPost_tagsInput, tagsUncheckedUpdateWithoutPost_tagsInput>
  }

  export type tagsUpdateWithoutPost_tagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsUncheckedUpdateWithoutPost_tagsInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likeCreateWithoutPostInput = {
    created_at?: Date | string
    user: usersCreateNestedOneWithoutLikesInput
  }

  export type likeUncheckedCreateWithoutPostInput = {
    like_id?: number
    user_id: number
    created_at?: Date | string
  }

  export type likeCreateOrConnectWithoutPostInput = {
    where: likeWhereUniqueInput
    create: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>
  }

  export type likeCreateManyPostInputEnvelope = {
    data: likeCreateManyPostInput | likeCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutPostsInput = {
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutPostsInput = {
    comment_id?: number
    user_id?: number | null
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    parent_id?: number | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutPostsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput>
  }

  export type commentsCreateManyPostsInputEnvelope = {
    data: commentsCreateManyPostsInput | commentsCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type post_tagsCreateWithoutPostsInput = {
    tags: tagsCreateNestedOneWithoutPost_tagsInput
  }

  export type post_tagsUncheckedCreateWithoutPostsInput = {
    tag_id: number
  }

  export type post_tagsCreateOrConnectWithoutPostsInput = {
    where: post_tagsWhereUniqueInput
    create: XOR<post_tagsCreateWithoutPostsInput, post_tagsUncheckedCreateWithoutPostsInput>
  }

  export type post_tagsCreateManyPostsInputEnvelope = {
    data: post_tagsCreateManyPostsInput | post_tagsCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPostsInput = {
    username: string
    email: string
    password_hash: string
    full_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    is_active?: boolean | null
    is_admin?: boolean | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    likes?: likeCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPostsInput = {
    user_id?: number
    username: string
    email: string
    password_hash: string
    full_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    is_active?: boolean | null
    is_admin?: boolean | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    likes?: likeUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPostsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
  }

  export type categoriesCreateWithoutPostsInput = {
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type categoriesUncheckedCreateWithoutPostsInput = {
    category_id?: number
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type categoriesCreateOrConnectWithoutPostsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutPostsInput, categoriesUncheckedCreateWithoutPostsInput>
  }

  export type likeUpsertWithWhereUniqueWithoutPostInput = {
    where: likeWhereUniqueInput
    update: XOR<likeUpdateWithoutPostInput, likeUncheckedUpdateWithoutPostInput>
    create: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>
  }

  export type likeUpdateWithWhereUniqueWithoutPostInput = {
    where: likeWhereUniqueInput
    data: XOR<likeUpdateWithoutPostInput, likeUncheckedUpdateWithoutPostInput>
  }

  export type likeUpdateManyWithWhereWithoutPostInput = {
    where: likeScalarWhereInput
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyWithoutPostInput>
  }

  export type likeScalarWhereInput = {
    AND?: likeScalarWhereInput | likeScalarWhereInput[]
    OR?: likeScalarWhereInput[]
    NOT?: likeScalarWhereInput | likeScalarWhereInput[]
    like_id?: IntFilter<"like"> | number
    post_id?: IntFilter<"like"> | number
    user_id?: IntFilter<"like"> | number
    created_at?: DateTimeFilter<"like"> | Date | string
  }

  export type commentsUpsertWithWhereUniqueWithoutPostsInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutPostsInput, commentsUncheckedUpdateWithoutPostsInput>
    create: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutPostsInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutPostsInput, commentsUncheckedUpdateWithoutPostsInput>
  }

  export type commentsUpdateManyWithWhereWithoutPostsInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutPostsInput>
  }

  export type post_tagsUpsertWithWhereUniqueWithoutPostsInput = {
    where: post_tagsWhereUniqueInput
    update: XOR<post_tagsUpdateWithoutPostsInput, post_tagsUncheckedUpdateWithoutPostsInput>
    create: XOR<post_tagsCreateWithoutPostsInput, post_tagsUncheckedCreateWithoutPostsInput>
  }

  export type post_tagsUpdateWithWhereUniqueWithoutPostsInput = {
    where: post_tagsWhereUniqueInput
    data: XOR<post_tagsUpdateWithoutPostsInput, post_tagsUncheckedUpdateWithoutPostsInput>
  }

  export type post_tagsUpdateManyWithWhereWithoutPostsInput = {
    where: post_tagsScalarWhereInput
    data: XOR<post_tagsUpdateManyMutationInput, post_tagsUncheckedUpdateManyWithoutPostsInput>
  }

  export type post_tagsScalarWhereInput = {
    AND?: post_tagsScalarWhereInput | post_tagsScalarWhereInput[]
    OR?: post_tagsScalarWhereInput[]
    NOT?: post_tagsScalarWhereInput | post_tagsScalarWhereInput[]
    post_id?: IntFilter<"post_tags"> | number
    tag_id?: IntFilter<"post_tags"> | number
  }

  export type usersUpsertWithoutPostsInput = {
    update: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPostsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
  }

  export type usersUpdateWithoutPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    likes?: likeUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPostsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    likes?: likeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type categoriesUpsertWithoutPostsInput = {
    update: XOR<categoriesUpdateWithoutPostsInput, categoriesUncheckedUpdateWithoutPostsInput>
    create: XOR<categoriesCreateWithoutPostsInput, categoriesUncheckedCreateWithoutPostsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutPostsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutPostsInput, categoriesUncheckedUpdateWithoutPostsInput>
  }

  export type categoriesUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateWithoutPostsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsCreateWithoutLikesInput = {
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
    comments?: commentsCreateNestedManyWithoutPostsInput
    post_tags?: post_tagsCreateNestedManyWithoutPostsInput
    users: usersCreateNestedOneWithoutPostsInput
    categories?: categoriesCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutLikesInput = {
    post_id?: number
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    author_id: number
    category_id?: number | null
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
    comments?: commentsUncheckedCreateNestedManyWithoutPostsInput
    post_tags?: post_tagsUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutLikesInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
  }

  export type usersCreateWithoutLikesInput = {
    username: string
    email: string
    password_hash: string
    full_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    is_active?: boolean | null
    is_admin?: boolean | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLikesInput = {
    user_id?: number
    username: string
    email: string
    password_hash: string
    full_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    is_active?: boolean | null
    is_admin?: boolean | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLikesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
  }

  export type postsUpsertWithoutLikesInput = {
    update: XOR<postsUpdateWithoutLikesInput, postsUncheckedUpdateWithoutLikesInput>
    create: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutLikesInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutLikesInput, postsUncheckedUpdateWithoutLikesInput>
  }

  export type postsUpdateWithoutLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUpdateManyWithoutPostsNestedInput
    post_tags?: post_tagsUpdateManyWithoutPostsNestedInput
    users?: usersUpdateOneRequiredWithoutPostsNestedInput
    categories?: categoriesUpdateOneWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutLikesInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    author_id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: commentsUncheckedUpdateManyWithoutPostsNestedInput
    post_tags?: post_tagsUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type usersUpsertWithoutLikesInput = {
    update: XOR<usersUpdateWithoutLikesInput, usersUncheckedUpdateWithoutLikesInput>
    create: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLikesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLikesInput, usersUncheckedUpdateWithoutLikesInput>
  }

  export type usersUpdateWithoutLikesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLikesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type post_tagsCreateWithoutTagsInput = {
    posts: postsCreateNestedOneWithoutPost_tagsInput
  }

  export type post_tagsUncheckedCreateWithoutTagsInput = {
    post_id: number
  }

  export type post_tagsCreateOrConnectWithoutTagsInput = {
    where: post_tagsWhereUniqueInput
    create: XOR<post_tagsCreateWithoutTagsInput, post_tagsUncheckedCreateWithoutTagsInput>
  }

  export type post_tagsCreateManyTagsInputEnvelope = {
    data: post_tagsCreateManyTagsInput | post_tagsCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type post_tagsUpsertWithWhereUniqueWithoutTagsInput = {
    where: post_tagsWhereUniqueInput
    update: XOR<post_tagsUpdateWithoutTagsInput, post_tagsUncheckedUpdateWithoutTagsInput>
    create: XOR<post_tagsCreateWithoutTagsInput, post_tagsUncheckedCreateWithoutTagsInput>
  }

  export type post_tagsUpdateWithWhereUniqueWithoutTagsInput = {
    where: post_tagsWhereUniqueInput
    data: XOR<post_tagsUpdateWithoutTagsInput, post_tagsUncheckedUpdateWithoutTagsInput>
  }

  export type post_tagsUpdateManyWithWhereWithoutTagsInput = {
    where: post_tagsScalarWhereInput
    data: XOR<post_tagsUpdateManyMutationInput, post_tagsUncheckedUpdateManyWithoutTagsInput>
  }

  export type commentsCreateWithoutUsersInput = {
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    posts: postsCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutUsersInput = {
    comment_id?: number
    post_id: number
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    parent_id?: number | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutUsersInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsCreateManyUsersInputEnvelope = {
    data: commentsCreateManyUsersInput | commentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutUsersInput = {
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
    likes?: likeCreateNestedManyWithoutPostInput
    comments?: commentsCreateNestedManyWithoutPostsInput
    post_tags?: post_tagsCreateNestedManyWithoutPostsInput
    categories?: categoriesCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutUsersInput = {
    post_id?: number
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    category_id?: number | null
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
    likes?: likeUncheckedCreateNestedManyWithoutPostInput
    comments?: commentsUncheckedCreateNestedManyWithoutPostsInput
    post_tags?: post_tagsUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutUsersInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput>
  }

  export type postsCreateManyUsersInputEnvelope = {
    data: postsCreateManyUsersInput | postsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type likeCreateWithoutUserInput = {
    created_at?: Date | string
    post: postsCreateNestedOneWithoutLikesInput
  }

  export type likeUncheckedCreateWithoutUserInput = {
    like_id?: number
    post_id: number
    created_at?: Date | string
  }

  export type likeCreateOrConnectWithoutUserInput = {
    where: likeWhereUniqueInput
    create: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>
  }

  export type likeCreateManyUserInputEnvelope = {
    data: likeCreateManyUserInput | likeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type commentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
  }

  export type commentsUpdateManyWithWhereWithoutUsersInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type postsUpsertWithWhereUniqueWithoutUsersInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutUsersInput, postsUncheckedUpdateWithoutUsersInput>
    create: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput>
  }

  export type postsUpdateWithWhereUniqueWithoutUsersInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutUsersInput, postsUncheckedUpdateWithoutUsersInput>
  }

  export type postsUpdateManyWithWhereWithoutUsersInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutUsersInput>
  }

  export type likeUpsertWithWhereUniqueWithoutUserInput = {
    where: likeWhereUniqueInput
    update: XOR<likeUpdateWithoutUserInput, likeUncheckedUpdateWithoutUserInput>
    create: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>
  }

  export type likeUpdateWithWhereUniqueWithoutUserInput = {
    where: likeWhereUniqueInput
    data: XOR<likeUpdateWithoutUserInput, likeUncheckedUpdateWithoutUserInput>
  }

  export type likeUpdateManyWithWhereWithoutUserInput = {
    where: likeScalarWhereInput
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyWithoutUserInput>
  }

  export type postsCreateManyCategoriesInput = {
    post_id?: number
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    author_id: number
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
  }

  export type postsUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: likeUpdateManyWithoutPostNestedInput
    comments?: commentsUpdateManyWithoutPostsNestedInput
    post_tags?: post_tagsUpdateManyWithoutPostsNestedInput
    users?: usersUpdateOneRequiredWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutCategoriesInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    author_id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: likeUncheckedUpdateManyWithoutPostNestedInput
    comments?: commentsUncheckedUpdateManyWithoutPostsNestedInput
    post_tags?: post_tagsUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateManyWithoutCategoriesInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    author_id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commentsCreateManyCommentsInput = {
    comment_id?: number
    post_id: number
    user_id?: number | null
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type commentsUpdateWithoutCommentsInput = {
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    posts?: postsUpdateOneRequiredWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutCommentsInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutCommentsInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likeCreateManyPostInput = {
    like_id?: number
    user_id: number
    created_at?: Date | string
  }

  export type commentsCreateManyPostsInput = {
    comment_id?: number
    user_id?: number | null
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    parent_id?: number | null
  }

  export type post_tagsCreateManyPostsInput = {
    tag_id: number
  }

  export type likeUpdateWithoutPostInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likeUncheckedUpdateWithoutPostInput = {
    like_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeUncheckedUpdateManyWithoutPostInput = {
    like_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUpdateWithoutPostsInput = {
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutPostsInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutPostsInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type post_tagsUpdateWithoutPostsInput = {
    tags?: tagsUpdateOneRequiredWithoutPost_tagsNestedInput
  }

  export type post_tagsUncheckedUpdateWithoutPostsInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type post_tagsUncheckedUpdateManyWithoutPostsInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type post_tagsCreateManyTagsInput = {
    post_id: number
  }

  export type post_tagsUpdateWithoutTagsInput = {
    posts?: postsUpdateOneRequiredWithoutPost_tagsNestedInput
  }

  export type post_tagsUncheckedUpdateWithoutTagsInput = {
    post_id?: IntFieldUpdateOperationsInput | number
  }

  export type post_tagsUncheckedUpdateManyWithoutTagsInput = {
    post_id?: IntFieldUpdateOperationsInput | number
  }

  export type commentsCreateManyUsersInput = {
    comment_id?: number
    post_id: number
    author_name?: string | null
    author_email?: string | null
    content: string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    parent_id?: number | null
  }

  export type postsCreateManyUsersInput = {
    post_id?: number
    title: string
    likeCount?: number
    excerpt?: string | null
    content: string
    category_id?: number | null
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    featured_image_url?: string | null
    meta_title?: string | null
    meta_description?: string | null
  }

  export type likeCreateManyUserInput = {
    like_id?: number
    post_id: number
    created_at?: Date | string
  }

  export type commentsUpdateWithoutUsersInput = {
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    posts?: postsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutUsersInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutUsersInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type postsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: likeUpdateManyWithoutPostNestedInput
    comments?: commentsUpdateManyWithoutPostsNestedInput
    post_tags?: post_tagsUpdateManyWithoutPostsNestedInput
    categories?: categoriesUpdateOneWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutUsersInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: likeUncheckedUpdateManyWithoutPostNestedInput
    comments?: commentsUncheckedUpdateManyWithoutPostsNestedInput
    post_tags?: post_tagsUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateManyWithoutUsersInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    likeCount?: IntFieldUpdateOperationsInput | number
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type likeUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postsUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likeUncheckedUpdateWithoutUserInput = {
    like_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeUncheckedUpdateManyWithoutUserInput = {
    like_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}