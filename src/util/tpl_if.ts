/**
 * This file exports the tplIf function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import type {
  Props,
  TemplateCallback,
  TemplateConditionCallback,
} from '../types/mod.ts';

/** Process a template conditionally. */
export function tplIf<T extends Props>(
  condition: TemplateConditionCallback<T>,
  trueCallback: TemplateCallback<T>,
  falseCallback?: TemplateCallback<T>,
): TemplateCallback<T> {
  return (props: T) => {
    const resolved = condition(props);
    return resolved
      ? trueCallback(props)
      : falseCallback
      ? falseCallback(props)
      : '';
  };
}
