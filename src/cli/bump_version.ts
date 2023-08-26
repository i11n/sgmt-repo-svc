/**
 * This file contains the bump version cli task.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { bumpVersionTask, parseArgs } from '../mod.ts';

/** This function is the entry point for the bump version cli task. */
function bumpVersionCliTask(args: string[]): void {
  const { testing, logLevel } = parseArgs(args);

  bumpVersionTask(testing, logLevel);
}

bumpVersionCliTask(Deno.args);
