/**
 * This file exports the createFilename function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

const camelRegex = /([a-z])([A-Z]+)/g;
const endRegex = /([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/g;
const wordRegex = /([A-Z]+)([A-Z][a-z])/g;

const splitCaps = function (str: string): string {
  return str
    .replace(camelRegex, (_m, s1, s2) => `${s1} ${s2}`)
    .replace(endRegex, (_m, s1, s2, s3) => `${s1}${s2.toLowerCase()}${s3}`)
    .replace(wordRegex, (_m, s1, s2) => `${s1.toLowerCase()} ${s2}`);
};

/** Create a filename from a string, `name`. */
export function createFilename(name: string): string {
  return splitCaps(name)
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join('_');
}
