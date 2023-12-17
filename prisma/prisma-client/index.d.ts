
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Law
 * 
 */
export type Law = $Result.DefaultSelection<Prisma.$LawPayload>
/**
 * Model LawBab
 * 
 */
export type LawBab = $Result.DefaultSelection<Prisma.$LawBabPayload>
/**
 * Model LawData
 * 
 */
export type LawData = $Result.DefaultSelection<Prisma.$LawDataPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Lawyer
 * 
 */
export type Lawyer = $Result.DefaultSelection<Prisma.$LawyerPayload>
/**
 * Model educationalBackground
 * 
 */
export type educationalBackground = $Result.DefaultSelection<Prisma.$educationalBackgroundPayload>
/**
 * Model firmaHukum
 * 
 */
export type firmaHukum = $Result.DefaultSelection<Prisma.$firmaHukumPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Laws
 * const laws = await prisma.law.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Laws
   * const laws = await prisma.law.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.law`: Exposes CRUD operations for the **Law** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Laws
    * const laws = await prisma.law.findMany()
    * ```
    */
  get law(): Prisma.LawDelegate<ExtArgs>;

  /**
   * `prisma.lawBab`: Exposes CRUD operations for the **LawBab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LawBabs
    * const lawBabs = await prisma.lawBab.findMany()
    * ```
    */
  get lawBab(): Prisma.LawBabDelegate<ExtArgs>;

  /**
   * `prisma.lawData`: Exposes CRUD operations for the **LawData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LawData
    * const lawData = await prisma.lawData.findMany()
    * ```
    */
  get lawData(): Prisma.LawDataDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.lawyer`: Exposes CRUD operations for the **Lawyer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lawyers
    * const lawyers = await prisma.lawyer.findMany()
    * ```
    */
  get lawyer(): Prisma.LawyerDelegate<ExtArgs>;

  /**
   * `prisma.educationalBackground`: Exposes CRUD operations for the **educationalBackground** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EducationalBackgrounds
    * const educationalBackgrounds = await prisma.educationalBackground.findMany()
    * ```
    */
  get educationalBackground(): Prisma.educationalBackgroundDelegate<ExtArgs>;

  /**
   * `prisma.firmaHukum`: Exposes CRUD operations for the **firmaHukum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FirmaHukums
    * const firmaHukums = await prisma.firmaHukum.findMany()
    * ```
    */
  get firmaHukum(): Prisma.firmaHukumDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Law: 'Law',
    LawBab: 'LawBab',
    LawData: 'LawData',
    User: 'User',
    Chat: 'Chat',
    Message: 'Message',
    Lawyer: 'Lawyer',
    educationalBackground: 'educationalBackground',
    firmaHukum: 'firmaHukum'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'law' | 'lawBab' | 'lawData' | 'user' | 'chat' | 'message' | 'lawyer' | 'educationalBackground' | 'firmaHukum'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Law: {
        payload: Prisma.$LawPayload<ExtArgs>
        fields: Prisma.LawFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawPayload>
          }
          findFirst: {
            args: Prisma.LawFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawPayload>
          }
          findMany: {
            args: Prisma.LawFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawPayload>[]
          }
          create: {
            args: Prisma.LawCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawPayload>
          }
          createMany: {
            args: Prisma.LawCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LawDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawPayload>
          }
          update: {
            args: Prisma.LawUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawPayload>
          }
          deleteMany: {
            args: Prisma.LawDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LawUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LawUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawPayload>
          }
          aggregate: {
            args: Prisma.LawAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLaw>
          }
          groupBy: {
            args: Prisma.LawGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LawGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawCountArgs<ExtArgs>,
            result: $Utils.Optional<LawCountAggregateOutputType> | number
          }
        }
      }
      LawBab: {
        payload: Prisma.$LawBabPayload<ExtArgs>
        fields: Prisma.LawBabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawBabFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawBabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawBabFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawBabPayload>
          }
          findFirst: {
            args: Prisma.LawBabFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawBabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawBabFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawBabPayload>
          }
          findMany: {
            args: Prisma.LawBabFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawBabPayload>[]
          }
          create: {
            args: Prisma.LawBabCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawBabPayload>
          }
          createMany: {
            args: Prisma.LawBabCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LawBabDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawBabPayload>
          }
          update: {
            args: Prisma.LawBabUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawBabPayload>
          }
          deleteMany: {
            args: Prisma.LawBabDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LawBabUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LawBabUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawBabPayload>
          }
          aggregate: {
            args: Prisma.LawBabAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLawBab>
          }
          groupBy: {
            args: Prisma.LawBabGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LawBabGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawBabCountArgs<ExtArgs>,
            result: $Utils.Optional<LawBabCountAggregateOutputType> | number
          }
        }
      }
      LawData: {
        payload: Prisma.$LawDataPayload<ExtArgs>
        fields: Prisma.LawDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawDataPayload>
          }
          findFirst: {
            args: Prisma.LawDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawDataPayload>
          }
          findMany: {
            args: Prisma.LawDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawDataPayload>[]
          }
          create: {
            args: Prisma.LawDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawDataPayload>
          }
          createMany: {
            args: Prisma.LawDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LawDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawDataPayload>
          }
          update: {
            args: Prisma.LawDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawDataPayload>
          }
          deleteMany: {
            args: Prisma.LawDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LawDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LawDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawDataPayload>
          }
          aggregate: {
            args: Prisma.LawDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLawData>
          }
          groupBy: {
            args: Prisma.LawDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LawDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawDataCountArgs<ExtArgs>,
            result: $Utils.Optional<LawDataCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Lawyer: {
        payload: Prisma.$LawyerPayload<ExtArgs>
        fields: Prisma.LawyerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawyerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawyerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          findFirst: {
            args: Prisma.LawyerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawyerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          findMany: {
            args: Prisma.LawyerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>[]
          }
          create: {
            args: Prisma.LawyerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          createMany: {
            args: Prisma.LawyerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LawyerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          update: {
            args: Prisma.LawyerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          deleteMany: {
            args: Prisma.LawyerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LawyerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LawyerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          aggregate: {
            args: Prisma.LawyerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLawyer>
          }
          groupBy: {
            args: Prisma.LawyerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LawyerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawyerCountArgs<ExtArgs>,
            result: $Utils.Optional<LawyerCountAggregateOutputType> | number
          }
        }
      }
      educationalBackground: {
        payload: Prisma.$educationalBackgroundPayload<ExtArgs>
        fields: Prisma.educationalBackgroundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.educationalBackgroundFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$educationalBackgroundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.educationalBackgroundFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$educationalBackgroundPayload>
          }
          findFirst: {
            args: Prisma.educationalBackgroundFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$educationalBackgroundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.educationalBackgroundFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$educationalBackgroundPayload>
          }
          findMany: {
            args: Prisma.educationalBackgroundFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$educationalBackgroundPayload>[]
          }
          create: {
            args: Prisma.educationalBackgroundCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$educationalBackgroundPayload>
          }
          createMany: {
            args: Prisma.educationalBackgroundCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.educationalBackgroundDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$educationalBackgroundPayload>
          }
          update: {
            args: Prisma.educationalBackgroundUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$educationalBackgroundPayload>
          }
          deleteMany: {
            args: Prisma.educationalBackgroundDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.educationalBackgroundUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.educationalBackgroundUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$educationalBackgroundPayload>
          }
          aggregate: {
            args: Prisma.EducationalBackgroundAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEducationalBackground>
          }
          groupBy: {
            args: Prisma.educationalBackgroundGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EducationalBackgroundGroupByOutputType>[]
          }
          count: {
            args: Prisma.educationalBackgroundCountArgs<ExtArgs>,
            result: $Utils.Optional<EducationalBackgroundCountAggregateOutputType> | number
          }
        }
      }
      firmaHukum: {
        payload: Prisma.$firmaHukumPayload<ExtArgs>
        fields: Prisma.firmaHukumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.firmaHukumFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$firmaHukumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.firmaHukumFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$firmaHukumPayload>
          }
          findFirst: {
            args: Prisma.firmaHukumFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$firmaHukumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.firmaHukumFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$firmaHukumPayload>
          }
          findMany: {
            args: Prisma.firmaHukumFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$firmaHukumPayload>[]
          }
          create: {
            args: Prisma.firmaHukumCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$firmaHukumPayload>
          }
          createMany: {
            args: Prisma.firmaHukumCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.firmaHukumDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$firmaHukumPayload>
          }
          update: {
            args: Prisma.firmaHukumUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$firmaHukumPayload>
          }
          deleteMany: {
            args: Prisma.firmaHukumDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.firmaHukumUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.firmaHukumUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$firmaHukumPayload>
          }
          aggregate: {
            args: Prisma.FirmaHukumAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFirmaHukum>
          }
          groupBy: {
            args: Prisma.firmaHukumGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FirmaHukumGroupByOutputType>[]
          }
          count: {
            args: Prisma.firmaHukumCountArgs<ExtArgs>,
            result: $Utils.Optional<FirmaHukumCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type LawCountOutputType
   */

  export type LawCountOutputType = {
    LawBab: number
  }

  export type LawCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LawBab?: boolean | LawCountOutputTypeCountLawBabArgs
  }

  // Custom InputTypes

  /**
   * LawCountOutputType without action
   */
  export type LawCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawCountOutputType
     */
    select?: LawCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * LawCountOutputType without action
   */
  export type LawCountOutputTypeCountLawBabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawBabWhereInput
  }



  /**
   * Count Type LawBabCountOutputType
   */

  export type LawBabCountOutputType = {
    LawData: number
  }

  export type LawBabCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LawData?: boolean | LawBabCountOutputTypeCountLawDataArgs
  }

  // Custom InputTypes

  /**
   * LawBabCountOutputType without action
   */
  export type LawBabCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawBabCountOutputType
     */
    select?: LawBabCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * LawBabCountOutputType without action
   */
  export type LawBabCountOutputTypeCountLawDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawDataWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chat1: number
    chat2: number
    from: number
    to: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat1?: boolean | UserCountOutputTypeCountChat1Args
    chat2?: boolean | UserCountOutputTypeCountChat2Args
    from?: boolean | UserCountOutputTypeCountFromArgs
    to?: boolean | UserCountOutputTypeCountToArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChat1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChat2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    Message: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Message?: boolean | ChatCountOutputTypeCountMessageArgs
  }

  // Custom InputTypes

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Count Type LawyerCountOutputType
   */

  export type LawyerCountOutputType = {
    educationalBackground: number
    firmaHukum: number
  }

  export type LawyerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educationalBackground?: boolean | LawyerCountOutputTypeCountEducationalBackgroundArgs
    firmaHukum?: boolean | LawyerCountOutputTypeCountFirmaHukumArgs
  }

  // Custom InputTypes

  /**
   * LawyerCountOutputType without action
   */
  export type LawyerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerCountOutputType
     */
    select?: LawyerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * LawyerCountOutputType without action
   */
  export type LawyerCountOutputTypeCountEducationalBackgroundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: educationalBackgroundWhereInput
  }


  /**
   * LawyerCountOutputType without action
   */
  export type LawyerCountOutputTypeCountFirmaHukumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: firmaHukumWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Law
   */

  export type AggregateLaw = {
    _count: LawCountAggregateOutputType | null
    _avg: LawAvgAggregateOutputType | null
    _sum: LawSumAggregateOutputType | null
    _min: LawMinAggregateOutputType | null
    _max: LawMaxAggregateOutputType | null
  }

  export type LawAvgAggregateOutputType = {
    id: number | null
  }

  export type LawSumAggregateOutputType = {
    id: number | null
  }

  export type LawMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LawMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LawCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LawAvgAggregateInputType = {
    id?: true
  }

  export type LawSumAggregateInputType = {
    id?: true
  }

  export type LawMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LawMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LawCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LawAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Law to aggregate.
     */
    where?: LawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laws to fetch.
     */
    orderBy?: LawOrderByWithRelationInput | LawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Laws
    **/
    _count?: true | LawCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawMaxAggregateInputType
  }

  export type GetLawAggregateType<T extends LawAggregateArgs> = {
        [P in keyof T & keyof AggregateLaw]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaw[P]>
      : GetScalarType<T[P], AggregateLaw[P]>
  }




  export type LawGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawWhereInput
    orderBy?: LawOrderByWithAggregationInput | LawOrderByWithAggregationInput[]
    by: LawScalarFieldEnum[] | LawScalarFieldEnum
    having?: LawScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawCountAggregateInputType | true
    _avg?: LawAvgAggregateInputType
    _sum?: LawSumAggregateInputType
    _min?: LawMinAggregateInputType
    _max?: LawMaxAggregateInputType
  }

  export type LawGroupByOutputType = {
    id: number
    title: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: LawCountAggregateOutputType | null
    _avg: LawAvgAggregateOutputType | null
    _sum: LawSumAggregateOutputType | null
    _min: LawMinAggregateOutputType | null
    _max: LawMaxAggregateOutputType | null
  }

  type GetLawGroupByPayload<T extends LawGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawGroupByOutputType[P]>
            : GetScalarType<T[P], LawGroupByOutputType[P]>
        }
      >
    >


  export type LawSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    LawBab?: boolean | Law$LawBabArgs<ExtArgs>
    _count?: boolean | LawCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["law"]>

  export type LawSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LawInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LawBab?: boolean | Law$LawBabArgs<ExtArgs>
    _count?: boolean | LawCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $LawPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Law"
    objects: {
      LawBab: Prisma.$LawBabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["law"]>
    composites: {}
  }


  type LawGetPayload<S extends boolean | null | undefined | LawDefaultArgs> = $Result.GetResult<Prisma.$LawPayload, S>

  type LawCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LawFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: LawCountAggregateInputType | true
    }

  export interface LawDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Law'], meta: { name: 'Law' } }
    /**
     * Find zero or one Law that matches the filter.
     * @param {LawFindUniqueArgs} args - Arguments to find a Law
     * @example
     * // Get one Law
     * const law = await prisma.law.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LawFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LawFindUniqueArgs<ExtArgs>>
    ): Prisma__LawClient<$Result.GetResult<Prisma.$LawPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Law that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LawFindUniqueOrThrowArgs} args - Arguments to find a Law
     * @example
     * // Get one Law
     * const law = await prisma.law.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LawFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LawFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LawClient<$Result.GetResult<Prisma.$LawPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Law that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawFindFirstArgs} args - Arguments to find a Law
     * @example
     * // Get one Law
     * const law = await prisma.law.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LawFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LawFindFirstArgs<ExtArgs>>
    ): Prisma__LawClient<$Result.GetResult<Prisma.$LawPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Law that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawFindFirstOrThrowArgs} args - Arguments to find a Law
     * @example
     * // Get one Law
     * const law = await prisma.law.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LawFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LawFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LawClient<$Result.GetResult<Prisma.$LawPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Laws that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laws
     * const laws = await prisma.law.findMany()
     * 
     * // Get first 10 Laws
     * const laws = await prisma.law.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawWithIdOnly = await prisma.law.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LawFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Law.
     * @param {LawCreateArgs} args - Arguments to create a Law.
     * @example
     * // Create one Law
     * const Law = await prisma.law.create({
     *   data: {
     *     // ... data to create a Law
     *   }
     * })
     * 
    **/
    create<T extends LawCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LawCreateArgs<ExtArgs>>
    ): Prisma__LawClient<$Result.GetResult<Prisma.$LawPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Laws.
     *     @param {LawCreateManyArgs} args - Arguments to create many Laws.
     *     @example
     *     // Create many Laws
     *     const law = await prisma.law.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LawCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Law.
     * @param {LawDeleteArgs} args - Arguments to delete one Law.
     * @example
     * // Delete one Law
     * const Law = await prisma.law.delete({
     *   where: {
     *     // ... filter to delete one Law
     *   }
     * })
     * 
    **/
    delete<T extends LawDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LawDeleteArgs<ExtArgs>>
    ): Prisma__LawClient<$Result.GetResult<Prisma.$LawPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Law.
     * @param {LawUpdateArgs} args - Arguments to update one Law.
     * @example
     * // Update one Law
     * const law = await prisma.law.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LawUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LawUpdateArgs<ExtArgs>>
    ): Prisma__LawClient<$Result.GetResult<Prisma.$LawPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Laws.
     * @param {LawDeleteManyArgs} args - Arguments to filter Laws to delete.
     * @example
     * // Delete a few Laws
     * const { count } = await prisma.law.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LawDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laws
     * const law = await prisma.law.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LawUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LawUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Law.
     * @param {LawUpsertArgs} args - Arguments to update or create a Law.
     * @example
     * // Update or create a Law
     * const law = await prisma.law.upsert({
     *   create: {
     *     // ... data to create a Law
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Law we want to update
     *   }
     * })
    **/
    upsert<T extends LawUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LawUpsertArgs<ExtArgs>>
    ): Prisma__LawClient<$Result.GetResult<Prisma.$LawPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Laws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawCountArgs} args - Arguments to filter Laws to count.
     * @example
     * // Count the number of Laws
     * const count = await prisma.law.count({
     *   where: {
     *     // ... the filter for the Laws we want to count
     *   }
     * })
    **/
    count<T extends LawCountArgs>(
      args?: Subset<T, LawCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Law.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawAggregateArgs>(args: Subset<T, LawAggregateArgs>): Prisma.PrismaPromise<GetLawAggregateType<T>>

    /**
     * Group by Law.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawGroupByArgs} args - Group by arguments.
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
      T extends LawGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawGroupByArgs['orderBy'] }
        : { orderBy?: LawGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Law model
   */
  readonly fields: LawFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Law.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    LawBab<T extends Law$LawBabArgs<ExtArgs> = {}>(args?: Subset<T, Law$LawBabArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawBabPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Law model
   */ 
  interface LawFieldRefs {
    readonly id: FieldRef<"Law", 'Int'>
    readonly title: FieldRef<"Law", 'String'>
    readonly description: FieldRef<"Law", 'String'>
    readonly createdAt: FieldRef<"Law", 'DateTime'>
    readonly updatedAt: FieldRef<"Law", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Law findUnique
   */
  export type LawFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Law
     */
    select?: LawSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawInclude<ExtArgs> | null
    /**
     * Filter, which Law to fetch.
     */
    where: LawWhereUniqueInput
  }


  /**
   * Law findUniqueOrThrow
   */
  export type LawFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Law
     */
    select?: LawSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawInclude<ExtArgs> | null
    /**
     * Filter, which Law to fetch.
     */
    where: LawWhereUniqueInput
  }


  /**
   * Law findFirst
   */
  export type LawFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Law
     */
    select?: LawSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawInclude<ExtArgs> | null
    /**
     * Filter, which Law to fetch.
     */
    where?: LawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laws to fetch.
     */
    orderBy?: LawOrderByWithRelationInput | LawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laws.
     */
    cursor?: LawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laws.
     */
    distinct?: LawScalarFieldEnum | LawScalarFieldEnum[]
  }


  /**
   * Law findFirstOrThrow
   */
  export type LawFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Law
     */
    select?: LawSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawInclude<ExtArgs> | null
    /**
     * Filter, which Law to fetch.
     */
    where?: LawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laws to fetch.
     */
    orderBy?: LawOrderByWithRelationInput | LawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laws.
     */
    cursor?: LawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laws.
     */
    distinct?: LawScalarFieldEnum | LawScalarFieldEnum[]
  }


  /**
   * Law findMany
   */
  export type LawFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Law
     */
    select?: LawSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawInclude<ExtArgs> | null
    /**
     * Filter, which Laws to fetch.
     */
    where?: LawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laws to fetch.
     */
    orderBy?: LawOrderByWithRelationInput | LawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Laws.
     */
    cursor?: LawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laws.
     */
    skip?: number
    distinct?: LawScalarFieldEnum | LawScalarFieldEnum[]
  }


  /**
   * Law create
   */
  export type LawCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Law
     */
    select?: LawSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawInclude<ExtArgs> | null
    /**
     * The data needed to create a Law.
     */
    data: XOR<LawCreateInput, LawUncheckedCreateInput>
  }


  /**
   * Law createMany
   */
  export type LawCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Laws.
     */
    data: LawCreateManyInput | LawCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Law update
   */
  export type LawUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Law
     */
    select?: LawSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawInclude<ExtArgs> | null
    /**
     * The data needed to update a Law.
     */
    data: XOR<LawUpdateInput, LawUncheckedUpdateInput>
    /**
     * Choose, which Law to update.
     */
    where: LawWhereUniqueInput
  }


  /**
   * Law updateMany
   */
  export type LawUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Laws.
     */
    data: XOR<LawUpdateManyMutationInput, LawUncheckedUpdateManyInput>
    /**
     * Filter which Laws to update
     */
    where?: LawWhereInput
  }


  /**
   * Law upsert
   */
  export type LawUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Law
     */
    select?: LawSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawInclude<ExtArgs> | null
    /**
     * The filter to search for the Law to update in case it exists.
     */
    where: LawWhereUniqueInput
    /**
     * In case the Law found by the `where` argument doesn't exist, create a new Law with this data.
     */
    create: XOR<LawCreateInput, LawUncheckedCreateInput>
    /**
     * In case the Law was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawUpdateInput, LawUncheckedUpdateInput>
  }


  /**
   * Law delete
   */
  export type LawDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Law
     */
    select?: LawSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawInclude<ExtArgs> | null
    /**
     * Filter which Law to delete.
     */
    where: LawWhereUniqueInput
  }


  /**
   * Law deleteMany
   */
  export type LawDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laws to delete
     */
    where?: LawWhereInput
  }


  /**
   * Law.LawBab
   */
  export type Law$LawBabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawBab
     */
    select?: LawBabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawBabInclude<ExtArgs> | null
    where?: LawBabWhereInput
    orderBy?: LawBabOrderByWithRelationInput | LawBabOrderByWithRelationInput[]
    cursor?: LawBabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LawBabScalarFieldEnum | LawBabScalarFieldEnum[]
  }


  /**
   * Law without action
   */
  export type LawDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Law
     */
    select?: LawSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawInclude<ExtArgs> | null
  }



  /**
   * Model LawBab
   */

  export type AggregateLawBab = {
    _count: LawBabCountAggregateOutputType | null
    _avg: LawBabAvgAggregateOutputType | null
    _sum: LawBabSumAggregateOutputType | null
    _min: LawBabMinAggregateOutputType | null
    _max: LawBabMaxAggregateOutputType | null
  }

  export type LawBabAvgAggregateOutputType = {
    id: number | null
    lawId: number | null
  }

  export type LawBabSumAggregateOutputType = {
    id: number | null
    lawId: number | null
  }

  export type LawBabMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lawId: number | null
  }

  export type LawBabMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lawId: number | null
  }

  export type LawBabCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    lawId: number
    _all: number
  }


  export type LawBabAvgAggregateInputType = {
    id?: true
    lawId?: true
  }

  export type LawBabSumAggregateInputType = {
    id?: true
    lawId?: true
  }

  export type LawBabMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    lawId?: true
  }

  export type LawBabMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    lawId?: true
  }

  export type LawBabCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    lawId?: true
    _all?: true
  }

  export type LawBabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawBab to aggregate.
     */
    where?: LawBabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawBabs to fetch.
     */
    orderBy?: LawBabOrderByWithRelationInput | LawBabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawBabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawBabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawBabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LawBabs
    **/
    _count?: true | LawBabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawBabAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawBabSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawBabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawBabMaxAggregateInputType
  }

  export type GetLawBabAggregateType<T extends LawBabAggregateArgs> = {
        [P in keyof T & keyof AggregateLawBab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawBab[P]>
      : GetScalarType<T[P], AggregateLawBab[P]>
  }




  export type LawBabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawBabWhereInput
    orderBy?: LawBabOrderByWithAggregationInput | LawBabOrderByWithAggregationInput[]
    by: LawBabScalarFieldEnum[] | LawBabScalarFieldEnum
    having?: LawBabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawBabCountAggregateInputType | true
    _avg?: LawBabAvgAggregateInputType
    _sum?: LawBabSumAggregateInputType
    _min?: LawBabMinAggregateInputType
    _max?: LawBabMaxAggregateInputType
  }

  export type LawBabGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    lawId: number
    _count: LawBabCountAggregateOutputType | null
    _avg: LawBabAvgAggregateOutputType | null
    _sum: LawBabSumAggregateOutputType | null
    _min: LawBabMinAggregateOutputType | null
    _max: LawBabMaxAggregateOutputType | null
  }

  type GetLawBabGroupByPayload<T extends LawBabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawBabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawBabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawBabGroupByOutputType[P]>
            : GetScalarType<T[P], LawBabGroupByOutputType[P]>
        }
      >
    >


  export type LawBabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lawId?: boolean
    law?: boolean | LawDefaultArgs<ExtArgs>
    LawData?: boolean | LawBab$LawDataArgs<ExtArgs>
    _count?: boolean | LawBabCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawBab"]>

  export type LawBabSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lawId?: boolean
  }

  export type LawBabInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    law?: boolean | LawDefaultArgs<ExtArgs>
    LawData?: boolean | LawBab$LawDataArgs<ExtArgs>
    _count?: boolean | LawBabCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $LawBabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LawBab"
    objects: {
      law: Prisma.$LawPayload<ExtArgs>
      LawData: Prisma.$LawDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      lawId: number
    }, ExtArgs["result"]["lawBab"]>
    composites: {}
  }


  type LawBabGetPayload<S extends boolean | null | undefined | LawBabDefaultArgs> = $Result.GetResult<Prisma.$LawBabPayload, S>

  type LawBabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LawBabFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: LawBabCountAggregateInputType | true
    }

  export interface LawBabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LawBab'], meta: { name: 'LawBab' } }
    /**
     * Find zero or one LawBab that matches the filter.
     * @param {LawBabFindUniqueArgs} args - Arguments to find a LawBab
     * @example
     * // Get one LawBab
     * const lawBab = await prisma.lawBab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LawBabFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LawBabFindUniqueArgs<ExtArgs>>
    ): Prisma__LawBabClient<$Result.GetResult<Prisma.$LawBabPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LawBab that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LawBabFindUniqueOrThrowArgs} args - Arguments to find a LawBab
     * @example
     * // Get one LawBab
     * const lawBab = await prisma.lawBab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LawBabFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LawBabFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LawBabClient<$Result.GetResult<Prisma.$LawBabPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LawBab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawBabFindFirstArgs} args - Arguments to find a LawBab
     * @example
     * // Get one LawBab
     * const lawBab = await prisma.lawBab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LawBabFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LawBabFindFirstArgs<ExtArgs>>
    ): Prisma__LawBabClient<$Result.GetResult<Prisma.$LawBabPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LawBab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawBabFindFirstOrThrowArgs} args - Arguments to find a LawBab
     * @example
     * // Get one LawBab
     * const lawBab = await prisma.lawBab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LawBabFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LawBabFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LawBabClient<$Result.GetResult<Prisma.$LawBabPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LawBabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawBabFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LawBabs
     * const lawBabs = await prisma.lawBab.findMany()
     * 
     * // Get first 10 LawBabs
     * const lawBabs = await prisma.lawBab.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawBabWithIdOnly = await prisma.lawBab.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LawBabFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawBabFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawBabPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LawBab.
     * @param {LawBabCreateArgs} args - Arguments to create a LawBab.
     * @example
     * // Create one LawBab
     * const LawBab = await prisma.lawBab.create({
     *   data: {
     *     // ... data to create a LawBab
     *   }
     * })
     * 
    **/
    create<T extends LawBabCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LawBabCreateArgs<ExtArgs>>
    ): Prisma__LawBabClient<$Result.GetResult<Prisma.$LawBabPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LawBabs.
     *     @param {LawBabCreateManyArgs} args - Arguments to create many LawBabs.
     *     @example
     *     // Create many LawBabs
     *     const lawBab = await prisma.lawBab.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LawBabCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawBabCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LawBab.
     * @param {LawBabDeleteArgs} args - Arguments to delete one LawBab.
     * @example
     * // Delete one LawBab
     * const LawBab = await prisma.lawBab.delete({
     *   where: {
     *     // ... filter to delete one LawBab
     *   }
     * })
     * 
    **/
    delete<T extends LawBabDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LawBabDeleteArgs<ExtArgs>>
    ): Prisma__LawBabClient<$Result.GetResult<Prisma.$LawBabPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LawBab.
     * @param {LawBabUpdateArgs} args - Arguments to update one LawBab.
     * @example
     * // Update one LawBab
     * const lawBab = await prisma.lawBab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LawBabUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LawBabUpdateArgs<ExtArgs>>
    ): Prisma__LawBabClient<$Result.GetResult<Prisma.$LawBabPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LawBabs.
     * @param {LawBabDeleteManyArgs} args - Arguments to filter LawBabs to delete.
     * @example
     * // Delete a few LawBabs
     * const { count } = await prisma.lawBab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LawBabDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawBabDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawBabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawBabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LawBabs
     * const lawBab = await prisma.lawBab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LawBabUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LawBabUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LawBab.
     * @param {LawBabUpsertArgs} args - Arguments to update or create a LawBab.
     * @example
     * // Update or create a LawBab
     * const lawBab = await prisma.lawBab.upsert({
     *   create: {
     *     // ... data to create a LawBab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LawBab we want to update
     *   }
     * })
    **/
    upsert<T extends LawBabUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LawBabUpsertArgs<ExtArgs>>
    ): Prisma__LawBabClient<$Result.GetResult<Prisma.$LawBabPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LawBabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawBabCountArgs} args - Arguments to filter LawBabs to count.
     * @example
     * // Count the number of LawBabs
     * const count = await prisma.lawBab.count({
     *   where: {
     *     // ... the filter for the LawBabs we want to count
     *   }
     * })
    **/
    count<T extends LawBabCountArgs>(
      args?: Subset<T, LawBabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawBabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LawBab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawBabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawBabAggregateArgs>(args: Subset<T, LawBabAggregateArgs>): Prisma.PrismaPromise<GetLawBabAggregateType<T>>

    /**
     * Group by LawBab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawBabGroupByArgs} args - Group by arguments.
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
      T extends LawBabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawBabGroupByArgs['orderBy'] }
        : { orderBy?: LawBabGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawBabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawBabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LawBab model
   */
  readonly fields: LawBabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LawBab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawBabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    law<T extends LawDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LawDefaultArgs<ExtArgs>>): Prisma__LawClient<$Result.GetResult<Prisma.$LawPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    LawData<T extends LawBab$LawDataArgs<ExtArgs> = {}>(args?: Subset<T, LawBab$LawDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawDataPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LawBab model
   */ 
  interface LawBabFieldRefs {
    readonly id: FieldRef<"LawBab", 'Int'>
    readonly name: FieldRef<"LawBab", 'String'>
    readonly description: FieldRef<"LawBab", 'String'>
    readonly createdAt: FieldRef<"LawBab", 'DateTime'>
    readonly updatedAt: FieldRef<"LawBab", 'DateTime'>
    readonly lawId: FieldRef<"LawBab", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * LawBab findUnique
   */
  export type LawBabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawBab
     */
    select?: LawBabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawBabInclude<ExtArgs> | null
    /**
     * Filter, which LawBab to fetch.
     */
    where: LawBabWhereUniqueInput
  }


  /**
   * LawBab findUniqueOrThrow
   */
  export type LawBabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawBab
     */
    select?: LawBabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawBabInclude<ExtArgs> | null
    /**
     * Filter, which LawBab to fetch.
     */
    where: LawBabWhereUniqueInput
  }


  /**
   * LawBab findFirst
   */
  export type LawBabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawBab
     */
    select?: LawBabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawBabInclude<ExtArgs> | null
    /**
     * Filter, which LawBab to fetch.
     */
    where?: LawBabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawBabs to fetch.
     */
    orderBy?: LawBabOrderByWithRelationInput | LawBabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawBabs.
     */
    cursor?: LawBabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawBabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawBabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawBabs.
     */
    distinct?: LawBabScalarFieldEnum | LawBabScalarFieldEnum[]
  }


  /**
   * LawBab findFirstOrThrow
   */
  export type LawBabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawBab
     */
    select?: LawBabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawBabInclude<ExtArgs> | null
    /**
     * Filter, which LawBab to fetch.
     */
    where?: LawBabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawBabs to fetch.
     */
    orderBy?: LawBabOrderByWithRelationInput | LawBabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawBabs.
     */
    cursor?: LawBabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawBabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawBabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawBabs.
     */
    distinct?: LawBabScalarFieldEnum | LawBabScalarFieldEnum[]
  }


  /**
   * LawBab findMany
   */
  export type LawBabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawBab
     */
    select?: LawBabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawBabInclude<ExtArgs> | null
    /**
     * Filter, which LawBabs to fetch.
     */
    where?: LawBabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawBabs to fetch.
     */
    orderBy?: LawBabOrderByWithRelationInput | LawBabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LawBabs.
     */
    cursor?: LawBabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawBabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawBabs.
     */
    skip?: number
    distinct?: LawBabScalarFieldEnum | LawBabScalarFieldEnum[]
  }


  /**
   * LawBab create
   */
  export type LawBabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawBab
     */
    select?: LawBabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawBabInclude<ExtArgs> | null
    /**
     * The data needed to create a LawBab.
     */
    data: XOR<LawBabCreateInput, LawBabUncheckedCreateInput>
  }


  /**
   * LawBab createMany
   */
  export type LawBabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LawBabs.
     */
    data: LawBabCreateManyInput | LawBabCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LawBab update
   */
  export type LawBabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawBab
     */
    select?: LawBabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawBabInclude<ExtArgs> | null
    /**
     * The data needed to update a LawBab.
     */
    data: XOR<LawBabUpdateInput, LawBabUncheckedUpdateInput>
    /**
     * Choose, which LawBab to update.
     */
    where: LawBabWhereUniqueInput
  }


  /**
   * LawBab updateMany
   */
  export type LawBabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LawBabs.
     */
    data: XOR<LawBabUpdateManyMutationInput, LawBabUncheckedUpdateManyInput>
    /**
     * Filter which LawBabs to update
     */
    where?: LawBabWhereInput
  }


  /**
   * LawBab upsert
   */
  export type LawBabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawBab
     */
    select?: LawBabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawBabInclude<ExtArgs> | null
    /**
     * The filter to search for the LawBab to update in case it exists.
     */
    where: LawBabWhereUniqueInput
    /**
     * In case the LawBab found by the `where` argument doesn't exist, create a new LawBab with this data.
     */
    create: XOR<LawBabCreateInput, LawBabUncheckedCreateInput>
    /**
     * In case the LawBab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawBabUpdateInput, LawBabUncheckedUpdateInput>
  }


  /**
   * LawBab delete
   */
  export type LawBabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawBab
     */
    select?: LawBabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawBabInclude<ExtArgs> | null
    /**
     * Filter which LawBab to delete.
     */
    where: LawBabWhereUniqueInput
  }


  /**
   * LawBab deleteMany
   */
  export type LawBabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawBabs to delete
     */
    where?: LawBabWhereInput
  }


  /**
   * LawBab.LawData
   */
  export type LawBab$LawDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawData
     */
    select?: LawDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawDataInclude<ExtArgs> | null
    where?: LawDataWhereInput
    orderBy?: LawDataOrderByWithRelationInput | LawDataOrderByWithRelationInput[]
    cursor?: LawDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LawDataScalarFieldEnum | LawDataScalarFieldEnum[]
  }


  /**
   * LawBab without action
   */
  export type LawBabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawBab
     */
    select?: LawBabSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawBabInclude<ExtArgs> | null
  }



  /**
   * Model LawData
   */

  export type AggregateLawData = {
    _count: LawDataCountAggregateOutputType | null
    _avg: LawDataAvgAggregateOutputType | null
    _sum: LawDataSumAggregateOutputType | null
    _min: LawDataMinAggregateOutputType | null
    _max: LawDataMaxAggregateOutputType | null
  }

  export type LawDataAvgAggregateOutputType = {
    id: number | null
    lawBabId: number | null
  }

  export type LawDataSumAggregateOutputType = {
    id: number | null
    lawBabId: number | null
  }

  export type LawDataMinAggregateOutputType = {
    id: number | null
    pasal: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lawBabId: number | null
  }

  export type LawDataMaxAggregateOutputType = {
    id: number | null
    pasal: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lawBabId: number | null
  }

  export type LawDataCountAggregateOutputType = {
    id: number
    pasal: number
    content: number
    createdAt: number
    updatedAt: number
    lawBabId: number
    _all: number
  }


  export type LawDataAvgAggregateInputType = {
    id?: true
    lawBabId?: true
  }

  export type LawDataSumAggregateInputType = {
    id?: true
    lawBabId?: true
  }

  export type LawDataMinAggregateInputType = {
    id?: true
    pasal?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    lawBabId?: true
  }

  export type LawDataMaxAggregateInputType = {
    id?: true
    pasal?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    lawBabId?: true
  }

  export type LawDataCountAggregateInputType = {
    id?: true
    pasal?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    lawBabId?: true
    _all?: true
  }

  export type LawDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawData to aggregate.
     */
    where?: LawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawData to fetch.
     */
    orderBy?: LawDataOrderByWithRelationInput | LawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LawData
    **/
    _count?: true | LawDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawDataMaxAggregateInputType
  }

  export type GetLawDataAggregateType<T extends LawDataAggregateArgs> = {
        [P in keyof T & keyof AggregateLawData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawData[P]>
      : GetScalarType<T[P], AggregateLawData[P]>
  }




  export type LawDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawDataWhereInput
    orderBy?: LawDataOrderByWithAggregationInput | LawDataOrderByWithAggregationInput[]
    by: LawDataScalarFieldEnum[] | LawDataScalarFieldEnum
    having?: LawDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawDataCountAggregateInputType | true
    _avg?: LawDataAvgAggregateInputType
    _sum?: LawDataSumAggregateInputType
    _min?: LawDataMinAggregateInputType
    _max?: LawDataMaxAggregateInputType
  }

  export type LawDataGroupByOutputType = {
    id: number
    pasal: string
    content: string
    createdAt: Date
    updatedAt: Date
    lawBabId: number
    _count: LawDataCountAggregateOutputType | null
    _avg: LawDataAvgAggregateOutputType | null
    _sum: LawDataSumAggregateOutputType | null
    _min: LawDataMinAggregateOutputType | null
    _max: LawDataMaxAggregateOutputType | null
  }

  type GetLawDataGroupByPayload<T extends LawDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawDataGroupByOutputType[P]>
            : GetScalarType<T[P], LawDataGroupByOutputType[P]>
        }
      >
    >


  export type LawDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasal?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lawBabId?: boolean
    lawBab?: boolean | LawBabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawData"]>

  export type LawDataSelectScalar = {
    id?: boolean
    pasal?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lawBabId?: boolean
  }

  export type LawDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawBab?: boolean | LawBabDefaultArgs<ExtArgs>
  }


  export type $LawDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LawData"
    objects: {
      lawBab: Prisma.$LawBabPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pasal: string
      content: string
      createdAt: Date
      updatedAt: Date
      lawBabId: number
    }, ExtArgs["result"]["lawData"]>
    composites: {}
  }


  type LawDataGetPayload<S extends boolean | null | undefined | LawDataDefaultArgs> = $Result.GetResult<Prisma.$LawDataPayload, S>

  type LawDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LawDataFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: LawDataCountAggregateInputType | true
    }

  export interface LawDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LawData'], meta: { name: 'LawData' } }
    /**
     * Find zero or one LawData that matches the filter.
     * @param {LawDataFindUniqueArgs} args - Arguments to find a LawData
     * @example
     * // Get one LawData
     * const lawData = await prisma.lawData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LawDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LawDataFindUniqueArgs<ExtArgs>>
    ): Prisma__LawDataClient<$Result.GetResult<Prisma.$LawDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LawData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LawDataFindUniqueOrThrowArgs} args - Arguments to find a LawData
     * @example
     * // Get one LawData
     * const lawData = await prisma.lawData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LawDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LawDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LawDataClient<$Result.GetResult<Prisma.$LawDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LawData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawDataFindFirstArgs} args - Arguments to find a LawData
     * @example
     * // Get one LawData
     * const lawData = await prisma.lawData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LawDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LawDataFindFirstArgs<ExtArgs>>
    ): Prisma__LawDataClient<$Result.GetResult<Prisma.$LawDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LawData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawDataFindFirstOrThrowArgs} args - Arguments to find a LawData
     * @example
     * // Get one LawData
     * const lawData = await prisma.lawData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LawDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LawDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LawDataClient<$Result.GetResult<Prisma.$LawDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LawData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LawData
     * const lawData = await prisma.lawData.findMany()
     * 
     * // Get first 10 LawData
     * const lawData = await prisma.lawData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawDataWithIdOnly = await prisma.lawData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LawDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LawData.
     * @param {LawDataCreateArgs} args - Arguments to create a LawData.
     * @example
     * // Create one LawData
     * const LawData = await prisma.lawData.create({
     *   data: {
     *     // ... data to create a LawData
     *   }
     * })
     * 
    **/
    create<T extends LawDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LawDataCreateArgs<ExtArgs>>
    ): Prisma__LawDataClient<$Result.GetResult<Prisma.$LawDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LawData.
     *     @param {LawDataCreateManyArgs} args - Arguments to create many LawData.
     *     @example
     *     // Create many LawData
     *     const lawData = await prisma.lawData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LawDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LawData.
     * @param {LawDataDeleteArgs} args - Arguments to delete one LawData.
     * @example
     * // Delete one LawData
     * const LawData = await prisma.lawData.delete({
     *   where: {
     *     // ... filter to delete one LawData
     *   }
     * })
     * 
    **/
    delete<T extends LawDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LawDataDeleteArgs<ExtArgs>>
    ): Prisma__LawDataClient<$Result.GetResult<Prisma.$LawDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LawData.
     * @param {LawDataUpdateArgs} args - Arguments to update one LawData.
     * @example
     * // Update one LawData
     * const lawData = await prisma.lawData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LawDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LawDataUpdateArgs<ExtArgs>>
    ): Prisma__LawDataClient<$Result.GetResult<Prisma.$LawDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LawData.
     * @param {LawDataDeleteManyArgs} args - Arguments to filter LawData to delete.
     * @example
     * // Delete a few LawData
     * const { count } = await prisma.lawData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LawDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LawData
     * const lawData = await prisma.lawData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LawDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LawDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LawData.
     * @param {LawDataUpsertArgs} args - Arguments to update or create a LawData.
     * @example
     * // Update or create a LawData
     * const lawData = await prisma.lawData.upsert({
     *   create: {
     *     // ... data to create a LawData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LawData we want to update
     *   }
     * })
    **/
    upsert<T extends LawDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LawDataUpsertArgs<ExtArgs>>
    ): Prisma__LawDataClient<$Result.GetResult<Prisma.$LawDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawDataCountArgs} args - Arguments to filter LawData to count.
     * @example
     * // Count the number of LawData
     * const count = await prisma.lawData.count({
     *   where: {
     *     // ... the filter for the LawData we want to count
     *   }
     * })
    **/
    count<T extends LawDataCountArgs>(
      args?: Subset<T, LawDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawDataAggregateArgs>(args: Subset<T, LawDataAggregateArgs>): Prisma.PrismaPromise<GetLawDataAggregateType<T>>

    /**
     * Group by LawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawDataGroupByArgs} args - Group by arguments.
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
      T extends LawDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawDataGroupByArgs['orderBy'] }
        : { orderBy?: LawDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LawData model
   */
  readonly fields: LawDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LawData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    lawBab<T extends LawBabDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LawBabDefaultArgs<ExtArgs>>): Prisma__LawBabClient<$Result.GetResult<Prisma.$LawBabPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LawData model
   */ 
  interface LawDataFieldRefs {
    readonly id: FieldRef<"LawData", 'Int'>
    readonly pasal: FieldRef<"LawData", 'String'>
    readonly content: FieldRef<"LawData", 'String'>
    readonly createdAt: FieldRef<"LawData", 'DateTime'>
    readonly updatedAt: FieldRef<"LawData", 'DateTime'>
    readonly lawBabId: FieldRef<"LawData", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * LawData findUnique
   */
  export type LawDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawData
     */
    select?: LawDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawDataInclude<ExtArgs> | null
    /**
     * Filter, which LawData to fetch.
     */
    where: LawDataWhereUniqueInput
  }


  /**
   * LawData findUniqueOrThrow
   */
  export type LawDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawData
     */
    select?: LawDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawDataInclude<ExtArgs> | null
    /**
     * Filter, which LawData to fetch.
     */
    where: LawDataWhereUniqueInput
  }


  /**
   * LawData findFirst
   */
  export type LawDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawData
     */
    select?: LawDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawDataInclude<ExtArgs> | null
    /**
     * Filter, which LawData to fetch.
     */
    where?: LawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawData to fetch.
     */
    orderBy?: LawDataOrderByWithRelationInput | LawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawData.
     */
    cursor?: LawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawData.
     */
    distinct?: LawDataScalarFieldEnum | LawDataScalarFieldEnum[]
  }


  /**
   * LawData findFirstOrThrow
   */
  export type LawDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawData
     */
    select?: LawDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawDataInclude<ExtArgs> | null
    /**
     * Filter, which LawData to fetch.
     */
    where?: LawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawData to fetch.
     */
    orderBy?: LawDataOrderByWithRelationInput | LawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawData.
     */
    cursor?: LawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawData.
     */
    distinct?: LawDataScalarFieldEnum | LawDataScalarFieldEnum[]
  }


  /**
   * LawData findMany
   */
  export type LawDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawData
     */
    select?: LawDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawDataInclude<ExtArgs> | null
    /**
     * Filter, which LawData to fetch.
     */
    where?: LawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawData to fetch.
     */
    orderBy?: LawDataOrderByWithRelationInput | LawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LawData.
     */
    cursor?: LawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawData.
     */
    skip?: number
    distinct?: LawDataScalarFieldEnum | LawDataScalarFieldEnum[]
  }


  /**
   * LawData create
   */
  export type LawDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawData
     */
    select?: LawDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawDataInclude<ExtArgs> | null
    /**
     * The data needed to create a LawData.
     */
    data: XOR<LawDataCreateInput, LawDataUncheckedCreateInput>
  }


  /**
   * LawData createMany
   */
  export type LawDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LawData.
     */
    data: LawDataCreateManyInput | LawDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LawData update
   */
  export type LawDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawData
     */
    select?: LawDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawDataInclude<ExtArgs> | null
    /**
     * The data needed to update a LawData.
     */
    data: XOR<LawDataUpdateInput, LawDataUncheckedUpdateInput>
    /**
     * Choose, which LawData to update.
     */
    where: LawDataWhereUniqueInput
  }


  /**
   * LawData updateMany
   */
  export type LawDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LawData.
     */
    data: XOR<LawDataUpdateManyMutationInput, LawDataUncheckedUpdateManyInput>
    /**
     * Filter which LawData to update
     */
    where?: LawDataWhereInput
  }


  /**
   * LawData upsert
   */
  export type LawDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawData
     */
    select?: LawDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawDataInclude<ExtArgs> | null
    /**
     * The filter to search for the LawData to update in case it exists.
     */
    where: LawDataWhereUniqueInput
    /**
     * In case the LawData found by the `where` argument doesn't exist, create a new LawData with this data.
     */
    create: XOR<LawDataCreateInput, LawDataUncheckedCreateInput>
    /**
     * In case the LawData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawDataUpdateInput, LawDataUncheckedUpdateInput>
  }


  /**
   * LawData delete
   */
  export type LawDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawData
     */
    select?: LawDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawDataInclude<ExtArgs> | null
    /**
     * Filter which LawData to delete.
     */
    where: LawDataWhereUniqueInput
  }


  /**
   * LawData deleteMany
   */
  export type LawDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawData to delete
     */
    where?: LawDataWhereInput
  }


  /**
   * LawData without action
   */
  export type LawDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawData
     */
    select?: LawDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawDataInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    middleName: number
    lastName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    firstName: string
    middleName: string | null
    lastName: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chat1?: boolean | User$chat1Args<ExtArgs>
    chat2?: boolean | User$chat2Args<ExtArgs>
    from?: boolean | User$fromArgs<ExtArgs>
    to?: boolean | User$toArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat1?: boolean | User$chat1Args<ExtArgs>
    chat2?: boolean | User$chat2Args<ExtArgs>
    from?: boolean | User$fromArgs<ExtArgs>
    to?: boolean | User$toArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chat1: Prisma.$ChatPayload<ExtArgs>[]
      chat2: Prisma.$ChatPayload<ExtArgs>[]
      from: Prisma.$MessagePayload<ExtArgs>[]
      to: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      firstName: string
      middleName: string | null
      lastName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    chat1<T extends User$chat1Args<ExtArgs> = {}>(args?: Subset<T, User$chat1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findMany'> | Null>;

    chat2<T extends User$chat2Args<ExtArgs> = {}>(args?: Subset<T, User$chat2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findMany'> | Null>;

    from<T extends User$fromArgs<ExtArgs> = {}>(args?: Subset<T, User$fromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    to<T extends User$toArgs<ExtArgs> = {}>(args?: Subset<T, User$toArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly middleName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.chat1
   */
  export type User$chat1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }


  /**
   * User.chat2
   */
  export type User$chat2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }


  /**
   * User.from
   */
  export type User$fromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * User.to
   */
  export type User$toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
    user1_id: number | null
    user2_id: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
    user1_id: number | null
    user2_id: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    user1_id: number | null
    user2_id: number | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    user1_id: number | null
    user2_id: number | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    user1_id: number
    user2_id: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
    user1_id?: true
    user2_id?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
    user1_id?: true
    user2_id?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    user1_id?: true
    user2_id?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    user1_id?: true
    user2_id?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    user1_id?: true
    user2_id?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    user1_id: number
    user2_id: number
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1_id?: boolean
    user2_id?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    Message?: boolean | Chat$MessageArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    user1_id?: boolean
    user2_id?: boolean
  }

  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    Message?: boolean | Chat$MessageArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
      Message: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user1_id: number
      user2_id: number
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }


  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Chat that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
    **/
    create<T extends ChatCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCreateArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Chats.
     *     @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     *     @example
     *     // Create many Chats
     *     const chat = await prisma.chat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
    **/
    delete<T extends ChatDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
    **/
    upsert<T extends ChatUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>
    ): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Message<T extends Chat$MessageArgs<ExtArgs> = {}>(args?: Subset<T, Chat$MessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Chat model
   */ 
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'Int'>
    readonly user1_id: FieldRef<"Chat", 'Int'>
    readonly user2_id: FieldRef<"Chat", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }


  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }


  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }


  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }


  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
  }


  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }


  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
  }


  /**
   * Chat.Message
   */
  export type Chat$MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude<ExtArgs> | null
  }



  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    chatId: number | null
    from: number | null
    to: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    chatId: number | null
    from: number | null
    to: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    chatId: number | null
    from: number | null
    to: number | null
    message: string | null
    time: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    chatId: number | null
    from: number | null
    to: number | null
    message: string | null
    time: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    chatId: number
    from: number
    to: number
    message: number
    time: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    chatId?: true
    from?: true
    to?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    chatId?: true
    from?: true
    to?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    chatId?: true
    from?: true
    to?: true
    message?: true
    time?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    chatId?: true
    from?: true
    to?: true
    message?: true
    time?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    chatId?: true
    from?: true
    to?: true
    message?: true
    time?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    chatId: number
    from: number
    to: number
    message: string
    time: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    from?: boolean
    to?: boolean
    message?: boolean
    time?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    fromId?: boolean | UserDefaultArgs<ExtArgs>
    toId?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    chatId?: boolean
    from?: boolean
    to?: boolean
    message?: boolean
    time?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    fromId?: boolean | UserDefaultArgs<ExtArgs>
    toId?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
      fromId: Prisma.$UserPayload<ExtArgs>
      toId: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatId: number
      from: number
      to: number
      message: string
      time: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }


  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    fromId<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    toId<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly chatId: FieldRef<"Message", 'Int'>
    readonly from: FieldRef<"Message", 'Int'>
    readonly to: FieldRef<"Message", 'Int'>
    readonly message: FieldRef<"Message", 'String'>
    readonly time: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
  }



  /**
   * Model Lawyer
   */

  export type AggregateLawyer = {
    _count: LawyerCountAggregateOutputType | null
    _avg: LawyerAvgAggregateOutputType | null
    _sum: LawyerSumAggregateOutputType | null
    _min: LawyerMinAggregateOutputType | null
    _max: LawyerMaxAggregateOutputType | null
  }

  export type LawyerAvgAggregateOutputType = {
    id: number | null
    rate: number | null
    fee: number | null
  }

  export type LawyerSumAggregateOutputType = {
    id: number | null
    rate: number | null
    fee: number | null
  }

  export type LawyerMinAggregateOutputType = {
    id: number | null
    name: string | null
    specialist: string | null
    rate: number | null
    nomorPerandi: string | null
    image: string | null
    fee: number | null
  }

  export type LawyerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    specialist: string | null
    rate: number | null
    nomorPerandi: string | null
    image: string | null
    fee: number | null
  }

  export type LawyerCountAggregateOutputType = {
    id: number
    name: number
    specialist: number
    rate: number
    nomorPerandi: number
    image: number
    fee: number
    _all: number
  }


  export type LawyerAvgAggregateInputType = {
    id?: true
    rate?: true
    fee?: true
  }

  export type LawyerSumAggregateInputType = {
    id?: true
    rate?: true
    fee?: true
  }

  export type LawyerMinAggregateInputType = {
    id?: true
    name?: true
    specialist?: true
    rate?: true
    nomorPerandi?: true
    image?: true
    fee?: true
  }

  export type LawyerMaxAggregateInputType = {
    id?: true
    name?: true
    specialist?: true
    rate?: true
    nomorPerandi?: true
    image?: true
    fee?: true
  }

  export type LawyerCountAggregateInputType = {
    id?: true
    name?: true
    specialist?: true
    rate?: true
    nomorPerandi?: true
    image?: true
    fee?: true
    _all?: true
  }

  export type LawyerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lawyer to aggregate.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lawyers
    **/
    _count?: true | LawyerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawyerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawyerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawyerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawyerMaxAggregateInputType
  }

  export type GetLawyerAggregateType<T extends LawyerAggregateArgs> = {
        [P in keyof T & keyof AggregateLawyer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawyer[P]>
      : GetScalarType<T[P], AggregateLawyer[P]>
  }




  export type LawyerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerWhereInput
    orderBy?: LawyerOrderByWithAggregationInput | LawyerOrderByWithAggregationInput[]
    by: LawyerScalarFieldEnum[] | LawyerScalarFieldEnum
    having?: LawyerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawyerCountAggregateInputType | true
    _avg?: LawyerAvgAggregateInputType
    _sum?: LawyerSumAggregateInputType
    _min?: LawyerMinAggregateInputType
    _max?: LawyerMaxAggregateInputType
  }

  export type LawyerGroupByOutputType = {
    id: number
    name: string
    specialist: string
    rate: number
    nomorPerandi: string
    image: string
    fee: number
    _count: LawyerCountAggregateOutputType | null
    _avg: LawyerAvgAggregateOutputType | null
    _sum: LawyerSumAggregateOutputType | null
    _min: LawyerMinAggregateOutputType | null
    _max: LawyerMaxAggregateOutputType | null
  }

  type GetLawyerGroupByPayload<T extends LawyerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawyerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawyerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawyerGroupByOutputType[P]>
            : GetScalarType<T[P], LawyerGroupByOutputType[P]>
        }
      >
    >


  export type LawyerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    specialist?: boolean
    rate?: boolean
    nomorPerandi?: boolean
    image?: boolean
    fee?: boolean
    educationalBackground?: boolean | Lawyer$educationalBackgroundArgs<ExtArgs>
    firmaHukum?: boolean | Lawyer$firmaHukumArgs<ExtArgs>
    _count?: boolean | LawyerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyer"]>

  export type LawyerSelectScalar = {
    id?: boolean
    name?: boolean
    specialist?: boolean
    rate?: boolean
    nomorPerandi?: boolean
    image?: boolean
    fee?: boolean
  }

  export type LawyerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educationalBackground?: boolean | Lawyer$educationalBackgroundArgs<ExtArgs>
    firmaHukum?: boolean | Lawyer$firmaHukumArgs<ExtArgs>
    _count?: boolean | LawyerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $LawyerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lawyer"
    objects: {
      educationalBackground: Prisma.$educationalBackgroundPayload<ExtArgs>[]
      firmaHukum: Prisma.$firmaHukumPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      specialist: string
      rate: number
      nomorPerandi: string
      image: string
      fee: number
    }, ExtArgs["result"]["lawyer"]>
    composites: {}
  }


  type LawyerGetPayload<S extends boolean | null | undefined | LawyerDefaultArgs> = $Result.GetResult<Prisma.$LawyerPayload, S>

  type LawyerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LawyerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: LawyerCountAggregateInputType | true
    }

  export interface LawyerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lawyer'], meta: { name: 'Lawyer' } }
    /**
     * Find zero or one Lawyer that matches the filter.
     * @param {LawyerFindUniqueArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LawyerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LawyerFindUniqueArgs<ExtArgs>>
    ): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Lawyer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LawyerFindUniqueOrThrowArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LawyerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LawyerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Lawyer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerFindFirstArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LawyerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LawyerFindFirstArgs<ExtArgs>>
    ): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Lawyer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerFindFirstOrThrowArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LawyerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LawyerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Lawyers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lawyers
     * const lawyers = await prisma.lawyer.findMany()
     * 
     * // Get first 10 Lawyers
     * const lawyers = await prisma.lawyer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawyerWithIdOnly = await prisma.lawyer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LawyerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawyerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Lawyer.
     * @param {LawyerCreateArgs} args - Arguments to create a Lawyer.
     * @example
     * // Create one Lawyer
     * const Lawyer = await prisma.lawyer.create({
     *   data: {
     *     // ... data to create a Lawyer
     *   }
     * })
     * 
    **/
    create<T extends LawyerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LawyerCreateArgs<ExtArgs>>
    ): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Lawyers.
     *     @param {LawyerCreateManyArgs} args - Arguments to create many Lawyers.
     *     @example
     *     // Create many Lawyers
     *     const lawyer = await prisma.lawyer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LawyerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawyerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lawyer.
     * @param {LawyerDeleteArgs} args - Arguments to delete one Lawyer.
     * @example
     * // Delete one Lawyer
     * const Lawyer = await prisma.lawyer.delete({
     *   where: {
     *     // ... filter to delete one Lawyer
     *   }
     * })
     * 
    **/
    delete<T extends LawyerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LawyerDeleteArgs<ExtArgs>>
    ): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Lawyer.
     * @param {LawyerUpdateArgs} args - Arguments to update one Lawyer.
     * @example
     * // Update one Lawyer
     * const lawyer = await prisma.lawyer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LawyerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LawyerUpdateArgs<ExtArgs>>
    ): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Lawyers.
     * @param {LawyerDeleteManyArgs} args - Arguments to filter Lawyers to delete.
     * @example
     * // Delete a few Lawyers
     * const { count } = await prisma.lawyer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LawyerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawyerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lawyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lawyers
     * const lawyer = await prisma.lawyer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LawyerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LawyerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lawyer.
     * @param {LawyerUpsertArgs} args - Arguments to update or create a Lawyer.
     * @example
     * // Update or create a Lawyer
     * const lawyer = await prisma.lawyer.upsert({
     *   create: {
     *     // ... data to create a Lawyer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lawyer we want to update
     *   }
     * })
    **/
    upsert<T extends LawyerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LawyerUpsertArgs<ExtArgs>>
    ): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Lawyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerCountArgs} args - Arguments to filter Lawyers to count.
     * @example
     * // Count the number of Lawyers
     * const count = await prisma.lawyer.count({
     *   where: {
     *     // ... the filter for the Lawyers we want to count
     *   }
     * })
    **/
    count<T extends LawyerCountArgs>(
      args?: Subset<T, LawyerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawyerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lawyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawyerAggregateArgs>(args: Subset<T, LawyerAggregateArgs>): Prisma.PrismaPromise<GetLawyerAggregateType<T>>

    /**
     * Group by Lawyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerGroupByArgs} args - Group by arguments.
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
      T extends LawyerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawyerGroupByArgs['orderBy'] }
        : { orderBy?: LawyerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawyerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawyerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lawyer model
   */
  readonly fields: LawyerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lawyer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawyerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    educationalBackground<T extends Lawyer$educationalBackgroundArgs<ExtArgs> = {}>(args?: Subset<T, Lawyer$educationalBackgroundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educationalBackgroundPayload<ExtArgs>, T, 'findMany'> | Null>;

    firmaHukum<T extends Lawyer$firmaHukumArgs<ExtArgs> = {}>(args?: Subset<T, Lawyer$firmaHukumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$firmaHukumPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Lawyer model
   */ 
  interface LawyerFieldRefs {
    readonly id: FieldRef<"Lawyer", 'Int'>
    readonly name: FieldRef<"Lawyer", 'String'>
    readonly specialist: FieldRef<"Lawyer", 'String'>
    readonly rate: FieldRef<"Lawyer", 'Int'>
    readonly nomorPerandi: FieldRef<"Lawyer", 'String'>
    readonly image: FieldRef<"Lawyer", 'String'>
    readonly fee: FieldRef<"Lawyer", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Lawyer findUnique
   */
  export type LawyerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where: LawyerWhereUniqueInput
  }


  /**
   * Lawyer findUniqueOrThrow
   */
  export type LawyerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where: LawyerWhereUniqueInput
  }


  /**
   * Lawyer findFirst
   */
  export type LawyerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lawyers.
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lawyers.
     */
    distinct?: LawyerScalarFieldEnum | LawyerScalarFieldEnum[]
  }


  /**
   * Lawyer findFirstOrThrow
   */
  export type LawyerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lawyers.
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lawyers.
     */
    distinct?: LawyerScalarFieldEnum | LawyerScalarFieldEnum[]
  }


  /**
   * Lawyer findMany
   */
  export type LawyerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyers to fetch.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lawyers.
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    distinct?: LawyerScalarFieldEnum | LawyerScalarFieldEnum[]
  }


  /**
   * Lawyer create
   */
  export type LawyerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * The data needed to create a Lawyer.
     */
    data: XOR<LawyerCreateInput, LawyerUncheckedCreateInput>
  }


  /**
   * Lawyer createMany
   */
  export type LawyerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lawyers.
     */
    data: LawyerCreateManyInput | LawyerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Lawyer update
   */
  export type LawyerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * The data needed to update a Lawyer.
     */
    data: XOR<LawyerUpdateInput, LawyerUncheckedUpdateInput>
    /**
     * Choose, which Lawyer to update.
     */
    where: LawyerWhereUniqueInput
  }


  /**
   * Lawyer updateMany
   */
  export type LawyerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lawyers.
     */
    data: XOR<LawyerUpdateManyMutationInput, LawyerUncheckedUpdateManyInput>
    /**
     * Filter which Lawyers to update
     */
    where?: LawyerWhereInput
  }


  /**
   * Lawyer upsert
   */
  export type LawyerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * The filter to search for the Lawyer to update in case it exists.
     */
    where: LawyerWhereUniqueInput
    /**
     * In case the Lawyer found by the `where` argument doesn't exist, create a new Lawyer with this data.
     */
    create: XOR<LawyerCreateInput, LawyerUncheckedCreateInput>
    /**
     * In case the Lawyer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawyerUpdateInput, LawyerUncheckedUpdateInput>
  }


  /**
   * Lawyer delete
   */
  export type LawyerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter which Lawyer to delete.
     */
    where: LawyerWhereUniqueInput
  }


  /**
   * Lawyer deleteMany
   */
  export type LawyerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lawyers to delete
     */
    where?: LawyerWhereInput
  }


  /**
   * Lawyer.educationalBackground
   */
  export type Lawyer$educationalBackgroundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educationalBackground
     */
    select?: educationalBackgroundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educationalBackgroundInclude<ExtArgs> | null
    where?: educationalBackgroundWhereInput
    orderBy?: educationalBackgroundOrderByWithRelationInput | educationalBackgroundOrderByWithRelationInput[]
    cursor?: educationalBackgroundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationalBackgroundScalarFieldEnum | EducationalBackgroundScalarFieldEnum[]
  }


  /**
   * Lawyer.firmaHukum
   */
  export type Lawyer$firmaHukumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the firmaHukum
     */
    select?: firmaHukumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: firmaHukumInclude<ExtArgs> | null
    where?: firmaHukumWhereInput
    orderBy?: firmaHukumOrderByWithRelationInput | firmaHukumOrderByWithRelationInput[]
    cursor?: firmaHukumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FirmaHukumScalarFieldEnum | FirmaHukumScalarFieldEnum[]
  }


  /**
   * Lawyer without action
   */
  export type LawyerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LawyerInclude<ExtArgs> | null
  }



  /**
   * Model educationalBackground
   */

  export type AggregateEducationalBackground = {
    _count: EducationalBackgroundCountAggregateOutputType | null
    _avg: EducationalBackgroundAvgAggregateOutputType | null
    _sum: EducationalBackgroundSumAggregateOutputType | null
    _min: EducationalBackgroundMinAggregateOutputType | null
    _max: EducationalBackgroundMaxAggregateOutputType | null
  }

  export type EducationalBackgroundAvgAggregateOutputType = {
    id: number | null
    lawyerId: number | null
  }

  export type EducationalBackgroundSumAggregateOutputType = {
    id: number | null
    lawyerId: number | null
  }

  export type EducationalBackgroundMinAggregateOutputType = {
    id: number | null
    lawyerId: number | null
    university: string | null
    major: string | null
  }

  export type EducationalBackgroundMaxAggregateOutputType = {
    id: number | null
    lawyerId: number | null
    university: string | null
    major: string | null
  }

  export type EducationalBackgroundCountAggregateOutputType = {
    id: number
    lawyerId: number
    university: number
    major: number
    _all: number
  }


  export type EducationalBackgroundAvgAggregateInputType = {
    id?: true
    lawyerId?: true
  }

  export type EducationalBackgroundSumAggregateInputType = {
    id?: true
    lawyerId?: true
  }

  export type EducationalBackgroundMinAggregateInputType = {
    id?: true
    lawyerId?: true
    university?: true
    major?: true
  }

  export type EducationalBackgroundMaxAggregateInputType = {
    id?: true
    lawyerId?: true
    university?: true
    major?: true
  }

  export type EducationalBackgroundCountAggregateInputType = {
    id?: true
    lawyerId?: true
    university?: true
    major?: true
    _all?: true
  }

  export type EducationalBackgroundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which educationalBackground to aggregate.
     */
    where?: educationalBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educationalBackgrounds to fetch.
     */
    orderBy?: educationalBackgroundOrderByWithRelationInput | educationalBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: educationalBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educationalBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educationalBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned educationalBackgrounds
    **/
    _count?: true | EducationalBackgroundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationalBackgroundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationalBackgroundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationalBackgroundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationalBackgroundMaxAggregateInputType
  }

  export type GetEducationalBackgroundAggregateType<T extends EducationalBackgroundAggregateArgs> = {
        [P in keyof T & keyof AggregateEducationalBackground]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducationalBackground[P]>
      : GetScalarType<T[P], AggregateEducationalBackground[P]>
  }




  export type educationalBackgroundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: educationalBackgroundWhereInput
    orderBy?: educationalBackgroundOrderByWithAggregationInput | educationalBackgroundOrderByWithAggregationInput[]
    by: EducationalBackgroundScalarFieldEnum[] | EducationalBackgroundScalarFieldEnum
    having?: educationalBackgroundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationalBackgroundCountAggregateInputType | true
    _avg?: EducationalBackgroundAvgAggregateInputType
    _sum?: EducationalBackgroundSumAggregateInputType
    _min?: EducationalBackgroundMinAggregateInputType
    _max?: EducationalBackgroundMaxAggregateInputType
  }

  export type EducationalBackgroundGroupByOutputType = {
    id: number
    lawyerId: number
    university: string
    major: string
    _count: EducationalBackgroundCountAggregateOutputType | null
    _avg: EducationalBackgroundAvgAggregateOutputType | null
    _sum: EducationalBackgroundSumAggregateOutputType | null
    _min: EducationalBackgroundMinAggregateOutputType | null
    _max: EducationalBackgroundMaxAggregateOutputType | null
  }

  type GetEducationalBackgroundGroupByPayload<T extends educationalBackgroundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationalBackgroundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationalBackgroundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationalBackgroundGroupByOutputType[P]>
            : GetScalarType<T[P], EducationalBackgroundGroupByOutputType[P]>
        }
      >
    >


  export type educationalBackgroundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    university?: boolean
    major?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educationalBackground"]>

  export type educationalBackgroundSelectScalar = {
    id?: boolean
    lawyerId?: boolean
    university?: boolean
    major?: boolean
  }

  export type educationalBackgroundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }


  export type $educationalBackgroundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "educationalBackground"
    objects: {
      lawyer: Prisma.$LawyerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lawyerId: number
      university: string
      major: string
    }, ExtArgs["result"]["educationalBackground"]>
    composites: {}
  }


  type educationalBackgroundGetPayload<S extends boolean | null | undefined | educationalBackgroundDefaultArgs> = $Result.GetResult<Prisma.$educationalBackgroundPayload, S>

  type educationalBackgroundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<educationalBackgroundFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EducationalBackgroundCountAggregateInputType | true
    }

  export interface educationalBackgroundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['educationalBackground'], meta: { name: 'educationalBackground' } }
    /**
     * Find zero or one EducationalBackground that matches the filter.
     * @param {educationalBackgroundFindUniqueArgs} args - Arguments to find a EducationalBackground
     * @example
     * // Get one EducationalBackground
     * const educationalBackground = await prisma.educationalBackground.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends educationalBackgroundFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, educationalBackgroundFindUniqueArgs<ExtArgs>>
    ): Prisma__educationalBackgroundClient<$Result.GetResult<Prisma.$educationalBackgroundPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EducationalBackground that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {educationalBackgroundFindUniqueOrThrowArgs} args - Arguments to find a EducationalBackground
     * @example
     * // Get one EducationalBackground
     * const educationalBackground = await prisma.educationalBackground.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends educationalBackgroundFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, educationalBackgroundFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__educationalBackgroundClient<$Result.GetResult<Prisma.$educationalBackgroundPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EducationalBackground that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationalBackgroundFindFirstArgs} args - Arguments to find a EducationalBackground
     * @example
     * // Get one EducationalBackground
     * const educationalBackground = await prisma.educationalBackground.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends educationalBackgroundFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, educationalBackgroundFindFirstArgs<ExtArgs>>
    ): Prisma__educationalBackgroundClient<$Result.GetResult<Prisma.$educationalBackgroundPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EducationalBackground that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationalBackgroundFindFirstOrThrowArgs} args - Arguments to find a EducationalBackground
     * @example
     * // Get one EducationalBackground
     * const educationalBackground = await prisma.educationalBackground.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends educationalBackgroundFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, educationalBackgroundFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__educationalBackgroundClient<$Result.GetResult<Prisma.$educationalBackgroundPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EducationalBackgrounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationalBackgroundFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EducationalBackgrounds
     * const educationalBackgrounds = await prisma.educationalBackground.findMany()
     * 
     * // Get first 10 EducationalBackgrounds
     * const educationalBackgrounds = await prisma.educationalBackground.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationalBackgroundWithIdOnly = await prisma.educationalBackground.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends educationalBackgroundFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, educationalBackgroundFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educationalBackgroundPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EducationalBackground.
     * @param {educationalBackgroundCreateArgs} args - Arguments to create a EducationalBackground.
     * @example
     * // Create one EducationalBackground
     * const EducationalBackground = await prisma.educationalBackground.create({
     *   data: {
     *     // ... data to create a EducationalBackground
     *   }
     * })
     * 
    **/
    create<T extends educationalBackgroundCreateArgs<ExtArgs>>(
      args: SelectSubset<T, educationalBackgroundCreateArgs<ExtArgs>>
    ): Prisma__educationalBackgroundClient<$Result.GetResult<Prisma.$educationalBackgroundPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EducationalBackgrounds.
     *     @param {educationalBackgroundCreateManyArgs} args - Arguments to create many EducationalBackgrounds.
     *     @example
     *     // Create many EducationalBackgrounds
     *     const educationalBackground = await prisma.educationalBackground.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends educationalBackgroundCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, educationalBackgroundCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EducationalBackground.
     * @param {educationalBackgroundDeleteArgs} args - Arguments to delete one EducationalBackground.
     * @example
     * // Delete one EducationalBackground
     * const EducationalBackground = await prisma.educationalBackground.delete({
     *   where: {
     *     // ... filter to delete one EducationalBackground
     *   }
     * })
     * 
    **/
    delete<T extends educationalBackgroundDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, educationalBackgroundDeleteArgs<ExtArgs>>
    ): Prisma__educationalBackgroundClient<$Result.GetResult<Prisma.$educationalBackgroundPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EducationalBackground.
     * @param {educationalBackgroundUpdateArgs} args - Arguments to update one EducationalBackground.
     * @example
     * // Update one EducationalBackground
     * const educationalBackground = await prisma.educationalBackground.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends educationalBackgroundUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, educationalBackgroundUpdateArgs<ExtArgs>>
    ): Prisma__educationalBackgroundClient<$Result.GetResult<Prisma.$educationalBackgroundPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EducationalBackgrounds.
     * @param {educationalBackgroundDeleteManyArgs} args - Arguments to filter EducationalBackgrounds to delete.
     * @example
     * // Delete a few EducationalBackgrounds
     * const { count } = await prisma.educationalBackground.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends educationalBackgroundDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, educationalBackgroundDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EducationalBackgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationalBackgroundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EducationalBackgrounds
     * const educationalBackground = await prisma.educationalBackground.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends educationalBackgroundUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, educationalBackgroundUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EducationalBackground.
     * @param {educationalBackgroundUpsertArgs} args - Arguments to update or create a EducationalBackground.
     * @example
     * // Update or create a EducationalBackground
     * const educationalBackground = await prisma.educationalBackground.upsert({
     *   create: {
     *     // ... data to create a EducationalBackground
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EducationalBackground we want to update
     *   }
     * })
    **/
    upsert<T extends educationalBackgroundUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, educationalBackgroundUpsertArgs<ExtArgs>>
    ): Prisma__educationalBackgroundClient<$Result.GetResult<Prisma.$educationalBackgroundPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EducationalBackgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationalBackgroundCountArgs} args - Arguments to filter EducationalBackgrounds to count.
     * @example
     * // Count the number of EducationalBackgrounds
     * const count = await prisma.educationalBackground.count({
     *   where: {
     *     // ... the filter for the EducationalBackgrounds we want to count
     *   }
     * })
    **/
    count<T extends educationalBackgroundCountArgs>(
      args?: Subset<T, educationalBackgroundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationalBackgroundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EducationalBackground.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationalBackgroundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationalBackgroundAggregateArgs>(args: Subset<T, EducationalBackgroundAggregateArgs>): Prisma.PrismaPromise<GetEducationalBackgroundAggregateType<T>>

    /**
     * Group by EducationalBackground.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationalBackgroundGroupByArgs} args - Group by arguments.
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
      T extends educationalBackgroundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: educationalBackgroundGroupByArgs['orderBy'] }
        : { orderBy?: educationalBackgroundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, educationalBackgroundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationalBackgroundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the educationalBackground model
   */
  readonly fields: educationalBackgroundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for educationalBackground.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__educationalBackgroundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    lawyer<T extends LawyerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LawyerDefaultArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the educationalBackground model
   */ 
  interface educationalBackgroundFieldRefs {
    readonly id: FieldRef<"educationalBackground", 'Int'>
    readonly lawyerId: FieldRef<"educationalBackground", 'Int'>
    readonly university: FieldRef<"educationalBackground", 'String'>
    readonly major: FieldRef<"educationalBackground", 'String'>
  }
    

  // Custom InputTypes

  /**
   * educationalBackground findUnique
   */
  export type educationalBackgroundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educationalBackground
     */
    select?: educationalBackgroundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educationalBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which educationalBackground to fetch.
     */
    where: educationalBackgroundWhereUniqueInput
  }


  /**
   * educationalBackground findUniqueOrThrow
   */
  export type educationalBackgroundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educationalBackground
     */
    select?: educationalBackgroundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educationalBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which educationalBackground to fetch.
     */
    where: educationalBackgroundWhereUniqueInput
  }


  /**
   * educationalBackground findFirst
   */
  export type educationalBackgroundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educationalBackground
     */
    select?: educationalBackgroundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educationalBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which educationalBackground to fetch.
     */
    where?: educationalBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educationalBackgrounds to fetch.
     */
    orderBy?: educationalBackgroundOrderByWithRelationInput | educationalBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for educationalBackgrounds.
     */
    cursor?: educationalBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educationalBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educationalBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of educationalBackgrounds.
     */
    distinct?: EducationalBackgroundScalarFieldEnum | EducationalBackgroundScalarFieldEnum[]
  }


  /**
   * educationalBackground findFirstOrThrow
   */
  export type educationalBackgroundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educationalBackground
     */
    select?: educationalBackgroundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educationalBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which educationalBackground to fetch.
     */
    where?: educationalBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educationalBackgrounds to fetch.
     */
    orderBy?: educationalBackgroundOrderByWithRelationInput | educationalBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for educationalBackgrounds.
     */
    cursor?: educationalBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educationalBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educationalBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of educationalBackgrounds.
     */
    distinct?: EducationalBackgroundScalarFieldEnum | EducationalBackgroundScalarFieldEnum[]
  }


  /**
   * educationalBackground findMany
   */
  export type educationalBackgroundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educationalBackground
     */
    select?: educationalBackgroundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educationalBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which educationalBackgrounds to fetch.
     */
    where?: educationalBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educationalBackgrounds to fetch.
     */
    orderBy?: educationalBackgroundOrderByWithRelationInput | educationalBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing educationalBackgrounds.
     */
    cursor?: educationalBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educationalBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educationalBackgrounds.
     */
    skip?: number
    distinct?: EducationalBackgroundScalarFieldEnum | EducationalBackgroundScalarFieldEnum[]
  }


  /**
   * educationalBackground create
   */
  export type educationalBackgroundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educationalBackground
     */
    select?: educationalBackgroundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educationalBackgroundInclude<ExtArgs> | null
    /**
     * The data needed to create a educationalBackground.
     */
    data: XOR<educationalBackgroundCreateInput, educationalBackgroundUncheckedCreateInput>
  }


  /**
   * educationalBackground createMany
   */
  export type educationalBackgroundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many educationalBackgrounds.
     */
    data: educationalBackgroundCreateManyInput | educationalBackgroundCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * educationalBackground update
   */
  export type educationalBackgroundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educationalBackground
     */
    select?: educationalBackgroundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educationalBackgroundInclude<ExtArgs> | null
    /**
     * The data needed to update a educationalBackground.
     */
    data: XOR<educationalBackgroundUpdateInput, educationalBackgroundUncheckedUpdateInput>
    /**
     * Choose, which educationalBackground to update.
     */
    where: educationalBackgroundWhereUniqueInput
  }


  /**
   * educationalBackground updateMany
   */
  export type educationalBackgroundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update educationalBackgrounds.
     */
    data: XOR<educationalBackgroundUpdateManyMutationInput, educationalBackgroundUncheckedUpdateManyInput>
    /**
     * Filter which educationalBackgrounds to update
     */
    where?: educationalBackgroundWhereInput
  }


  /**
   * educationalBackground upsert
   */
  export type educationalBackgroundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educationalBackground
     */
    select?: educationalBackgroundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educationalBackgroundInclude<ExtArgs> | null
    /**
     * The filter to search for the educationalBackground to update in case it exists.
     */
    where: educationalBackgroundWhereUniqueInput
    /**
     * In case the educationalBackground found by the `where` argument doesn't exist, create a new educationalBackground with this data.
     */
    create: XOR<educationalBackgroundCreateInput, educationalBackgroundUncheckedCreateInput>
    /**
     * In case the educationalBackground was found with the provided `where` argument, update it with this data.
     */
    update: XOR<educationalBackgroundUpdateInput, educationalBackgroundUncheckedUpdateInput>
  }


  /**
   * educationalBackground delete
   */
  export type educationalBackgroundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educationalBackground
     */
    select?: educationalBackgroundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educationalBackgroundInclude<ExtArgs> | null
    /**
     * Filter which educationalBackground to delete.
     */
    where: educationalBackgroundWhereUniqueInput
  }


  /**
   * educationalBackground deleteMany
   */
  export type educationalBackgroundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which educationalBackgrounds to delete
     */
    where?: educationalBackgroundWhereInput
  }


  /**
   * educationalBackground without action
   */
  export type educationalBackgroundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educationalBackground
     */
    select?: educationalBackgroundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: educationalBackgroundInclude<ExtArgs> | null
  }



  /**
   * Model firmaHukum
   */

  export type AggregateFirmaHukum = {
    _count: FirmaHukumCountAggregateOutputType | null
    _avg: FirmaHukumAvgAggregateOutputType | null
    _sum: FirmaHukumSumAggregateOutputType | null
    _min: FirmaHukumMinAggregateOutputType | null
    _max: FirmaHukumMaxAggregateOutputType | null
  }

  export type FirmaHukumAvgAggregateOutputType = {
    id: number | null
    lawyerId: number | null
  }

  export type FirmaHukumSumAggregateOutputType = {
    id: number | null
    lawyerId: number | null
  }

  export type FirmaHukumMinAggregateOutputType = {
    id: number | null
    lawyerId: number | null
    name: string | null
  }

  export type FirmaHukumMaxAggregateOutputType = {
    id: number | null
    lawyerId: number | null
    name: string | null
  }

  export type FirmaHukumCountAggregateOutputType = {
    id: number
    lawyerId: number
    name: number
    _all: number
  }


  export type FirmaHukumAvgAggregateInputType = {
    id?: true
    lawyerId?: true
  }

  export type FirmaHukumSumAggregateInputType = {
    id?: true
    lawyerId?: true
  }

  export type FirmaHukumMinAggregateInputType = {
    id?: true
    lawyerId?: true
    name?: true
  }

  export type FirmaHukumMaxAggregateInputType = {
    id?: true
    lawyerId?: true
    name?: true
  }

  export type FirmaHukumCountAggregateInputType = {
    id?: true
    lawyerId?: true
    name?: true
    _all?: true
  }

  export type FirmaHukumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which firmaHukum to aggregate.
     */
    where?: firmaHukumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of firmaHukums to fetch.
     */
    orderBy?: firmaHukumOrderByWithRelationInput | firmaHukumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: firmaHukumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` firmaHukums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` firmaHukums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned firmaHukums
    **/
    _count?: true | FirmaHukumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FirmaHukumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FirmaHukumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FirmaHukumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FirmaHukumMaxAggregateInputType
  }

  export type GetFirmaHukumAggregateType<T extends FirmaHukumAggregateArgs> = {
        [P in keyof T & keyof AggregateFirmaHukum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFirmaHukum[P]>
      : GetScalarType<T[P], AggregateFirmaHukum[P]>
  }




  export type firmaHukumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: firmaHukumWhereInput
    orderBy?: firmaHukumOrderByWithAggregationInput | firmaHukumOrderByWithAggregationInput[]
    by: FirmaHukumScalarFieldEnum[] | FirmaHukumScalarFieldEnum
    having?: firmaHukumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FirmaHukumCountAggregateInputType | true
    _avg?: FirmaHukumAvgAggregateInputType
    _sum?: FirmaHukumSumAggregateInputType
    _min?: FirmaHukumMinAggregateInputType
    _max?: FirmaHukumMaxAggregateInputType
  }

  export type FirmaHukumGroupByOutputType = {
    id: number
    lawyerId: number
    name: string
    _count: FirmaHukumCountAggregateOutputType | null
    _avg: FirmaHukumAvgAggregateOutputType | null
    _sum: FirmaHukumSumAggregateOutputType | null
    _min: FirmaHukumMinAggregateOutputType | null
    _max: FirmaHukumMaxAggregateOutputType | null
  }

  type GetFirmaHukumGroupByPayload<T extends firmaHukumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FirmaHukumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FirmaHukumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FirmaHukumGroupByOutputType[P]>
            : GetScalarType<T[P], FirmaHukumGroupByOutputType[P]>
        }
      >
    >


  export type firmaHukumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    name?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["firmaHukum"]>

  export type firmaHukumSelectScalar = {
    id?: boolean
    lawyerId?: boolean
    name?: boolean
  }

  export type firmaHukumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }


  export type $firmaHukumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "firmaHukum"
    objects: {
      lawyer: Prisma.$LawyerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lawyerId: number
      name: string
    }, ExtArgs["result"]["firmaHukum"]>
    composites: {}
  }


  type firmaHukumGetPayload<S extends boolean | null | undefined | firmaHukumDefaultArgs> = $Result.GetResult<Prisma.$firmaHukumPayload, S>

  type firmaHukumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<firmaHukumFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FirmaHukumCountAggregateInputType | true
    }

  export interface firmaHukumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['firmaHukum'], meta: { name: 'firmaHukum' } }
    /**
     * Find zero or one FirmaHukum that matches the filter.
     * @param {firmaHukumFindUniqueArgs} args - Arguments to find a FirmaHukum
     * @example
     * // Get one FirmaHukum
     * const firmaHukum = await prisma.firmaHukum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends firmaHukumFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, firmaHukumFindUniqueArgs<ExtArgs>>
    ): Prisma__firmaHukumClient<$Result.GetResult<Prisma.$firmaHukumPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FirmaHukum that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {firmaHukumFindUniqueOrThrowArgs} args - Arguments to find a FirmaHukum
     * @example
     * // Get one FirmaHukum
     * const firmaHukum = await prisma.firmaHukum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends firmaHukumFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, firmaHukumFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__firmaHukumClient<$Result.GetResult<Prisma.$firmaHukumPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FirmaHukum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {firmaHukumFindFirstArgs} args - Arguments to find a FirmaHukum
     * @example
     * // Get one FirmaHukum
     * const firmaHukum = await prisma.firmaHukum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends firmaHukumFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, firmaHukumFindFirstArgs<ExtArgs>>
    ): Prisma__firmaHukumClient<$Result.GetResult<Prisma.$firmaHukumPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FirmaHukum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {firmaHukumFindFirstOrThrowArgs} args - Arguments to find a FirmaHukum
     * @example
     * // Get one FirmaHukum
     * const firmaHukum = await prisma.firmaHukum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends firmaHukumFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, firmaHukumFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__firmaHukumClient<$Result.GetResult<Prisma.$firmaHukumPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FirmaHukums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {firmaHukumFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FirmaHukums
     * const firmaHukums = await prisma.firmaHukum.findMany()
     * 
     * // Get first 10 FirmaHukums
     * const firmaHukums = await prisma.firmaHukum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const firmaHukumWithIdOnly = await prisma.firmaHukum.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends firmaHukumFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, firmaHukumFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$firmaHukumPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FirmaHukum.
     * @param {firmaHukumCreateArgs} args - Arguments to create a FirmaHukum.
     * @example
     * // Create one FirmaHukum
     * const FirmaHukum = await prisma.firmaHukum.create({
     *   data: {
     *     // ... data to create a FirmaHukum
     *   }
     * })
     * 
    **/
    create<T extends firmaHukumCreateArgs<ExtArgs>>(
      args: SelectSubset<T, firmaHukumCreateArgs<ExtArgs>>
    ): Prisma__firmaHukumClient<$Result.GetResult<Prisma.$firmaHukumPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FirmaHukums.
     *     @param {firmaHukumCreateManyArgs} args - Arguments to create many FirmaHukums.
     *     @example
     *     // Create many FirmaHukums
     *     const firmaHukum = await prisma.firmaHukum.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends firmaHukumCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, firmaHukumCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FirmaHukum.
     * @param {firmaHukumDeleteArgs} args - Arguments to delete one FirmaHukum.
     * @example
     * // Delete one FirmaHukum
     * const FirmaHukum = await prisma.firmaHukum.delete({
     *   where: {
     *     // ... filter to delete one FirmaHukum
     *   }
     * })
     * 
    **/
    delete<T extends firmaHukumDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, firmaHukumDeleteArgs<ExtArgs>>
    ): Prisma__firmaHukumClient<$Result.GetResult<Prisma.$firmaHukumPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FirmaHukum.
     * @param {firmaHukumUpdateArgs} args - Arguments to update one FirmaHukum.
     * @example
     * // Update one FirmaHukum
     * const firmaHukum = await prisma.firmaHukum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends firmaHukumUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, firmaHukumUpdateArgs<ExtArgs>>
    ): Prisma__firmaHukumClient<$Result.GetResult<Prisma.$firmaHukumPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FirmaHukums.
     * @param {firmaHukumDeleteManyArgs} args - Arguments to filter FirmaHukums to delete.
     * @example
     * // Delete a few FirmaHukums
     * const { count } = await prisma.firmaHukum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends firmaHukumDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, firmaHukumDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FirmaHukums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {firmaHukumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FirmaHukums
     * const firmaHukum = await prisma.firmaHukum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends firmaHukumUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, firmaHukumUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FirmaHukum.
     * @param {firmaHukumUpsertArgs} args - Arguments to update or create a FirmaHukum.
     * @example
     * // Update or create a FirmaHukum
     * const firmaHukum = await prisma.firmaHukum.upsert({
     *   create: {
     *     // ... data to create a FirmaHukum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FirmaHukum we want to update
     *   }
     * })
    **/
    upsert<T extends firmaHukumUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, firmaHukumUpsertArgs<ExtArgs>>
    ): Prisma__firmaHukumClient<$Result.GetResult<Prisma.$firmaHukumPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FirmaHukums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {firmaHukumCountArgs} args - Arguments to filter FirmaHukums to count.
     * @example
     * // Count the number of FirmaHukums
     * const count = await prisma.firmaHukum.count({
     *   where: {
     *     // ... the filter for the FirmaHukums we want to count
     *   }
     * })
    **/
    count<T extends firmaHukumCountArgs>(
      args?: Subset<T, firmaHukumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FirmaHukumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FirmaHukum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmaHukumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FirmaHukumAggregateArgs>(args: Subset<T, FirmaHukumAggregateArgs>): Prisma.PrismaPromise<GetFirmaHukumAggregateType<T>>

    /**
     * Group by FirmaHukum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {firmaHukumGroupByArgs} args - Group by arguments.
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
      T extends firmaHukumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: firmaHukumGroupByArgs['orderBy'] }
        : { orderBy?: firmaHukumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, firmaHukumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFirmaHukumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the firmaHukum model
   */
  readonly fields: firmaHukumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for firmaHukum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__firmaHukumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    lawyer<T extends LawyerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LawyerDefaultArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the firmaHukum model
   */ 
  interface firmaHukumFieldRefs {
    readonly id: FieldRef<"firmaHukum", 'Int'>
    readonly lawyerId: FieldRef<"firmaHukum", 'Int'>
    readonly name: FieldRef<"firmaHukum", 'String'>
  }
    

  // Custom InputTypes

  /**
   * firmaHukum findUnique
   */
  export type firmaHukumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the firmaHukum
     */
    select?: firmaHukumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: firmaHukumInclude<ExtArgs> | null
    /**
     * Filter, which firmaHukum to fetch.
     */
    where: firmaHukumWhereUniqueInput
  }


  /**
   * firmaHukum findUniqueOrThrow
   */
  export type firmaHukumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the firmaHukum
     */
    select?: firmaHukumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: firmaHukumInclude<ExtArgs> | null
    /**
     * Filter, which firmaHukum to fetch.
     */
    where: firmaHukumWhereUniqueInput
  }


  /**
   * firmaHukum findFirst
   */
  export type firmaHukumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the firmaHukum
     */
    select?: firmaHukumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: firmaHukumInclude<ExtArgs> | null
    /**
     * Filter, which firmaHukum to fetch.
     */
    where?: firmaHukumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of firmaHukums to fetch.
     */
    orderBy?: firmaHukumOrderByWithRelationInput | firmaHukumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for firmaHukums.
     */
    cursor?: firmaHukumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` firmaHukums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` firmaHukums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of firmaHukums.
     */
    distinct?: FirmaHukumScalarFieldEnum | FirmaHukumScalarFieldEnum[]
  }


  /**
   * firmaHukum findFirstOrThrow
   */
  export type firmaHukumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the firmaHukum
     */
    select?: firmaHukumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: firmaHukumInclude<ExtArgs> | null
    /**
     * Filter, which firmaHukum to fetch.
     */
    where?: firmaHukumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of firmaHukums to fetch.
     */
    orderBy?: firmaHukumOrderByWithRelationInput | firmaHukumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for firmaHukums.
     */
    cursor?: firmaHukumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` firmaHukums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` firmaHukums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of firmaHukums.
     */
    distinct?: FirmaHukumScalarFieldEnum | FirmaHukumScalarFieldEnum[]
  }


  /**
   * firmaHukum findMany
   */
  export type firmaHukumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the firmaHukum
     */
    select?: firmaHukumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: firmaHukumInclude<ExtArgs> | null
    /**
     * Filter, which firmaHukums to fetch.
     */
    where?: firmaHukumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of firmaHukums to fetch.
     */
    orderBy?: firmaHukumOrderByWithRelationInput | firmaHukumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing firmaHukums.
     */
    cursor?: firmaHukumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` firmaHukums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` firmaHukums.
     */
    skip?: number
    distinct?: FirmaHukumScalarFieldEnum | FirmaHukumScalarFieldEnum[]
  }


  /**
   * firmaHukum create
   */
  export type firmaHukumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the firmaHukum
     */
    select?: firmaHukumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: firmaHukumInclude<ExtArgs> | null
    /**
     * The data needed to create a firmaHukum.
     */
    data: XOR<firmaHukumCreateInput, firmaHukumUncheckedCreateInput>
  }


  /**
   * firmaHukum createMany
   */
  export type firmaHukumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many firmaHukums.
     */
    data: firmaHukumCreateManyInput | firmaHukumCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * firmaHukum update
   */
  export type firmaHukumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the firmaHukum
     */
    select?: firmaHukumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: firmaHukumInclude<ExtArgs> | null
    /**
     * The data needed to update a firmaHukum.
     */
    data: XOR<firmaHukumUpdateInput, firmaHukumUncheckedUpdateInput>
    /**
     * Choose, which firmaHukum to update.
     */
    where: firmaHukumWhereUniqueInput
  }


  /**
   * firmaHukum updateMany
   */
  export type firmaHukumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update firmaHukums.
     */
    data: XOR<firmaHukumUpdateManyMutationInput, firmaHukumUncheckedUpdateManyInput>
    /**
     * Filter which firmaHukums to update
     */
    where?: firmaHukumWhereInput
  }


  /**
   * firmaHukum upsert
   */
  export type firmaHukumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the firmaHukum
     */
    select?: firmaHukumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: firmaHukumInclude<ExtArgs> | null
    /**
     * The filter to search for the firmaHukum to update in case it exists.
     */
    where: firmaHukumWhereUniqueInput
    /**
     * In case the firmaHukum found by the `where` argument doesn't exist, create a new firmaHukum with this data.
     */
    create: XOR<firmaHukumCreateInput, firmaHukumUncheckedCreateInput>
    /**
     * In case the firmaHukum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<firmaHukumUpdateInput, firmaHukumUncheckedUpdateInput>
  }


  /**
   * firmaHukum delete
   */
  export type firmaHukumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the firmaHukum
     */
    select?: firmaHukumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: firmaHukumInclude<ExtArgs> | null
    /**
     * Filter which firmaHukum to delete.
     */
    where: firmaHukumWhereUniqueInput
  }


  /**
   * firmaHukum deleteMany
   */
  export type firmaHukumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which firmaHukums to delete
     */
    where?: firmaHukumWhereInput
  }


  /**
   * firmaHukum without action
   */
  export type firmaHukumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the firmaHukum
     */
    select?: firmaHukumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: firmaHukumInclude<ExtArgs> | null
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


  export const LawScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LawScalarFieldEnum = (typeof LawScalarFieldEnum)[keyof typeof LawScalarFieldEnum]


  export const LawBabScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lawId: 'lawId'
  };

  export type LawBabScalarFieldEnum = (typeof LawBabScalarFieldEnum)[keyof typeof LawBabScalarFieldEnum]


  export const LawDataScalarFieldEnum: {
    id: 'id',
    pasal: 'pasal',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lawBabId: 'lawBabId'
  };

  export type LawDataScalarFieldEnum = (typeof LawDataScalarFieldEnum)[keyof typeof LawDataScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    user1_id: 'user1_id',
    user2_id: 'user2_id'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    from: 'from',
    to: 'to',
    message: 'message',
    time: 'time'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const LawyerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    specialist: 'specialist',
    rate: 'rate',
    nomorPerandi: 'nomorPerandi',
    image: 'image',
    fee: 'fee'
  };

  export type LawyerScalarFieldEnum = (typeof LawyerScalarFieldEnum)[keyof typeof LawyerScalarFieldEnum]


  export const EducationalBackgroundScalarFieldEnum: {
    id: 'id',
    lawyerId: 'lawyerId',
    university: 'university',
    major: 'major'
  };

  export type EducationalBackgroundScalarFieldEnum = (typeof EducationalBackgroundScalarFieldEnum)[keyof typeof EducationalBackgroundScalarFieldEnum]


  export const FirmaHukumScalarFieldEnum: {
    id: 'id',
    lawyerId: 'lawyerId',
    name: 'name'
  };

  export type FirmaHukumScalarFieldEnum = (typeof FirmaHukumScalarFieldEnum)[keyof typeof FirmaHukumScalarFieldEnum]


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


  export type LawWhereInput = {
    AND?: LawWhereInput | LawWhereInput[]
    OR?: LawWhereInput[]
    NOT?: LawWhereInput | LawWhereInput[]
    id?: IntFilter<"Law"> | number
    title?: StringFilter<"Law"> | string
    description?: StringNullableFilter<"Law"> | string | null
    createdAt?: DateTimeFilter<"Law"> | Date | string
    updatedAt?: DateTimeFilter<"Law"> | Date | string
    LawBab?: LawBabListRelationFilter
  }

  export type LawOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    LawBab?: LawBabOrderByRelationAggregateInput
  }

  export type LawWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: LawWhereInput | LawWhereInput[]
    OR?: LawWhereInput[]
    NOT?: LawWhereInput | LawWhereInput[]
    description?: StringNullableFilter<"Law"> | string | null
    createdAt?: DateTimeFilter<"Law"> | Date | string
    updatedAt?: DateTimeFilter<"Law"> | Date | string
    LawBab?: LawBabListRelationFilter
  }, "id" | "title">

  export type LawOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LawCountOrderByAggregateInput
    _avg?: LawAvgOrderByAggregateInput
    _max?: LawMaxOrderByAggregateInput
    _min?: LawMinOrderByAggregateInput
    _sum?: LawSumOrderByAggregateInput
  }

  export type LawScalarWhereWithAggregatesInput = {
    AND?: LawScalarWhereWithAggregatesInput | LawScalarWhereWithAggregatesInput[]
    OR?: LawScalarWhereWithAggregatesInput[]
    NOT?: LawScalarWhereWithAggregatesInput | LawScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Law"> | number
    title?: StringWithAggregatesFilter<"Law"> | string
    description?: StringNullableWithAggregatesFilter<"Law"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Law"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Law"> | Date | string
  }

  export type LawBabWhereInput = {
    AND?: LawBabWhereInput | LawBabWhereInput[]
    OR?: LawBabWhereInput[]
    NOT?: LawBabWhereInput | LawBabWhereInput[]
    id?: IntFilter<"LawBab"> | number
    name?: StringFilter<"LawBab"> | string
    description?: StringNullableFilter<"LawBab"> | string | null
    createdAt?: DateTimeFilter<"LawBab"> | Date | string
    updatedAt?: DateTimeFilter<"LawBab"> | Date | string
    lawId?: IntFilter<"LawBab"> | number
    law?: XOR<LawRelationFilter, LawWhereInput>
    LawData?: LawDataListRelationFilter
  }

  export type LawBabOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lawId?: SortOrder
    law?: LawOrderByWithRelationInput
    LawData?: LawDataOrderByRelationAggregateInput
  }

  export type LawBabWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LawBabWhereInput | LawBabWhereInput[]
    OR?: LawBabWhereInput[]
    NOT?: LawBabWhereInput | LawBabWhereInput[]
    name?: StringFilter<"LawBab"> | string
    description?: StringNullableFilter<"LawBab"> | string | null
    createdAt?: DateTimeFilter<"LawBab"> | Date | string
    updatedAt?: DateTimeFilter<"LawBab"> | Date | string
    lawId?: IntFilter<"LawBab"> | number
    law?: XOR<LawRelationFilter, LawWhereInput>
    LawData?: LawDataListRelationFilter
  }, "id">

  export type LawBabOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lawId?: SortOrder
    _count?: LawBabCountOrderByAggregateInput
    _avg?: LawBabAvgOrderByAggregateInput
    _max?: LawBabMaxOrderByAggregateInput
    _min?: LawBabMinOrderByAggregateInput
    _sum?: LawBabSumOrderByAggregateInput
  }

  export type LawBabScalarWhereWithAggregatesInput = {
    AND?: LawBabScalarWhereWithAggregatesInput | LawBabScalarWhereWithAggregatesInput[]
    OR?: LawBabScalarWhereWithAggregatesInput[]
    NOT?: LawBabScalarWhereWithAggregatesInput | LawBabScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LawBab"> | number
    name?: StringWithAggregatesFilter<"LawBab"> | string
    description?: StringNullableWithAggregatesFilter<"LawBab"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LawBab"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LawBab"> | Date | string
    lawId?: IntWithAggregatesFilter<"LawBab"> | number
  }

  export type LawDataWhereInput = {
    AND?: LawDataWhereInput | LawDataWhereInput[]
    OR?: LawDataWhereInput[]
    NOT?: LawDataWhereInput | LawDataWhereInput[]
    id?: IntFilter<"LawData"> | number
    pasal?: StringFilter<"LawData"> | string
    content?: StringFilter<"LawData"> | string
    createdAt?: DateTimeFilter<"LawData"> | Date | string
    updatedAt?: DateTimeFilter<"LawData"> | Date | string
    lawBabId?: IntFilter<"LawData"> | number
    lawBab?: XOR<LawBabRelationFilter, LawBabWhereInput>
  }

  export type LawDataOrderByWithRelationInput = {
    id?: SortOrder
    pasal?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lawBabId?: SortOrder
    lawBab?: LawBabOrderByWithRelationInput
  }

  export type LawDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LawDataWhereInput | LawDataWhereInput[]
    OR?: LawDataWhereInput[]
    NOT?: LawDataWhereInput | LawDataWhereInput[]
    pasal?: StringFilter<"LawData"> | string
    content?: StringFilter<"LawData"> | string
    createdAt?: DateTimeFilter<"LawData"> | Date | string
    updatedAt?: DateTimeFilter<"LawData"> | Date | string
    lawBabId?: IntFilter<"LawData"> | number
    lawBab?: XOR<LawBabRelationFilter, LawBabWhereInput>
  }, "id">

  export type LawDataOrderByWithAggregationInput = {
    id?: SortOrder
    pasal?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lawBabId?: SortOrder
    _count?: LawDataCountOrderByAggregateInput
    _avg?: LawDataAvgOrderByAggregateInput
    _max?: LawDataMaxOrderByAggregateInput
    _min?: LawDataMinOrderByAggregateInput
    _sum?: LawDataSumOrderByAggregateInput
  }

  export type LawDataScalarWhereWithAggregatesInput = {
    AND?: LawDataScalarWhereWithAggregatesInput | LawDataScalarWhereWithAggregatesInput[]
    OR?: LawDataScalarWhereWithAggregatesInput[]
    NOT?: LawDataScalarWhereWithAggregatesInput | LawDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LawData"> | number
    pasal?: StringWithAggregatesFilter<"LawData"> | string
    content?: StringWithAggregatesFilter<"LawData"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LawData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LawData"> | Date | string
    lawBabId?: IntWithAggregatesFilter<"LawData"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    chat1?: ChatListRelationFilter
    chat2?: ChatListRelationFilter
    from?: MessageListRelationFilter
    to?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chat1?: ChatOrderByRelationAggregateInput
    chat2?: ChatOrderByRelationAggregateInput
    from?: MessageOrderByRelationAggregateInput
    to?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    chat1?: ChatListRelationFilter
    chat2?: ChatListRelationFilter
    from?: MessageListRelationFilter
    to?: MessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    middleName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: IntFilter<"Chat"> | number
    user1_id?: IntFilter<"Chat"> | number
    user2_id?: IntFilter<"Chat"> | number
    user1?: XOR<UserRelationFilter, UserWhereInput>
    user2?: XOR<UserRelationFilter, UserWhereInput>
    Message?: MessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
    Message?: MessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    user1_id?: IntFilter<"Chat"> | number
    user2_id?: IntFilter<"Chat"> | number
    user1?: XOR<UserRelationFilter, UserWhereInput>
    user2?: XOR<UserRelationFilter, UserWhereInput>
    Message?: MessageListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chat"> | number
    user1_id?: IntWithAggregatesFilter<"Chat"> | number
    user2_id?: IntWithAggregatesFilter<"Chat"> | number
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    chatId?: IntFilter<"Message"> | number
    from?: IntFilter<"Message"> | number
    to?: IntFilter<"Message"> | number
    message?: StringFilter<"Message"> | string
    time?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatRelationFilter, ChatWhereInput>
    fromId?: XOR<UserRelationFilter, UserWhereInput>
    toId?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    from?: SortOrder
    to?: SortOrder
    message?: SortOrder
    time?: SortOrder
    chat?: ChatOrderByWithRelationInput
    fromId?: UserOrderByWithRelationInput
    toId?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    chatId?: IntFilter<"Message"> | number
    from?: IntFilter<"Message"> | number
    to?: IntFilter<"Message"> | number
    message?: StringFilter<"Message"> | string
    time?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatRelationFilter, ChatWhereInput>
    fromId?: XOR<UserRelationFilter, UserWhereInput>
    toId?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    from?: SortOrder
    to?: SortOrder
    message?: SortOrder
    time?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    chatId?: IntWithAggregatesFilter<"Message"> | number
    from?: IntWithAggregatesFilter<"Message"> | number
    to?: IntWithAggregatesFilter<"Message"> | number
    message?: StringWithAggregatesFilter<"Message"> | string
    time?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type LawyerWhereInput = {
    AND?: LawyerWhereInput | LawyerWhereInput[]
    OR?: LawyerWhereInput[]
    NOT?: LawyerWhereInput | LawyerWhereInput[]
    id?: IntFilter<"Lawyer"> | number
    name?: StringFilter<"Lawyer"> | string
    specialist?: StringFilter<"Lawyer"> | string
    rate?: IntFilter<"Lawyer"> | number
    nomorPerandi?: StringFilter<"Lawyer"> | string
    image?: StringFilter<"Lawyer"> | string
    fee?: IntFilter<"Lawyer"> | number
    educationalBackground?: EducationalBackgroundListRelationFilter
    firmaHukum?: FirmaHukumListRelationFilter
  }

  export type LawyerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    specialist?: SortOrder
    rate?: SortOrder
    nomorPerandi?: SortOrder
    image?: SortOrder
    fee?: SortOrder
    educationalBackground?: educationalBackgroundOrderByRelationAggregateInput
    firmaHukum?: firmaHukumOrderByRelationAggregateInput
  }

  export type LawyerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LawyerWhereInput | LawyerWhereInput[]
    OR?: LawyerWhereInput[]
    NOT?: LawyerWhereInput | LawyerWhereInput[]
    name?: StringFilter<"Lawyer"> | string
    specialist?: StringFilter<"Lawyer"> | string
    rate?: IntFilter<"Lawyer"> | number
    nomorPerandi?: StringFilter<"Lawyer"> | string
    image?: StringFilter<"Lawyer"> | string
    fee?: IntFilter<"Lawyer"> | number
    educationalBackground?: EducationalBackgroundListRelationFilter
    firmaHukum?: FirmaHukumListRelationFilter
  }, "id">

  export type LawyerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    specialist?: SortOrder
    rate?: SortOrder
    nomorPerandi?: SortOrder
    image?: SortOrder
    fee?: SortOrder
    _count?: LawyerCountOrderByAggregateInput
    _avg?: LawyerAvgOrderByAggregateInput
    _max?: LawyerMaxOrderByAggregateInput
    _min?: LawyerMinOrderByAggregateInput
    _sum?: LawyerSumOrderByAggregateInput
  }

  export type LawyerScalarWhereWithAggregatesInput = {
    AND?: LawyerScalarWhereWithAggregatesInput | LawyerScalarWhereWithAggregatesInput[]
    OR?: LawyerScalarWhereWithAggregatesInput[]
    NOT?: LawyerScalarWhereWithAggregatesInput | LawyerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lawyer"> | number
    name?: StringWithAggregatesFilter<"Lawyer"> | string
    specialist?: StringWithAggregatesFilter<"Lawyer"> | string
    rate?: IntWithAggregatesFilter<"Lawyer"> | number
    nomorPerandi?: StringWithAggregatesFilter<"Lawyer"> | string
    image?: StringWithAggregatesFilter<"Lawyer"> | string
    fee?: IntWithAggregatesFilter<"Lawyer"> | number
  }

  export type educationalBackgroundWhereInput = {
    AND?: educationalBackgroundWhereInput | educationalBackgroundWhereInput[]
    OR?: educationalBackgroundWhereInput[]
    NOT?: educationalBackgroundWhereInput | educationalBackgroundWhereInput[]
    id?: IntFilter<"educationalBackground"> | number
    lawyerId?: IntFilter<"educationalBackground"> | number
    university?: StringFilter<"educationalBackground"> | string
    major?: StringFilter<"educationalBackground"> | string
    lawyer?: XOR<LawyerRelationFilter, LawyerWhereInput>
  }

  export type educationalBackgroundOrderByWithRelationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    university?: SortOrder
    major?: SortOrder
    lawyer?: LawyerOrderByWithRelationInput
  }

  export type educationalBackgroundWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: educationalBackgroundWhereInput | educationalBackgroundWhereInput[]
    OR?: educationalBackgroundWhereInput[]
    NOT?: educationalBackgroundWhereInput | educationalBackgroundWhereInput[]
    lawyerId?: IntFilter<"educationalBackground"> | number
    university?: StringFilter<"educationalBackground"> | string
    major?: StringFilter<"educationalBackground"> | string
    lawyer?: XOR<LawyerRelationFilter, LawyerWhereInput>
  }, "id">

  export type educationalBackgroundOrderByWithAggregationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    university?: SortOrder
    major?: SortOrder
    _count?: educationalBackgroundCountOrderByAggregateInput
    _avg?: educationalBackgroundAvgOrderByAggregateInput
    _max?: educationalBackgroundMaxOrderByAggregateInput
    _min?: educationalBackgroundMinOrderByAggregateInput
    _sum?: educationalBackgroundSumOrderByAggregateInput
  }

  export type educationalBackgroundScalarWhereWithAggregatesInput = {
    AND?: educationalBackgroundScalarWhereWithAggregatesInput | educationalBackgroundScalarWhereWithAggregatesInput[]
    OR?: educationalBackgroundScalarWhereWithAggregatesInput[]
    NOT?: educationalBackgroundScalarWhereWithAggregatesInput | educationalBackgroundScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"educationalBackground"> | number
    lawyerId?: IntWithAggregatesFilter<"educationalBackground"> | number
    university?: StringWithAggregatesFilter<"educationalBackground"> | string
    major?: StringWithAggregatesFilter<"educationalBackground"> | string
  }

  export type firmaHukumWhereInput = {
    AND?: firmaHukumWhereInput | firmaHukumWhereInput[]
    OR?: firmaHukumWhereInput[]
    NOT?: firmaHukumWhereInput | firmaHukumWhereInput[]
    id?: IntFilter<"firmaHukum"> | number
    lawyerId?: IntFilter<"firmaHukum"> | number
    name?: StringFilter<"firmaHukum"> | string
    lawyer?: XOR<LawyerRelationFilter, LawyerWhereInput>
  }

  export type firmaHukumOrderByWithRelationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    name?: SortOrder
    lawyer?: LawyerOrderByWithRelationInput
  }

  export type firmaHukumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: firmaHukumWhereInput | firmaHukumWhereInput[]
    OR?: firmaHukumWhereInput[]
    NOT?: firmaHukumWhereInput | firmaHukumWhereInput[]
    lawyerId?: IntFilter<"firmaHukum"> | number
    name?: StringFilter<"firmaHukum"> | string
    lawyer?: XOR<LawyerRelationFilter, LawyerWhereInput>
  }, "id">

  export type firmaHukumOrderByWithAggregationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    name?: SortOrder
    _count?: firmaHukumCountOrderByAggregateInput
    _avg?: firmaHukumAvgOrderByAggregateInput
    _max?: firmaHukumMaxOrderByAggregateInput
    _min?: firmaHukumMinOrderByAggregateInput
    _sum?: firmaHukumSumOrderByAggregateInput
  }

  export type firmaHukumScalarWhereWithAggregatesInput = {
    AND?: firmaHukumScalarWhereWithAggregatesInput | firmaHukumScalarWhereWithAggregatesInput[]
    OR?: firmaHukumScalarWhereWithAggregatesInput[]
    NOT?: firmaHukumScalarWhereWithAggregatesInput | firmaHukumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"firmaHukum"> | number
    lawyerId?: IntWithAggregatesFilter<"firmaHukum"> | number
    name?: StringWithAggregatesFilter<"firmaHukum"> | string
  }

  export type LawCreateInput = {
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    LawBab?: LawBabCreateNestedManyWithoutLawInput
  }

  export type LawUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    LawBab?: LawBabUncheckedCreateNestedManyWithoutLawInput
  }

  export type LawUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LawBab?: LawBabUpdateManyWithoutLawNestedInput
  }

  export type LawUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LawBab?: LawBabUncheckedUpdateManyWithoutLawNestedInput
  }

  export type LawCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawBabCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    law: LawCreateNestedOneWithoutLawBabInput
    LawData?: LawDataCreateNestedManyWithoutLawBabInput
  }

  export type LawBabUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lawId: number
    LawData?: LawDataUncheckedCreateNestedManyWithoutLawBabInput
  }

  export type LawBabUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    law?: LawUpdateOneRequiredWithoutLawBabNestedInput
    LawData?: LawDataUpdateManyWithoutLawBabNestedInput
  }

  export type LawBabUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lawId?: IntFieldUpdateOperationsInput | number
    LawData?: LawDataUncheckedUpdateManyWithoutLawBabNestedInput
  }

  export type LawBabCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lawId: number
  }

  export type LawBabUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawBabUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lawId?: IntFieldUpdateOperationsInput | number
  }

  export type LawDataCreateInput = {
    pasal: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lawBab: LawBabCreateNestedOneWithoutLawDataInput
  }

  export type LawDataUncheckedCreateInput = {
    id?: number
    pasal: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lawBabId: number
  }

  export type LawDataUpdateInput = {
    pasal?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lawBab?: LawBabUpdateOneRequiredWithoutLawDataNestedInput
  }

  export type LawDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pasal?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lawBabId?: IntFieldUpdateOperationsInput | number
  }

  export type LawDataCreateManyInput = {
    id?: number
    pasal: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lawBabId: number
  }

  export type LawDataUpdateManyMutationInput = {
    pasal?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pasal?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lawBabId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat1?: ChatCreateNestedManyWithoutUser1Input
    chat2?: ChatCreateNestedManyWithoutUser2Input
    from?: MessageCreateNestedManyWithoutFromIdInput
    to?: MessageCreateNestedManyWithoutToIdInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat1?: ChatUncheckedCreateNestedManyWithoutUser1Input
    chat2?: ChatUncheckedCreateNestedManyWithoutUser2Input
    from?: MessageUncheckedCreateNestedManyWithoutFromIdInput
    to?: MessageUncheckedCreateNestedManyWithoutToIdInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat1?: ChatUpdateManyWithoutUser1NestedInput
    chat2?: ChatUpdateManyWithoutUser2NestedInput
    from?: MessageUpdateManyWithoutFromIdNestedInput
    to?: MessageUpdateManyWithoutToIdNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat1?: ChatUncheckedUpdateManyWithoutUser1NestedInput
    chat2?: ChatUncheckedUpdateManyWithoutUser2NestedInput
    from?: MessageUncheckedUpdateManyWithoutFromIdNestedInput
    to?: MessageUncheckedUpdateManyWithoutToIdNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    user1: UserCreateNestedOneWithoutChat1Input
    user2: UserCreateNestedOneWithoutChat2Input
    Message?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: number
    user1_id: number
    user2_id: number
    Message?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    user1?: UserUpdateOneRequiredWithoutChat1NestedInput
    user2?: UserUpdateOneRequiredWithoutChat2NestedInput
    Message?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1_id?: IntFieldUpdateOperationsInput | number
    user2_id?: IntFieldUpdateOperationsInput | number
    Message?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: number
    user1_id: number
    user2_id: number
  }

  export type ChatUpdateManyMutationInput = {

  }

  export type ChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1_id?: IntFieldUpdateOperationsInput | number
    user2_id?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateInput = {
    message: string
    time?: Date | string
    chat: ChatCreateNestedOneWithoutMessageInput
    fromId: UserCreateNestedOneWithoutFromInput
    toId: UserCreateNestedOneWithoutToInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    chatId: number
    from: number
    to: number
    message: string
    time?: Date | string
  }

  export type MessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessageNestedInput
    fromId?: UserUpdateOneRequiredWithoutFromNestedInput
    toId?: UserUpdateOneRequiredWithoutToNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    chatId: number
    from: number
    to: number
    message: string
    time?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawyerCreateInput = {
    name: string
    specialist: string
    rate: number
    nomorPerandi: string
    image: string
    fee: number
    educationalBackground?: educationalBackgroundCreateNestedManyWithoutLawyerInput
    firmaHukum?: firmaHukumCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUncheckedCreateInput = {
    id?: number
    name: string
    specialist: string
    rate: number
    nomorPerandi: string
    image: string
    fee: number
    educationalBackground?: educationalBackgroundUncheckedCreateNestedManyWithoutLawyerInput
    firmaHukum?: firmaHukumUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    nomorPerandi?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    educationalBackground?: educationalBackgroundUpdateManyWithoutLawyerNestedInput
    firmaHukum?: firmaHukumUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    nomorPerandi?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    educationalBackground?: educationalBackgroundUncheckedUpdateManyWithoutLawyerNestedInput
    firmaHukum?: firmaHukumUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerCreateManyInput = {
    id?: number
    name: string
    specialist: string
    rate: number
    nomorPerandi: string
    image: string
    fee: number
  }

  export type LawyerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    nomorPerandi?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
  }

  export type LawyerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    nomorPerandi?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
  }

  export type educationalBackgroundCreateInput = {
    university: string
    major: string
    lawyer: LawyerCreateNestedOneWithoutEducationalBackgroundInput
  }

  export type educationalBackgroundUncheckedCreateInput = {
    id?: number
    lawyerId: number
    university: string
    major: string
  }

  export type educationalBackgroundUpdateInput = {
    university?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    lawyer?: LawyerUpdateOneRequiredWithoutEducationalBackgroundNestedInput
  }

  export type educationalBackgroundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    university?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
  }

  export type educationalBackgroundCreateManyInput = {
    id?: number
    lawyerId: number
    university: string
    major: string
  }

  export type educationalBackgroundUpdateManyMutationInput = {
    university?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
  }

  export type educationalBackgroundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    university?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
  }

  export type firmaHukumCreateInput = {
    name: string
    lawyer: LawyerCreateNestedOneWithoutFirmaHukumInput
  }

  export type firmaHukumUncheckedCreateInput = {
    id?: number
    lawyerId: number
    name: string
  }

  export type firmaHukumUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lawyer?: LawyerUpdateOneRequiredWithoutFirmaHukumNestedInput
  }

  export type firmaHukumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type firmaHukumCreateManyInput = {
    id?: number
    lawyerId: number
    name: string
  }

  export type firmaHukumUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type firmaHukumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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

  export type LawBabListRelationFilter = {
    every?: LawBabWhereInput
    some?: LawBabWhereInput
    none?: LawBabWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LawBabOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LawCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LawMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type LawRelationFilter = {
    is?: LawWhereInput
    isNot?: LawWhereInput
  }

  export type LawDataListRelationFilter = {
    every?: LawDataWhereInput
    some?: LawDataWhereInput
    none?: LawDataWhereInput
  }

  export type LawDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LawBabCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lawId?: SortOrder
  }

  export type LawBabAvgOrderByAggregateInput = {
    id?: SortOrder
    lawId?: SortOrder
  }

  export type LawBabMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lawId?: SortOrder
  }

  export type LawBabMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lawId?: SortOrder
  }

  export type LawBabSumOrderByAggregateInput = {
    id?: SortOrder
    lawId?: SortOrder
  }

  export type LawBabRelationFilter = {
    is?: LawBabWhereInput
    isNot?: LawBabWhereInput
  }

  export type LawDataCountOrderByAggregateInput = {
    id?: SortOrder
    pasal?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lawBabId?: SortOrder
  }

  export type LawDataAvgOrderByAggregateInput = {
    id?: SortOrder
    lawBabId?: SortOrder
  }

  export type LawDataMaxOrderByAggregateInput = {
    id?: SortOrder
    pasal?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lawBabId?: SortOrder
  }

  export type LawDataMinOrderByAggregateInput = {
    id?: SortOrder
    pasal?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lawBabId?: SortOrder
  }

  export type LawDataSumOrderByAggregateInput = {
    id?: SortOrder
    lawBabId?: SortOrder
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
  }

  export type ChatRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    from?: SortOrder
    to?: SortOrder
    message?: SortOrder
    time?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    from?: SortOrder
    to?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    from?: SortOrder
    to?: SortOrder
    message?: SortOrder
    time?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    from?: SortOrder
    to?: SortOrder
    message?: SortOrder
    time?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    from?: SortOrder
    to?: SortOrder
  }

  export type EducationalBackgroundListRelationFilter = {
    every?: educationalBackgroundWhereInput
    some?: educationalBackgroundWhereInput
    none?: educationalBackgroundWhereInput
  }

  export type FirmaHukumListRelationFilter = {
    every?: firmaHukumWhereInput
    some?: firmaHukumWhereInput
    none?: firmaHukumWhereInput
  }

  export type educationalBackgroundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type firmaHukumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LawyerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    specialist?: SortOrder
    rate?: SortOrder
    nomorPerandi?: SortOrder
    image?: SortOrder
    fee?: SortOrder
  }

  export type LawyerAvgOrderByAggregateInput = {
    id?: SortOrder
    rate?: SortOrder
    fee?: SortOrder
  }

  export type LawyerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    specialist?: SortOrder
    rate?: SortOrder
    nomorPerandi?: SortOrder
    image?: SortOrder
    fee?: SortOrder
  }

  export type LawyerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    specialist?: SortOrder
    rate?: SortOrder
    nomorPerandi?: SortOrder
    image?: SortOrder
    fee?: SortOrder
  }

  export type LawyerSumOrderByAggregateInput = {
    id?: SortOrder
    rate?: SortOrder
    fee?: SortOrder
  }

  export type LawyerRelationFilter = {
    is?: LawyerWhereInput
    isNot?: LawyerWhereInput
  }

  export type educationalBackgroundCountOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    university?: SortOrder
    major?: SortOrder
  }

  export type educationalBackgroundAvgOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
  }

  export type educationalBackgroundMaxOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    university?: SortOrder
    major?: SortOrder
  }

  export type educationalBackgroundMinOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    university?: SortOrder
    major?: SortOrder
  }

  export type educationalBackgroundSumOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
  }

  export type firmaHukumCountOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    name?: SortOrder
  }

  export type firmaHukumAvgOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
  }

  export type firmaHukumMaxOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    name?: SortOrder
  }

  export type firmaHukumMinOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    name?: SortOrder
  }

  export type firmaHukumSumOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
  }

  export type LawBabCreateNestedManyWithoutLawInput = {
    create?: XOR<LawBabCreateWithoutLawInput, LawBabUncheckedCreateWithoutLawInput> | LawBabCreateWithoutLawInput[] | LawBabUncheckedCreateWithoutLawInput[]
    connectOrCreate?: LawBabCreateOrConnectWithoutLawInput | LawBabCreateOrConnectWithoutLawInput[]
    createMany?: LawBabCreateManyLawInputEnvelope
    connect?: LawBabWhereUniqueInput | LawBabWhereUniqueInput[]
  }

  export type LawBabUncheckedCreateNestedManyWithoutLawInput = {
    create?: XOR<LawBabCreateWithoutLawInput, LawBabUncheckedCreateWithoutLawInput> | LawBabCreateWithoutLawInput[] | LawBabUncheckedCreateWithoutLawInput[]
    connectOrCreate?: LawBabCreateOrConnectWithoutLawInput | LawBabCreateOrConnectWithoutLawInput[]
    createMany?: LawBabCreateManyLawInputEnvelope
    connect?: LawBabWhereUniqueInput | LawBabWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LawBabUpdateManyWithoutLawNestedInput = {
    create?: XOR<LawBabCreateWithoutLawInput, LawBabUncheckedCreateWithoutLawInput> | LawBabCreateWithoutLawInput[] | LawBabUncheckedCreateWithoutLawInput[]
    connectOrCreate?: LawBabCreateOrConnectWithoutLawInput | LawBabCreateOrConnectWithoutLawInput[]
    upsert?: LawBabUpsertWithWhereUniqueWithoutLawInput | LawBabUpsertWithWhereUniqueWithoutLawInput[]
    createMany?: LawBabCreateManyLawInputEnvelope
    set?: LawBabWhereUniqueInput | LawBabWhereUniqueInput[]
    disconnect?: LawBabWhereUniqueInput | LawBabWhereUniqueInput[]
    delete?: LawBabWhereUniqueInput | LawBabWhereUniqueInput[]
    connect?: LawBabWhereUniqueInput | LawBabWhereUniqueInput[]
    update?: LawBabUpdateWithWhereUniqueWithoutLawInput | LawBabUpdateWithWhereUniqueWithoutLawInput[]
    updateMany?: LawBabUpdateManyWithWhereWithoutLawInput | LawBabUpdateManyWithWhereWithoutLawInput[]
    deleteMany?: LawBabScalarWhereInput | LawBabScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LawBabUncheckedUpdateManyWithoutLawNestedInput = {
    create?: XOR<LawBabCreateWithoutLawInput, LawBabUncheckedCreateWithoutLawInput> | LawBabCreateWithoutLawInput[] | LawBabUncheckedCreateWithoutLawInput[]
    connectOrCreate?: LawBabCreateOrConnectWithoutLawInput | LawBabCreateOrConnectWithoutLawInput[]
    upsert?: LawBabUpsertWithWhereUniqueWithoutLawInput | LawBabUpsertWithWhereUniqueWithoutLawInput[]
    createMany?: LawBabCreateManyLawInputEnvelope
    set?: LawBabWhereUniqueInput | LawBabWhereUniqueInput[]
    disconnect?: LawBabWhereUniqueInput | LawBabWhereUniqueInput[]
    delete?: LawBabWhereUniqueInput | LawBabWhereUniqueInput[]
    connect?: LawBabWhereUniqueInput | LawBabWhereUniqueInput[]
    update?: LawBabUpdateWithWhereUniqueWithoutLawInput | LawBabUpdateWithWhereUniqueWithoutLawInput[]
    updateMany?: LawBabUpdateManyWithWhereWithoutLawInput | LawBabUpdateManyWithWhereWithoutLawInput[]
    deleteMany?: LawBabScalarWhereInput | LawBabScalarWhereInput[]
  }

  export type LawCreateNestedOneWithoutLawBabInput = {
    create?: XOR<LawCreateWithoutLawBabInput, LawUncheckedCreateWithoutLawBabInput>
    connectOrCreate?: LawCreateOrConnectWithoutLawBabInput
    connect?: LawWhereUniqueInput
  }

  export type LawDataCreateNestedManyWithoutLawBabInput = {
    create?: XOR<LawDataCreateWithoutLawBabInput, LawDataUncheckedCreateWithoutLawBabInput> | LawDataCreateWithoutLawBabInput[] | LawDataUncheckedCreateWithoutLawBabInput[]
    connectOrCreate?: LawDataCreateOrConnectWithoutLawBabInput | LawDataCreateOrConnectWithoutLawBabInput[]
    createMany?: LawDataCreateManyLawBabInputEnvelope
    connect?: LawDataWhereUniqueInput | LawDataWhereUniqueInput[]
  }

  export type LawDataUncheckedCreateNestedManyWithoutLawBabInput = {
    create?: XOR<LawDataCreateWithoutLawBabInput, LawDataUncheckedCreateWithoutLawBabInput> | LawDataCreateWithoutLawBabInput[] | LawDataUncheckedCreateWithoutLawBabInput[]
    connectOrCreate?: LawDataCreateOrConnectWithoutLawBabInput | LawDataCreateOrConnectWithoutLawBabInput[]
    createMany?: LawDataCreateManyLawBabInputEnvelope
    connect?: LawDataWhereUniqueInput | LawDataWhereUniqueInput[]
  }

  export type LawUpdateOneRequiredWithoutLawBabNestedInput = {
    create?: XOR<LawCreateWithoutLawBabInput, LawUncheckedCreateWithoutLawBabInput>
    connectOrCreate?: LawCreateOrConnectWithoutLawBabInput
    upsert?: LawUpsertWithoutLawBabInput
    connect?: LawWhereUniqueInput
    update?: XOR<XOR<LawUpdateToOneWithWhereWithoutLawBabInput, LawUpdateWithoutLawBabInput>, LawUncheckedUpdateWithoutLawBabInput>
  }

  export type LawDataUpdateManyWithoutLawBabNestedInput = {
    create?: XOR<LawDataCreateWithoutLawBabInput, LawDataUncheckedCreateWithoutLawBabInput> | LawDataCreateWithoutLawBabInput[] | LawDataUncheckedCreateWithoutLawBabInput[]
    connectOrCreate?: LawDataCreateOrConnectWithoutLawBabInput | LawDataCreateOrConnectWithoutLawBabInput[]
    upsert?: LawDataUpsertWithWhereUniqueWithoutLawBabInput | LawDataUpsertWithWhereUniqueWithoutLawBabInput[]
    createMany?: LawDataCreateManyLawBabInputEnvelope
    set?: LawDataWhereUniqueInput | LawDataWhereUniqueInput[]
    disconnect?: LawDataWhereUniqueInput | LawDataWhereUniqueInput[]
    delete?: LawDataWhereUniqueInput | LawDataWhereUniqueInput[]
    connect?: LawDataWhereUniqueInput | LawDataWhereUniqueInput[]
    update?: LawDataUpdateWithWhereUniqueWithoutLawBabInput | LawDataUpdateWithWhereUniqueWithoutLawBabInput[]
    updateMany?: LawDataUpdateManyWithWhereWithoutLawBabInput | LawDataUpdateManyWithWhereWithoutLawBabInput[]
    deleteMany?: LawDataScalarWhereInput | LawDataScalarWhereInput[]
  }

  export type LawDataUncheckedUpdateManyWithoutLawBabNestedInput = {
    create?: XOR<LawDataCreateWithoutLawBabInput, LawDataUncheckedCreateWithoutLawBabInput> | LawDataCreateWithoutLawBabInput[] | LawDataUncheckedCreateWithoutLawBabInput[]
    connectOrCreate?: LawDataCreateOrConnectWithoutLawBabInput | LawDataCreateOrConnectWithoutLawBabInput[]
    upsert?: LawDataUpsertWithWhereUniqueWithoutLawBabInput | LawDataUpsertWithWhereUniqueWithoutLawBabInput[]
    createMany?: LawDataCreateManyLawBabInputEnvelope
    set?: LawDataWhereUniqueInput | LawDataWhereUniqueInput[]
    disconnect?: LawDataWhereUniqueInput | LawDataWhereUniqueInput[]
    delete?: LawDataWhereUniqueInput | LawDataWhereUniqueInput[]
    connect?: LawDataWhereUniqueInput | LawDataWhereUniqueInput[]
    update?: LawDataUpdateWithWhereUniqueWithoutLawBabInput | LawDataUpdateWithWhereUniqueWithoutLawBabInput[]
    updateMany?: LawDataUpdateManyWithWhereWithoutLawBabInput | LawDataUpdateManyWithWhereWithoutLawBabInput[]
    deleteMany?: LawDataScalarWhereInput | LawDataScalarWhereInput[]
  }

  export type LawBabCreateNestedOneWithoutLawDataInput = {
    create?: XOR<LawBabCreateWithoutLawDataInput, LawBabUncheckedCreateWithoutLawDataInput>
    connectOrCreate?: LawBabCreateOrConnectWithoutLawDataInput
    connect?: LawBabWhereUniqueInput
  }

  export type LawBabUpdateOneRequiredWithoutLawDataNestedInput = {
    create?: XOR<LawBabCreateWithoutLawDataInput, LawBabUncheckedCreateWithoutLawDataInput>
    connectOrCreate?: LawBabCreateOrConnectWithoutLawDataInput
    upsert?: LawBabUpsertWithoutLawDataInput
    connect?: LawBabWhereUniqueInput
    update?: XOR<XOR<LawBabUpdateToOneWithWhereWithoutLawDataInput, LawBabUpdateWithoutLawDataInput>, LawBabUncheckedUpdateWithoutLawDataInput>
  }

  export type ChatCreateNestedManyWithoutUser1Input = {
    create?: XOR<ChatCreateWithoutUser1Input, ChatUncheckedCreateWithoutUser1Input> | ChatCreateWithoutUser1Input[] | ChatUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser1Input | ChatCreateOrConnectWithoutUser1Input[]
    createMany?: ChatCreateManyUser1InputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutUser2Input = {
    create?: XOR<ChatCreateWithoutUser2Input, ChatUncheckedCreateWithoutUser2Input> | ChatCreateWithoutUser2Input[] | ChatUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser2Input | ChatCreateOrConnectWithoutUser2Input[]
    createMany?: ChatCreateManyUser2InputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutFromIdInput = {
    create?: XOR<MessageCreateWithoutFromIdInput, MessageUncheckedCreateWithoutFromIdInput> | MessageCreateWithoutFromIdInput[] | MessageUncheckedCreateWithoutFromIdInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromIdInput | MessageCreateOrConnectWithoutFromIdInput[]
    createMany?: MessageCreateManyFromIdInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutToIdInput = {
    create?: XOR<MessageCreateWithoutToIdInput, MessageUncheckedCreateWithoutToIdInput> | MessageCreateWithoutToIdInput[] | MessageUncheckedCreateWithoutToIdInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToIdInput | MessageCreateOrConnectWithoutToIdInput[]
    createMany?: MessageCreateManyToIdInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<ChatCreateWithoutUser1Input, ChatUncheckedCreateWithoutUser1Input> | ChatCreateWithoutUser1Input[] | ChatUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser1Input | ChatCreateOrConnectWithoutUser1Input[]
    createMany?: ChatCreateManyUser1InputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<ChatCreateWithoutUser2Input, ChatUncheckedCreateWithoutUser2Input> | ChatCreateWithoutUser2Input[] | ChatUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser2Input | ChatCreateOrConnectWithoutUser2Input[]
    createMany?: ChatCreateManyUser2InputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutFromIdInput = {
    create?: XOR<MessageCreateWithoutFromIdInput, MessageUncheckedCreateWithoutFromIdInput> | MessageCreateWithoutFromIdInput[] | MessageUncheckedCreateWithoutFromIdInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromIdInput | MessageCreateOrConnectWithoutFromIdInput[]
    createMany?: MessageCreateManyFromIdInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutToIdInput = {
    create?: XOR<MessageCreateWithoutToIdInput, MessageUncheckedCreateWithoutToIdInput> | MessageCreateWithoutToIdInput[] | MessageUncheckedCreateWithoutToIdInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToIdInput | MessageCreateOrConnectWithoutToIdInput[]
    createMany?: MessageCreateManyToIdInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ChatCreateWithoutUser1Input, ChatUncheckedCreateWithoutUser1Input> | ChatCreateWithoutUser1Input[] | ChatUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser1Input | ChatCreateOrConnectWithoutUser1Input[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUser1Input | ChatUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ChatCreateManyUser1InputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUser1Input | ChatUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ChatUpdateManyWithWhereWithoutUser1Input | ChatUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ChatCreateWithoutUser2Input, ChatUncheckedCreateWithoutUser2Input> | ChatCreateWithoutUser2Input[] | ChatUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser2Input | ChatCreateOrConnectWithoutUser2Input[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUser2Input | ChatUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ChatCreateManyUser2InputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUser2Input | ChatUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ChatUpdateManyWithWhereWithoutUser2Input | ChatUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutFromIdNestedInput = {
    create?: XOR<MessageCreateWithoutFromIdInput, MessageUncheckedCreateWithoutFromIdInput> | MessageCreateWithoutFromIdInput[] | MessageUncheckedCreateWithoutFromIdInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromIdInput | MessageCreateOrConnectWithoutFromIdInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutFromIdInput | MessageUpsertWithWhereUniqueWithoutFromIdInput[]
    createMany?: MessageCreateManyFromIdInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutFromIdInput | MessageUpdateWithWhereUniqueWithoutFromIdInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutFromIdInput | MessageUpdateManyWithWhereWithoutFromIdInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutToIdNestedInput = {
    create?: XOR<MessageCreateWithoutToIdInput, MessageUncheckedCreateWithoutToIdInput> | MessageCreateWithoutToIdInput[] | MessageUncheckedCreateWithoutToIdInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToIdInput | MessageCreateOrConnectWithoutToIdInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutToIdInput | MessageUpsertWithWhereUniqueWithoutToIdInput[]
    createMany?: MessageCreateManyToIdInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutToIdInput | MessageUpdateWithWhereUniqueWithoutToIdInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutToIdInput | MessageUpdateManyWithWhereWithoutToIdInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ChatCreateWithoutUser1Input, ChatUncheckedCreateWithoutUser1Input> | ChatCreateWithoutUser1Input[] | ChatUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser1Input | ChatCreateOrConnectWithoutUser1Input[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUser1Input | ChatUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ChatCreateManyUser1InputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUser1Input | ChatUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ChatUpdateManyWithWhereWithoutUser1Input | ChatUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ChatCreateWithoutUser2Input, ChatUncheckedCreateWithoutUser2Input> | ChatCreateWithoutUser2Input[] | ChatUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser2Input | ChatCreateOrConnectWithoutUser2Input[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUser2Input | ChatUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ChatCreateManyUser2InputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUser2Input | ChatUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ChatUpdateManyWithWhereWithoutUser2Input | ChatUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutFromIdNestedInput = {
    create?: XOR<MessageCreateWithoutFromIdInput, MessageUncheckedCreateWithoutFromIdInput> | MessageCreateWithoutFromIdInput[] | MessageUncheckedCreateWithoutFromIdInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromIdInput | MessageCreateOrConnectWithoutFromIdInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutFromIdInput | MessageUpsertWithWhereUniqueWithoutFromIdInput[]
    createMany?: MessageCreateManyFromIdInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutFromIdInput | MessageUpdateWithWhereUniqueWithoutFromIdInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutFromIdInput | MessageUpdateManyWithWhereWithoutFromIdInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutToIdNestedInput = {
    create?: XOR<MessageCreateWithoutToIdInput, MessageUncheckedCreateWithoutToIdInput> | MessageCreateWithoutToIdInput[] | MessageUncheckedCreateWithoutToIdInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToIdInput | MessageCreateOrConnectWithoutToIdInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutToIdInput | MessageUpsertWithWhereUniqueWithoutToIdInput[]
    createMany?: MessageCreateManyToIdInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutToIdInput | MessageUpdateWithWhereUniqueWithoutToIdInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutToIdInput | MessageUpdateManyWithWhereWithoutToIdInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChat1Input = {
    create?: XOR<UserCreateWithoutChat1Input, UserUncheckedCreateWithoutChat1Input>
    connectOrCreate?: UserCreateOrConnectWithoutChat1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChat2Input = {
    create?: XOR<UserCreateWithoutChat2Input, UserUncheckedCreateWithoutChat2Input>
    connectOrCreate?: UserCreateOrConnectWithoutChat2Input
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChat1NestedInput = {
    create?: XOR<UserCreateWithoutChat1Input, UserUncheckedCreateWithoutChat1Input>
    connectOrCreate?: UserCreateOrConnectWithoutChat1Input
    upsert?: UserUpsertWithoutChat1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChat1Input, UserUpdateWithoutChat1Input>, UserUncheckedUpdateWithoutChat1Input>
  }

  export type UserUpdateOneRequiredWithoutChat2NestedInput = {
    create?: XOR<UserCreateWithoutChat2Input, UserUncheckedCreateWithoutChat2Input>
    connectOrCreate?: UserCreateOrConnectWithoutChat2Input
    upsert?: UserUpsertWithoutChat2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChat2Input, UserUpdateWithoutChat2Input>, UserUncheckedUpdateWithoutChat2Input>
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutMessageInput = {
    create?: XOR<ChatCreateWithoutMessageInput, ChatUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessageInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFromInput = {
    create?: XOR<UserCreateWithoutFromInput, UserUncheckedCreateWithoutFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutFromInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutToInput = {
    create?: XOR<UserCreateWithoutToInput, UserUncheckedCreateWithoutToInput>
    connectOrCreate?: UserCreateOrConnectWithoutToInput
    connect?: UserWhereUniqueInput
  }

  export type ChatUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<ChatCreateWithoutMessageInput, ChatUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessageInput
    upsert?: ChatUpsertWithoutMessageInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessageInput, ChatUpdateWithoutMessageInput>, ChatUncheckedUpdateWithoutMessageInput>
  }

  export type UserUpdateOneRequiredWithoutFromNestedInput = {
    create?: XOR<UserCreateWithoutFromInput, UserUncheckedCreateWithoutFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutFromInput
    upsert?: UserUpsertWithoutFromInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFromInput, UserUpdateWithoutFromInput>, UserUncheckedUpdateWithoutFromInput>
  }

  export type UserUpdateOneRequiredWithoutToNestedInput = {
    create?: XOR<UserCreateWithoutToInput, UserUncheckedCreateWithoutToInput>
    connectOrCreate?: UserCreateOrConnectWithoutToInput
    upsert?: UserUpsertWithoutToInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutToInput, UserUpdateWithoutToInput>, UserUncheckedUpdateWithoutToInput>
  }

  export type educationalBackgroundCreateNestedManyWithoutLawyerInput = {
    create?: XOR<educationalBackgroundCreateWithoutLawyerInput, educationalBackgroundUncheckedCreateWithoutLawyerInput> | educationalBackgroundCreateWithoutLawyerInput[] | educationalBackgroundUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: educationalBackgroundCreateOrConnectWithoutLawyerInput | educationalBackgroundCreateOrConnectWithoutLawyerInput[]
    createMany?: educationalBackgroundCreateManyLawyerInputEnvelope
    connect?: educationalBackgroundWhereUniqueInput | educationalBackgroundWhereUniqueInput[]
  }

  export type firmaHukumCreateNestedManyWithoutLawyerInput = {
    create?: XOR<firmaHukumCreateWithoutLawyerInput, firmaHukumUncheckedCreateWithoutLawyerInput> | firmaHukumCreateWithoutLawyerInput[] | firmaHukumUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: firmaHukumCreateOrConnectWithoutLawyerInput | firmaHukumCreateOrConnectWithoutLawyerInput[]
    createMany?: firmaHukumCreateManyLawyerInputEnvelope
    connect?: firmaHukumWhereUniqueInput | firmaHukumWhereUniqueInput[]
  }

  export type educationalBackgroundUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<educationalBackgroundCreateWithoutLawyerInput, educationalBackgroundUncheckedCreateWithoutLawyerInput> | educationalBackgroundCreateWithoutLawyerInput[] | educationalBackgroundUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: educationalBackgroundCreateOrConnectWithoutLawyerInput | educationalBackgroundCreateOrConnectWithoutLawyerInput[]
    createMany?: educationalBackgroundCreateManyLawyerInputEnvelope
    connect?: educationalBackgroundWhereUniqueInput | educationalBackgroundWhereUniqueInput[]
  }

  export type firmaHukumUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<firmaHukumCreateWithoutLawyerInput, firmaHukumUncheckedCreateWithoutLawyerInput> | firmaHukumCreateWithoutLawyerInput[] | firmaHukumUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: firmaHukumCreateOrConnectWithoutLawyerInput | firmaHukumCreateOrConnectWithoutLawyerInput[]
    createMany?: firmaHukumCreateManyLawyerInputEnvelope
    connect?: firmaHukumWhereUniqueInput | firmaHukumWhereUniqueInput[]
  }

  export type educationalBackgroundUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<educationalBackgroundCreateWithoutLawyerInput, educationalBackgroundUncheckedCreateWithoutLawyerInput> | educationalBackgroundCreateWithoutLawyerInput[] | educationalBackgroundUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: educationalBackgroundCreateOrConnectWithoutLawyerInput | educationalBackgroundCreateOrConnectWithoutLawyerInput[]
    upsert?: educationalBackgroundUpsertWithWhereUniqueWithoutLawyerInput | educationalBackgroundUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: educationalBackgroundCreateManyLawyerInputEnvelope
    set?: educationalBackgroundWhereUniqueInput | educationalBackgroundWhereUniqueInput[]
    disconnect?: educationalBackgroundWhereUniqueInput | educationalBackgroundWhereUniqueInput[]
    delete?: educationalBackgroundWhereUniqueInput | educationalBackgroundWhereUniqueInput[]
    connect?: educationalBackgroundWhereUniqueInput | educationalBackgroundWhereUniqueInput[]
    update?: educationalBackgroundUpdateWithWhereUniqueWithoutLawyerInput | educationalBackgroundUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: educationalBackgroundUpdateManyWithWhereWithoutLawyerInput | educationalBackgroundUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: educationalBackgroundScalarWhereInput | educationalBackgroundScalarWhereInput[]
  }

  export type firmaHukumUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<firmaHukumCreateWithoutLawyerInput, firmaHukumUncheckedCreateWithoutLawyerInput> | firmaHukumCreateWithoutLawyerInput[] | firmaHukumUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: firmaHukumCreateOrConnectWithoutLawyerInput | firmaHukumCreateOrConnectWithoutLawyerInput[]
    upsert?: firmaHukumUpsertWithWhereUniqueWithoutLawyerInput | firmaHukumUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: firmaHukumCreateManyLawyerInputEnvelope
    set?: firmaHukumWhereUniqueInput | firmaHukumWhereUniqueInput[]
    disconnect?: firmaHukumWhereUniqueInput | firmaHukumWhereUniqueInput[]
    delete?: firmaHukumWhereUniqueInput | firmaHukumWhereUniqueInput[]
    connect?: firmaHukumWhereUniqueInput | firmaHukumWhereUniqueInput[]
    update?: firmaHukumUpdateWithWhereUniqueWithoutLawyerInput | firmaHukumUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: firmaHukumUpdateManyWithWhereWithoutLawyerInput | firmaHukumUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: firmaHukumScalarWhereInput | firmaHukumScalarWhereInput[]
  }

  export type educationalBackgroundUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<educationalBackgroundCreateWithoutLawyerInput, educationalBackgroundUncheckedCreateWithoutLawyerInput> | educationalBackgroundCreateWithoutLawyerInput[] | educationalBackgroundUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: educationalBackgroundCreateOrConnectWithoutLawyerInput | educationalBackgroundCreateOrConnectWithoutLawyerInput[]
    upsert?: educationalBackgroundUpsertWithWhereUniqueWithoutLawyerInput | educationalBackgroundUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: educationalBackgroundCreateManyLawyerInputEnvelope
    set?: educationalBackgroundWhereUniqueInput | educationalBackgroundWhereUniqueInput[]
    disconnect?: educationalBackgroundWhereUniqueInput | educationalBackgroundWhereUniqueInput[]
    delete?: educationalBackgroundWhereUniqueInput | educationalBackgroundWhereUniqueInput[]
    connect?: educationalBackgroundWhereUniqueInput | educationalBackgroundWhereUniqueInput[]
    update?: educationalBackgroundUpdateWithWhereUniqueWithoutLawyerInput | educationalBackgroundUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: educationalBackgroundUpdateManyWithWhereWithoutLawyerInput | educationalBackgroundUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: educationalBackgroundScalarWhereInput | educationalBackgroundScalarWhereInput[]
  }

  export type firmaHukumUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<firmaHukumCreateWithoutLawyerInput, firmaHukumUncheckedCreateWithoutLawyerInput> | firmaHukumCreateWithoutLawyerInput[] | firmaHukumUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: firmaHukumCreateOrConnectWithoutLawyerInput | firmaHukumCreateOrConnectWithoutLawyerInput[]
    upsert?: firmaHukumUpsertWithWhereUniqueWithoutLawyerInput | firmaHukumUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: firmaHukumCreateManyLawyerInputEnvelope
    set?: firmaHukumWhereUniqueInput | firmaHukumWhereUniqueInput[]
    disconnect?: firmaHukumWhereUniqueInput | firmaHukumWhereUniqueInput[]
    delete?: firmaHukumWhereUniqueInput | firmaHukumWhereUniqueInput[]
    connect?: firmaHukumWhereUniqueInput | firmaHukumWhereUniqueInput[]
    update?: firmaHukumUpdateWithWhereUniqueWithoutLawyerInput | firmaHukumUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: firmaHukumUpdateManyWithWhereWithoutLawyerInput | firmaHukumUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: firmaHukumScalarWhereInput | firmaHukumScalarWhereInput[]
  }

  export type LawyerCreateNestedOneWithoutEducationalBackgroundInput = {
    create?: XOR<LawyerCreateWithoutEducationalBackgroundInput, LawyerUncheckedCreateWithoutEducationalBackgroundInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutEducationalBackgroundInput
    connect?: LawyerWhereUniqueInput
  }

  export type LawyerUpdateOneRequiredWithoutEducationalBackgroundNestedInput = {
    create?: XOR<LawyerCreateWithoutEducationalBackgroundInput, LawyerUncheckedCreateWithoutEducationalBackgroundInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutEducationalBackgroundInput
    upsert?: LawyerUpsertWithoutEducationalBackgroundInput
    connect?: LawyerWhereUniqueInput
    update?: XOR<XOR<LawyerUpdateToOneWithWhereWithoutEducationalBackgroundInput, LawyerUpdateWithoutEducationalBackgroundInput>, LawyerUncheckedUpdateWithoutEducationalBackgroundInput>
  }

  export type LawyerCreateNestedOneWithoutFirmaHukumInput = {
    create?: XOR<LawyerCreateWithoutFirmaHukumInput, LawyerUncheckedCreateWithoutFirmaHukumInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutFirmaHukumInput
    connect?: LawyerWhereUniqueInput
  }

  export type LawyerUpdateOneRequiredWithoutFirmaHukumNestedInput = {
    create?: XOR<LawyerCreateWithoutFirmaHukumInput, LawyerUncheckedCreateWithoutFirmaHukumInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutFirmaHukumInput
    upsert?: LawyerUpsertWithoutFirmaHukumInput
    connect?: LawyerWhereUniqueInput
    update?: XOR<XOR<LawyerUpdateToOneWithWhereWithoutFirmaHukumInput, LawyerUpdateWithoutFirmaHukumInput>, LawyerUncheckedUpdateWithoutFirmaHukumInput>
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

  export type LawBabCreateWithoutLawInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    LawData?: LawDataCreateNestedManyWithoutLawBabInput
  }

  export type LawBabUncheckedCreateWithoutLawInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    LawData?: LawDataUncheckedCreateNestedManyWithoutLawBabInput
  }

  export type LawBabCreateOrConnectWithoutLawInput = {
    where: LawBabWhereUniqueInput
    create: XOR<LawBabCreateWithoutLawInput, LawBabUncheckedCreateWithoutLawInput>
  }

  export type LawBabCreateManyLawInputEnvelope = {
    data: LawBabCreateManyLawInput | LawBabCreateManyLawInput[]
    skipDuplicates?: boolean
  }

  export type LawBabUpsertWithWhereUniqueWithoutLawInput = {
    where: LawBabWhereUniqueInput
    update: XOR<LawBabUpdateWithoutLawInput, LawBabUncheckedUpdateWithoutLawInput>
    create: XOR<LawBabCreateWithoutLawInput, LawBabUncheckedCreateWithoutLawInput>
  }

  export type LawBabUpdateWithWhereUniqueWithoutLawInput = {
    where: LawBabWhereUniqueInput
    data: XOR<LawBabUpdateWithoutLawInput, LawBabUncheckedUpdateWithoutLawInput>
  }

  export type LawBabUpdateManyWithWhereWithoutLawInput = {
    where: LawBabScalarWhereInput
    data: XOR<LawBabUpdateManyMutationInput, LawBabUncheckedUpdateManyWithoutLawInput>
  }

  export type LawBabScalarWhereInput = {
    AND?: LawBabScalarWhereInput | LawBabScalarWhereInput[]
    OR?: LawBabScalarWhereInput[]
    NOT?: LawBabScalarWhereInput | LawBabScalarWhereInput[]
    id?: IntFilter<"LawBab"> | number
    name?: StringFilter<"LawBab"> | string
    description?: StringNullableFilter<"LawBab"> | string | null
    createdAt?: DateTimeFilter<"LawBab"> | Date | string
    updatedAt?: DateTimeFilter<"LawBab"> | Date | string
    lawId?: IntFilter<"LawBab"> | number
  }

  export type LawCreateWithoutLawBabInput = {
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawUncheckedCreateWithoutLawBabInput = {
    id?: number
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawCreateOrConnectWithoutLawBabInput = {
    where: LawWhereUniqueInput
    create: XOR<LawCreateWithoutLawBabInput, LawUncheckedCreateWithoutLawBabInput>
  }

  export type LawDataCreateWithoutLawBabInput = {
    pasal: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawDataUncheckedCreateWithoutLawBabInput = {
    id?: number
    pasal: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawDataCreateOrConnectWithoutLawBabInput = {
    where: LawDataWhereUniqueInput
    create: XOR<LawDataCreateWithoutLawBabInput, LawDataUncheckedCreateWithoutLawBabInput>
  }

  export type LawDataCreateManyLawBabInputEnvelope = {
    data: LawDataCreateManyLawBabInput | LawDataCreateManyLawBabInput[]
    skipDuplicates?: boolean
  }

  export type LawUpsertWithoutLawBabInput = {
    update: XOR<LawUpdateWithoutLawBabInput, LawUncheckedUpdateWithoutLawBabInput>
    create: XOR<LawCreateWithoutLawBabInput, LawUncheckedCreateWithoutLawBabInput>
    where?: LawWhereInput
  }

  export type LawUpdateToOneWithWhereWithoutLawBabInput = {
    where?: LawWhereInput
    data: XOR<LawUpdateWithoutLawBabInput, LawUncheckedUpdateWithoutLawBabInput>
  }

  export type LawUpdateWithoutLawBabInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawUncheckedUpdateWithoutLawBabInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawDataUpsertWithWhereUniqueWithoutLawBabInput = {
    where: LawDataWhereUniqueInput
    update: XOR<LawDataUpdateWithoutLawBabInput, LawDataUncheckedUpdateWithoutLawBabInput>
    create: XOR<LawDataCreateWithoutLawBabInput, LawDataUncheckedCreateWithoutLawBabInput>
  }

  export type LawDataUpdateWithWhereUniqueWithoutLawBabInput = {
    where: LawDataWhereUniqueInput
    data: XOR<LawDataUpdateWithoutLawBabInput, LawDataUncheckedUpdateWithoutLawBabInput>
  }

  export type LawDataUpdateManyWithWhereWithoutLawBabInput = {
    where: LawDataScalarWhereInput
    data: XOR<LawDataUpdateManyMutationInput, LawDataUncheckedUpdateManyWithoutLawBabInput>
  }

  export type LawDataScalarWhereInput = {
    AND?: LawDataScalarWhereInput | LawDataScalarWhereInput[]
    OR?: LawDataScalarWhereInput[]
    NOT?: LawDataScalarWhereInput | LawDataScalarWhereInput[]
    id?: IntFilter<"LawData"> | number
    pasal?: StringFilter<"LawData"> | string
    content?: StringFilter<"LawData"> | string
    createdAt?: DateTimeFilter<"LawData"> | Date | string
    updatedAt?: DateTimeFilter<"LawData"> | Date | string
    lawBabId?: IntFilter<"LawData"> | number
  }

  export type LawBabCreateWithoutLawDataInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    law: LawCreateNestedOneWithoutLawBabInput
  }

  export type LawBabUncheckedCreateWithoutLawDataInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lawId: number
  }

  export type LawBabCreateOrConnectWithoutLawDataInput = {
    where: LawBabWhereUniqueInput
    create: XOR<LawBabCreateWithoutLawDataInput, LawBabUncheckedCreateWithoutLawDataInput>
  }

  export type LawBabUpsertWithoutLawDataInput = {
    update: XOR<LawBabUpdateWithoutLawDataInput, LawBabUncheckedUpdateWithoutLawDataInput>
    create: XOR<LawBabCreateWithoutLawDataInput, LawBabUncheckedCreateWithoutLawDataInput>
    where?: LawBabWhereInput
  }

  export type LawBabUpdateToOneWithWhereWithoutLawDataInput = {
    where?: LawBabWhereInput
    data: XOR<LawBabUpdateWithoutLawDataInput, LawBabUncheckedUpdateWithoutLawDataInput>
  }

  export type LawBabUpdateWithoutLawDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    law?: LawUpdateOneRequiredWithoutLawBabNestedInput
  }

  export type LawBabUncheckedUpdateWithoutLawDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lawId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatCreateWithoutUser1Input = {
    user2: UserCreateNestedOneWithoutChat2Input
    Message?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUser1Input = {
    id?: number
    user2_id: number
    Message?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutUser1Input = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUser1Input, ChatUncheckedCreateWithoutUser1Input>
  }

  export type ChatCreateManyUser1InputEnvelope = {
    data: ChatCreateManyUser1Input | ChatCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutUser2Input = {
    user1: UserCreateNestedOneWithoutChat1Input
    Message?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUser2Input = {
    id?: number
    user1_id: number
    Message?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutUser2Input = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUser2Input, ChatUncheckedCreateWithoutUser2Input>
  }

  export type ChatCreateManyUser2InputEnvelope = {
    data: ChatCreateManyUser2Input | ChatCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutFromIdInput = {
    message: string
    time?: Date | string
    chat: ChatCreateNestedOneWithoutMessageInput
    toId: UserCreateNestedOneWithoutToInput
  }

  export type MessageUncheckedCreateWithoutFromIdInput = {
    id?: number
    chatId: number
    to: number
    message: string
    time?: Date | string
  }

  export type MessageCreateOrConnectWithoutFromIdInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutFromIdInput, MessageUncheckedCreateWithoutFromIdInput>
  }

  export type MessageCreateManyFromIdInputEnvelope = {
    data: MessageCreateManyFromIdInput | MessageCreateManyFromIdInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutToIdInput = {
    message: string
    time?: Date | string
    chat: ChatCreateNestedOneWithoutMessageInput
    fromId: UserCreateNestedOneWithoutFromInput
  }

  export type MessageUncheckedCreateWithoutToIdInput = {
    id?: number
    chatId: number
    from: number
    message: string
    time?: Date | string
  }

  export type MessageCreateOrConnectWithoutToIdInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutToIdInput, MessageUncheckedCreateWithoutToIdInput>
  }

  export type MessageCreateManyToIdInputEnvelope = {
    data: MessageCreateManyToIdInput | MessageCreateManyToIdInput[]
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithWhereUniqueWithoutUser1Input = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutUser1Input, ChatUncheckedUpdateWithoutUser1Input>
    create: XOR<ChatCreateWithoutUser1Input, ChatUncheckedCreateWithoutUser1Input>
  }

  export type ChatUpdateWithWhereUniqueWithoutUser1Input = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutUser1Input, ChatUncheckedUpdateWithoutUser1Input>
  }

  export type ChatUpdateManyWithWhereWithoutUser1Input = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutUser1Input>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: IntFilter<"Chat"> | number
    user1_id?: IntFilter<"Chat"> | number
    user2_id?: IntFilter<"Chat"> | number
  }

  export type ChatUpsertWithWhereUniqueWithoutUser2Input = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutUser2Input, ChatUncheckedUpdateWithoutUser2Input>
    create: XOR<ChatCreateWithoutUser2Input, ChatUncheckedCreateWithoutUser2Input>
  }

  export type ChatUpdateWithWhereUniqueWithoutUser2Input = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutUser2Input, ChatUncheckedUpdateWithoutUser2Input>
  }

  export type ChatUpdateManyWithWhereWithoutUser2Input = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutUser2Input>
  }

  export type MessageUpsertWithWhereUniqueWithoutFromIdInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutFromIdInput, MessageUncheckedUpdateWithoutFromIdInput>
    create: XOR<MessageCreateWithoutFromIdInput, MessageUncheckedCreateWithoutFromIdInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutFromIdInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutFromIdInput, MessageUncheckedUpdateWithoutFromIdInput>
  }

  export type MessageUpdateManyWithWhereWithoutFromIdInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutFromIdInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    chatId?: IntFilter<"Message"> | number
    from?: IntFilter<"Message"> | number
    to?: IntFilter<"Message"> | number
    message?: StringFilter<"Message"> | string
    time?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutToIdInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutToIdInput, MessageUncheckedUpdateWithoutToIdInput>
    create: XOR<MessageCreateWithoutToIdInput, MessageUncheckedCreateWithoutToIdInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutToIdInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutToIdInput, MessageUncheckedUpdateWithoutToIdInput>
  }

  export type MessageUpdateManyWithWhereWithoutToIdInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutToIdInput>
  }

  export type UserCreateWithoutChat1Input = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat2?: ChatCreateNestedManyWithoutUser2Input
    from?: MessageCreateNestedManyWithoutFromIdInput
    to?: MessageCreateNestedManyWithoutToIdInput
  }

  export type UserUncheckedCreateWithoutChat1Input = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat2?: ChatUncheckedCreateNestedManyWithoutUser2Input
    from?: MessageUncheckedCreateNestedManyWithoutFromIdInput
    to?: MessageUncheckedCreateNestedManyWithoutToIdInput
  }

  export type UserCreateOrConnectWithoutChat1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChat1Input, UserUncheckedCreateWithoutChat1Input>
  }

  export type UserCreateWithoutChat2Input = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat1?: ChatCreateNestedManyWithoutUser1Input
    from?: MessageCreateNestedManyWithoutFromIdInput
    to?: MessageCreateNestedManyWithoutToIdInput
  }

  export type UserUncheckedCreateWithoutChat2Input = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat1?: ChatUncheckedCreateNestedManyWithoutUser1Input
    from?: MessageUncheckedCreateNestedManyWithoutFromIdInput
    to?: MessageUncheckedCreateNestedManyWithoutToIdInput
  }

  export type UserCreateOrConnectWithoutChat2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChat2Input, UserUncheckedCreateWithoutChat2Input>
  }

  export type MessageCreateWithoutChatInput = {
    message: string
    time?: Date | string
    fromId: UserCreateNestedOneWithoutFromInput
    toId: UserCreateNestedOneWithoutToInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: number
    from: number
    to: number
    message: string
    time?: Date | string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChat1Input = {
    update: XOR<UserUpdateWithoutChat1Input, UserUncheckedUpdateWithoutChat1Input>
    create: XOR<UserCreateWithoutChat1Input, UserUncheckedCreateWithoutChat1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChat1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChat1Input, UserUncheckedUpdateWithoutChat1Input>
  }

  export type UserUpdateWithoutChat1Input = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat2?: ChatUpdateManyWithoutUser2NestedInput
    from?: MessageUpdateManyWithoutFromIdNestedInput
    to?: MessageUpdateManyWithoutToIdNestedInput
  }

  export type UserUncheckedUpdateWithoutChat1Input = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat2?: ChatUncheckedUpdateManyWithoutUser2NestedInput
    from?: MessageUncheckedUpdateManyWithoutFromIdNestedInput
    to?: MessageUncheckedUpdateManyWithoutToIdNestedInput
  }

  export type UserUpsertWithoutChat2Input = {
    update: XOR<UserUpdateWithoutChat2Input, UserUncheckedUpdateWithoutChat2Input>
    create: XOR<UserCreateWithoutChat2Input, UserUncheckedCreateWithoutChat2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChat2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChat2Input, UserUncheckedUpdateWithoutChat2Input>
  }

  export type UserUpdateWithoutChat2Input = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat1?: ChatUpdateManyWithoutUser1NestedInput
    from?: MessageUpdateManyWithoutFromIdNestedInput
    to?: MessageUpdateManyWithoutToIdNestedInput
  }

  export type UserUncheckedUpdateWithoutChat2Input = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat1?: ChatUncheckedUpdateManyWithoutUser1NestedInput
    from?: MessageUncheckedUpdateManyWithoutFromIdNestedInput
    to?: MessageUncheckedUpdateManyWithoutToIdNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatCreateWithoutMessageInput = {
    user1: UserCreateNestedOneWithoutChat1Input
    user2: UserCreateNestedOneWithoutChat2Input
  }

  export type ChatUncheckedCreateWithoutMessageInput = {
    id?: number
    user1_id: number
    user2_id: number
  }

  export type ChatCreateOrConnectWithoutMessageInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessageInput, ChatUncheckedCreateWithoutMessageInput>
  }

  export type UserCreateWithoutFromInput = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat1?: ChatCreateNestedManyWithoutUser1Input
    chat2?: ChatCreateNestedManyWithoutUser2Input
    to?: MessageCreateNestedManyWithoutToIdInput
  }

  export type UserUncheckedCreateWithoutFromInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat1?: ChatUncheckedCreateNestedManyWithoutUser1Input
    chat2?: ChatUncheckedCreateNestedManyWithoutUser2Input
    to?: MessageUncheckedCreateNestedManyWithoutToIdInput
  }

  export type UserCreateOrConnectWithoutFromInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFromInput, UserUncheckedCreateWithoutFromInput>
  }

  export type UserCreateWithoutToInput = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat1?: ChatCreateNestedManyWithoutUser1Input
    chat2?: ChatCreateNestedManyWithoutUser2Input
    from?: MessageCreateNestedManyWithoutFromIdInput
  }

  export type UserUncheckedCreateWithoutToInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chat1?: ChatUncheckedCreateNestedManyWithoutUser1Input
    chat2?: ChatUncheckedCreateNestedManyWithoutUser2Input
    from?: MessageUncheckedCreateNestedManyWithoutFromIdInput
  }

  export type UserCreateOrConnectWithoutToInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutToInput, UserUncheckedCreateWithoutToInput>
  }

  export type ChatUpsertWithoutMessageInput = {
    update: XOR<ChatUpdateWithoutMessageInput, ChatUncheckedUpdateWithoutMessageInput>
    create: XOR<ChatCreateWithoutMessageInput, ChatUncheckedCreateWithoutMessageInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessageInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessageInput, ChatUncheckedUpdateWithoutMessageInput>
  }

  export type ChatUpdateWithoutMessageInput = {
    user1?: UserUpdateOneRequiredWithoutChat1NestedInput
    user2?: UserUpdateOneRequiredWithoutChat2NestedInput
  }

  export type ChatUncheckedUpdateWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1_id?: IntFieldUpdateOperationsInput | number
    user2_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutFromInput = {
    update: XOR<UserUpdateWithoutFromInput, UserUncheckedUpdateWithoutFromInput>
    create: XOR<UserCreateWithoutFromInput, UserUncheckedCreateWithoutFromInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFromInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFromInput, UserUncheckedUpdateWithoutFromInput>
  }

  export type UserUpdateWithoutFromInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat1?: ChatUpdateManyWithoutUser1NestedInput
    chat2?: ChatUpdateManyWithoutUser2NestedInput
    to?: MessageUpdateManyWithoutToIdNestedInput
  }

  export type UserUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat1?: ChatUncheckedUpdateManyWithoutUser1NestedInput
    chat2?: ChatUncheckedUpdateManyWithoutUser2NestedInput
    to?: MessageUncheckedUpdateManyWithoutToIdNestedInput
  }

  export type UserUpsertWithoutToInput = {
    update: XOR<UserUpdateWithoutToInput, UserUncheckedUpdateWithoutToInput>
    create: XOR<UserCreateWithoutToInput, UserUncheckedCreateWithoutToInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutToInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutToInput, UserUncheckedUpdateWithoutToInput>
  }

  export type UserUpdateWithoutToInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat1?: ChatUpdateManyWithoutUser1NestedInput
    chat2?: ChatUpdateManyWithoutUser2NestedInput
    from?: MessageUpdateManyWithoutFromIdNestedInput
  }

  export type UserUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat1?: ChatUncheckedUpdateManyWithoutUser1NestedInput
    chat2?: ChatUncheckedUpdateManyWithoutUser2NestedInput
    from?: MessageUncheckedUpdateManyWithoutFromIdNestedInput
  }

  export type educationalBackgroundCreateWithoutLawyerInput = {
    university: string
    major: string
  }

  export type educationalBackgroundUncheckedCreateWithoutLawyerInput = {
    id?: number
    university: string
    major: string
  }

  export type educationalBackgroundCreateOrConnectWithoutLawyerInput = {
    where: educationalBackgroundWhereUniqueInput
    create: XOR<educationalBackgroundCreateWithoutLawyerInput, educationalBackgroundUncheckedCreateWithoutLawyerInput>
  }

  export type educationalBackgroundCreateManyLawyerInputEnvelope = {
    data: educationalBackgroundCreateManyLawyerInput | educationalBackgroundCreateManyLawyerInput[]
    skipDuplicates?: boolean
  }

  export type firmaHukumCreateWithoutLawyerInput = {
    name: string
  }

  export type firmaHukumUncheckedCreateWithoutLawyerInput = {
    id?: number
    name: string
  }

  export type firmaHukumCreateOrConnectWithoutLawyerInput = {
    where: firmaHukumWhereUniqueInput
    create: XOR<firmaHukumCreateWithoutLawyerInput, firmaHukumUncheckedCreateWithoutLawyerInput>
  }

  export type firmaHukumCreateManyLawyerInputEnvelope = {
    data: firmaHukumCreateManyLawyerInput | firmaHukumCreateManyLawyerInput[]
    skipDuplicates?: boolean
  }

  export type educationalBackgroundUpsertWithWhereUniqueWithoutLawyerInput = {
    where: educationalBackgroundWhereUniqueInput
    update: XOR<educationalBackgroundUpdateWithoutLawyerInput, educationalBackgroundUncheckedUpdateWithoutLawyerInput>
    create: XOR<educationalBackgroundCreateWithoutLawyerInput, educationalBackgroundUncheckedCreateWithoutLawyerInput>
  }

  export type educationalBackgroundUpdateWithWhereUniqueWithoutLawyerInput = {
    where: educationalBackgroundWhereUniqueInput
    data: XOR<educationalBackgroundUpdateWithoutLawyerInput, educationalBackgroundUncheckedUpdateWithoutLawyerInput>
  }

  export type educationalBackgroundUpdateManyWithWhereWithoutLawyerInput = {
    where: educationalBackgroundScalarWhereInput
    data: XOR<educationalBackgroundUpdateManyMutationInput, educationalBackgroundUncheckedUpdateManyWithoutLawyerInput>
  }

  export type educationalBackgroundScalarWhereInput = {
    AND?: educationalBackgroundScalarWhereInput | educationalBackgroundScalarWhereInput[]
    OR?: educationalBackgroundScalarWhereInput[]
    NOT?: educationalBackgroundScalarWhereInput | educationalBackgroundScalarWhereInput[]
    id?: IntFilter<"educationalBackground"> | number
    lawyerId?: IntFilter<"educationalBackground"> | number
    university?: StringFilter<"educationalBackground"> | string
    major?: StringFilter<"educationalBackground"> | string
  }

  export type firmaHukumUpsertWithWhereUniqueWithoutLawyerInput = {
    where: firmaHukumWhereUniqueInput
    update: XOR<firmaHukumUpdateWithoutLawyerInput, firmaHukumUncheckedUpdateWithoutLawyerInput>
    create: XOR<firmaHukumCreateWithoutLawyerInput, firmaHukumUncheckedCreateWithoutLawyerInput>
  }

  export type firmaHukumUpdateWithWhereUniqueWithoutLawyerInput = {
    where: firmaHukumWhereUniqueInput
    data: XOR<firmaHukumUpdateWithoutLawyerInput, firmaHukumUncheckedUpdateWithoutLawyerInput>
  }

  export type firmaHukumUpdateManyWithWhereWithoutLawyerInput = {
    where: firmaHukumScalarWhereInput
    data: XOR<firmaHukumUpdateManyMutationInput, firmaHukumUncheckedUpdateManyWithoutLawyerInput>
  }

  export type firmaHukumScalarWhereInput = {
    AND?: firmaHukumScalarWhereInput | firmaHukumScalarWhereInput[]
    OR?: firmaHukumScalarWhereInput[]
    NOT?: firmaHukumScalarWhereInput | firmaHukumScalarWhereInput[]
    id?: IntFilter<"firmaHukum"> | number
    lawyerId?: IntFilter<"firmaHukum"> | number
    name?: StringFilter<"firmaHukum"> | string
  }

  export type LawyerCreateWithoutEducationalBackgroundInput = {
    name: string
    specialist: string
    rate: number
    nomorPerandi: string
    image: string
    fee: number
    firmaHukum?: firmaHukumCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUncheckedCreateWithoutEducationalBackgroundInput = {
    id?: number
    name: string
    specialist: string
    rate: number
    nomorPerandi: string
    image: string
    fee: number
    firmaHukum?: firmaHukumUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type LawyerCreateOrConnectWithoutEducationalBackgroundInput = {
    where: LawyerWhereUniqueInput
    create: XOR<LawyerCreateWithoutEducationalBackgroundInput, LawyerUncheckedCreateWithoutEducationalBackgroundInput>
  }

  export type LawyerUpsertWithoutEducationalBackgroundInput = {
    update: XOR<LawyerUpdateWithoutEducationalBackgroundInput, LawyerUncheckedUpdateWithoutEducationalBackgroundInput>
    create: XOR<LawyerCreateWithoutEducationalBackgroundInput, LawyerUncheckedCreateWithoutEducationalBackgroundInput>
    where?: LawyerWhereInput
  }

  export type LawyerUpdateToOneWithWhereWithoutEducationalBackgroundInput = {
    where?: LawyerWhereInput
    data: XOR<LawyerUpdateWithoutEducationalBackgroundInput, LawyerUncheckedUpdateWithoutEducationalBackgroundInput>
  }

  export type LawyerUpdateWithoutEducationalBackgroundInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    nomorPerandi?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    firmaHukum?: firmaHukumUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerUncheckedUpdateWithoutEducationalBackgroundInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    nomorPerandi?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    firmaHukum?: firmaHukumUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerCreateWithoutFirmaHukumInput = {
    name: string
    specialist: string
    rate: number
    nomorPerandi: string
    image: string
    fee: number
    educationalBackground?: educationalBackgroundCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUncheckedCreateWithoutFirmaHukumInput = {
    id?: number
    name: string
    specialist: string
    rate: number
    nomorPerandi: string
    image: string
    fee: number
    educationalBackground?: educationalBackgroundUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type LawyerCreateOrConnectWithoutFirmaHukumInput = {
    where: LawyerWhereUniqueInput
    create: XOR<LawyerCreateWithoutFirmaHukumInput, LawyerUncheckedCreateWithoutFirmaHukumInput>
  }

  export type LawyerUpsertWithoutFirmaHukumInput = {
    update: XOR<LawyerUpdateWithoutFirmaHukumInput, LawyerUncheckedUpdateWithoutFirmaHukumInput>
    create: XOR<LawyerCreateWithoutFirmaHukumInput, LawyerUncheckedCreateWithoutFirmaHukumInput>
    where?: LawyerWhereInput
  }

  export type LawyerUpdateToOneWithWhereWithoutFirmaHukumInput = {
    where?: LawyerWhereInput
    data: XOR<LawyerUpdateWithoutFirmaHukumInput, LawyerUncheckedUpdateWithoutFirmaHukumInput>
  }

  export type LawyerUpdateWithoutFirmaHukumInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    nomorPerandi?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    educationalBackground?: educationalBackgroundUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerUncheckedUpdateWithoutFirmaHukumInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    specialist?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    nomorPerandi?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    educationalBackground?: educationalBackgroundUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type LawBabCreateManyLawInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawBabUpdateWithoutLawInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LawData?: LawDataUpdateManyWithoutLawBabNestedInput
  }

  export type LawBabUncheckedUpdateWithoutLawInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LawData?: LawDataUncheckedUpdateManyWithoutLawBabNestedInput
  }

  export type LawBabUncheckedUpdateManyWithoutLawInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawDataCreateManyLawBabInput = {
    id?: number
    pasal: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawDataUpdateWithoutLawBabInput = {
    pasal?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawDataUncheckedUpdateWithoutLawBabInput = {
    id?: IntFieldUpdateOperationsInput | number
    pasal?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawDataUncheckedUpdateManyWithoutLawBabInput = {
    id?: IntFieldUpdateOperationsInput | number
    pasal?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateManyUser1Input = {
    id?: number
    user2_id: number
  }

  export type ChatCreateManyUser2Input = {
    id?: number
    user1_id: number
  }

  export type MessageCreateManyFromIdInput = {
    id?: number
    chatId: number
    to: number
    message: string
    time?: Date | string
  }

  export type MessageCreateManyToIdInput = {
    id?: number
    chatId: number
    from: number
    message: string
    time?: Date | string
  }

  export type ChatUpdateWithoutUser1Input = {
    user2?: UserUpdateOneRequiredWithoutChat2NestedInput
    Message?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUser1Input = {
    id?: IntFieldUpdateOperationsInput | number
    user2_id?: IntFieldUpdateOperationsInput | number
    Message?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutUser1Input = {
    id?: IntFieldUpdateOperationsInput | number
    user2_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChatUpdateWithoutUser2Input = {
    user1?: UserUpdateOneRequiredWithoutChat1NestedInput
    Message?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUser2Input = {
    id?: IntFieldUpdateOperationsInput | number
    user1_id?: IntFieldUpdateOperationsInput | number
    Message?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutUser2Input = {
    id?: IntFieldUpdateOperationsInput | number
    user1_id?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutFromIdInput = {
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessageNestedInput
    toId?: UserUpdateOneRequiredWithoutToNestedInput
  }

  export type MessageUncheckedUpdateWithoutFromIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutFromIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutToIdInput = {
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessageNestedInput
    fromId?: UserUpdateOneRequiredWithoutFromNestedInput
  }

  export type MessageUncheckedUpdateWithoutToIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutToIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: number
    from: number
    to: number
    message: string
    time?: Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    fromId?: UserUpdateOneRequiredWithoutFromNestedInput
    toId?: UserUpdateOneRequiredWithoutToNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type educationalBackgroundCreateManyLawyerInput = {
    id?: number
    university: string
    major: string
  }

  export type firmaHukumCreateManyLawyerInput = {
    id?: number
    name: string
  }

  export type educationalBackgroundUpdateWithoutLawyerInput = {
    university?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
  }

  export type educationalBackgroundUncheckedUpdateWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    university?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
  }

  export type educationalBackgroundUncheckedUpdateManyWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    university?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
  }

  export type firmaHukumUpdateWithoutLawyerInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type firmaHukumUncheckedUpdateWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type firmaHukumUncheckedUpdateManyWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LawCountOutputTypeDefaultArgs instead
     */
    export type LawCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LawCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LawBabCountOutputTypeDefaultArgs instead
     */
    export type LawBabCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LawBabCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatCountOutputTypeDefaultArgs instead
     */
    export type ChatCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LawyerCountOutputTypeDefaultArgs instead
     */
    export type LawyerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LawyerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LawDefaultArgs instead
     */
    export type LawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LawDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LawBabDefaultArgs instead
     */
    export type LawBabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LawBabDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LawDataDefaultArgs instead
     */
    export type LawDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LawDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatDefaultArgs instead
     */
    export type ChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LawyerDefaultArgs instead
     */
    export type LawyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LawyerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use educationalBackgroundDefaultArgs instead
     */
    export type educationalBackgroundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = educationalBackgroundDefaultArgs<ExtArgs>
    /**
     * @deprecated Use firmaHukumDefaultArgs instead
     */
    export type firmaHukumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = firmaHukumDefaultArgs<ExtArgs>

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