/**
 * This file exports the template for creating a dev_deps.ts file.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { createTemplate } from '../util/create_template.ts';

import type { PackageProps, PackagePropsPath } from '../types/mod.ts';

export const devDepsTs = createTemplate<PackagePropsPath, PackageProps>`/**
 * This file re-exports external development dependencies used by the ${'pkg.name'} package.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export { assert, unimplemented } from 'https://deno.land/std@0.199.0/assert/mod.ts';
export { describe, it } from 'https://deno.land/std@0.199.0/testing/bdd.ts';
`;
