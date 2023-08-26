/**
 * This file exports the template for creating a src/constants.ts file.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { createTemplate } from '../util/create_template.ts';

import type { PackageProps, PackagePropsPath } from '../types/mod.ts';

export const srcConstants = createTemplate<PackagePropsPath, PackageProps>`/**
 * This file exports constants used by the ${'pkg.name'} package and its peer and dependant packages.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */
`;
