/**
 * This file exports the parseArgs function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { parse } from '../../deps.ts';

/** Parse command line arguments. */
export function parseArgs(
  args: string[],
): { testing: boolean; logLevel: number } {
  const options = parse(args);
  const level = options['log-level'] === undefined
    ? options.l === undefined ? '3' : options.l
    : options['log-level'];
  const testing = !!options.testing || options.t || false;
  const parsedLevel = parseInt(level, 10);
  const logLevel = isNaN(parsedLevel) ? 3 : parsedLevel;

  return { testing, logLevel };
}
