/**
 * This file exports type aliases used by the sgmt-repo-svc package and its peer and dependant packages.
 *
 * For interfaces, see ./interfaces.ts
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/** A callback returning a string interpolated with the provided properties, `props`. */
export type TemplateCallback<T extends Props> = (props: T) => string;

/** A callback returning a boolean value using the provided properties, `props`. */
export type TemplateConditionCallback<T extends Props> = (props: T) => boolean;

type StringPath<T> = T extends string ? [] : {
  [K in Extract<keyof T, string>]: [K, ...StringPath<T[K]>];
}[Extract<keyof T, string>];

type JoinPath<T extends string[], D extends string> = T extends [] ? never
  : T extends [infer F] ? F
  : T extends [infer F, ...infer R]
    ? F extends string ? `${F}${D}${JoinPath<Extract<R, string[]>, D>}`
    : never
  : string;

/** Generic properties object. */
export type Props = {
  // deno-lint-ignore no-explicit-any
  [key: string]: any;
};

/** Date and year metadata. */
type MetaProps = {
  meta: {
    year: string;
    date: string;
  };
};

/** Package properties and metadata. */
export type PackageProps = MetaProps & {
  pkg: {
    name: string;
    description: string;
    version: string;
    status: string;
  };
};

/** The available paths for a package's properties. */
export type PackagePropsPath = JoinPath<StringPath<PackageProps>, '.'>;

/** Feature properties. */
export type FeatureProps = PackageProps & {
  feature: {
    name: string;
    type: string;
    description: string;
  };
};

/** The available paths for a feature's properties. */
export type FeaturePropsPath = JoinPath<StringPath<FeatureProps>, '.'>;

export type ExceptionProps = FeatureProps & {
  exception: {
    message: string;
    code: string;
  };
};

/** The available paths for an exception's properties. */
export type ExceptionPropsPath = JoinPath<StringPath<ExceptionProps>, '.'>;
