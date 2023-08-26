/**
 * This file exports the template for creating a src/types/mod.ts file.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { createTemplate } from '../util/create_template.ts';

import type { PackageProps, PackagePropsPath } from '../types/mod.ts';

export const srcTypesModTs = createTemplate<PackagePropsPath, PackageProps>`/**
 * This file exports types used by the ${'pkg.name'} package and its peer and dependant packages.
 * 
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export { } from "./enums.ts";

export type { } from "./interfaces.ts";

export type { } from "./types.ts";
`;
