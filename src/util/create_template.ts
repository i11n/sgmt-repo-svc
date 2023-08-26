/**
 * This file exports the createTemplate function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import type { Props, TemplateCallback } from '../types/mod.ts';

/** Access a property on an object using a string path. */
// deno-lint-ignore no-explicit-any
function access(obj: any, path: string): string {
  return path.split('.').reduce((result, key) => result[key], obj);
}

/** Create a template from a string template literal. */
export function createTemplate<P extends string, T extends Props>(
  strings: TemplateStringsArray,
  ...refs: (P | TemplateCallback<T>)[]
): TemplateCallback<T> {
  const cleanedStrings = [...strings.raw.values()];
  return (props: T) =>
    refs.reduce((result, ref) => {
      const resolved = typeof ref === 'function'
        ? ref(props)
        : access(props, ref);
      const nextString = cleanedStrings.shift();

      return `${String(result)}${resolved}${nextString}`;
    }, cleanedStrings.shift() || '');
}
