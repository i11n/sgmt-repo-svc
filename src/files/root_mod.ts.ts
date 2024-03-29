/**
 * This file exports the template for creating a mod.ts file.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { createTemplate } from '../util/create_template.ts';

import type { PackageProps, PackagePropsPath } from '../types/mod.ts';

export const rootModTs = createTemplate<PackagePropsPath, PackageProps>`/**
 * This file re-exports the source-level, or public API, features of the ${'pkg.name'} package.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export * from './src/mod.ts';
`;
