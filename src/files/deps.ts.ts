/**
 * This file exports the template for creating a deps.ts file.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { createTemplate } from '../util/create_template.ts';

import type { PackageProps, PackagePropsPath } from '../types/mod.ts';

export const depsTs = createTemplate<PackagePropsPath, PackageProps>`/**
 * This file re-exports external dependencies used by the ${'pkg.name'} package.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */
`;
