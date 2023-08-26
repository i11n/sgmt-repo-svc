/**
 * This file exports the template for creating a src/_internals/constants.ts file.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { createTemplate } from '../util/create_template.ts';

import type { PackageProps, PackagePropsPath } from '../types/mod.ts';

export const srcInternalsConstantsTs = createTemplate<
  PackagePropsPath,
  PackageProps
>`/**
 * This file exports internal constants used by the ${'pkg.name'} package. Constants exported here should not be exposed to the public API.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */
`;
