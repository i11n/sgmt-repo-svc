/**
 * This file contains the initialize repo cli task.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { initRepoTask, parseArgs } from '../mod.ts';

/** This function is the entry point for the initialize repo cli task. */
function initRepoCliTask(args: string[]): void {
  const { testing, logLevel } = parseArgs(args);

  initRepoTask(testing, logLevel);
}

initRepoCliTask(Deno.args);
