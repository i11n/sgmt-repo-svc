/**
 * This file exports the template for creating a src/version.ts file.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { createTemplate } from '../util/create_template.ts';

import type { PackageProps, PackagePropsPath } from '../types/mod.ts';

export const srcVersionTs = createTemplate<PackagePropsPath, PackageProps>`/**
 * This file exports the current release version of the ${'pkg.name'} package.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/**
 * The current release version of the ${'pkg.name'} package.
 */
export const VERSION = "${'pkg.version'}";
`;
