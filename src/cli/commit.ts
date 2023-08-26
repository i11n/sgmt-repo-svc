/**
 * This file contains the commit cli task.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { commitTask, parseArgs } from '../mod.ts';

/** This function is the entry point for the commit cli task. */
function commitCliTask(args: string[]): void {
  const { testing, logLevel } = parseArgs(args);

  commitTask(testing, logLevel);
}

commitCliTask(Deno.args);
