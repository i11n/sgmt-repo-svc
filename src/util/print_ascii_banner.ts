/**
 * This file exports the printAsciiBanner function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { colors } from '../../deps.ts';

/** The gradient stops for the partic11e banner. */
const gradients = [
  0xDE492E,
  0xCD4B3C,
  0xBC4D4B,
  0xAB505A,
  0x9B5269,
  0x8A5477,
  0x795786,
  0x685995,
  0x585CA4,
];

/** Returns the unformatted partic11e banner with a tool `name`. */
function createAsciiBanner(name: string): string {
  return `
  ▄████████    ▄██████▄    ▄▄▄▄███▄▄▄▄       ███     
  ███    ███   ███    ███ ▄██▀▀▀███▀▀▀██▄ ▀█████████▄ 
  ███    █▀    ███    █▀  ███   ███   ███    ▀███▀▀██ 
  ███         ▄███        ███   ███   ███     ███   ▀ 
▀███████████ ▀▀███ ████▄  ███   ███   ███     ███     
         ███   ███    ███ ███   ███   ███     ███     
   ▄█    ███   ███    ███ ███   ███   ███     ███     integereleven
 ▄████████▀    ████████▀   ▀█   ███   █▀     ▄████▀   sgmt ${name}`;
}

/** Prints a formatted partic11e banner with a tool `name`. */
export function printAsciiBanner(name: string): void {
  const lines = createAsciiBanner(name).split('\n').map((line, i) => {
    const gradient = gradients[i];
    return colors.rgb24(line, gradient);
  });

  console.log(lines.join('\n'));
}
