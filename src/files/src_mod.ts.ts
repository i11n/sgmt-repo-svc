/**
 * This file exports the template for creating a src/mod.ts file.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { createTemplate } from '../util/create_template.ts';

import type { PackageProps, PackagePropsPath } from '../types/mod.ts';

export const srcModTs = createTemplate<PackagePropsPath, PackageProps>`/**
 * This file exports the public API features of the ${'pkg.name'} package.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

export * from "./exceptions/mod.ts";
export * from "./types/mod.ts";

export { } from "./constants.ts";

export { VERSION } from "./version.ts";
`;
