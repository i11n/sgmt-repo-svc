/**
 * This file exports the template for creating a README.md file.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { createTemplate } from '../util/create_template.ts';

import type { PackageProps, PackagePropsPath } from '../types/mod.ts';

export const readme = createTemplate<
  PackagePropsPath,
  PackageProps
>`<p align="center">
<!-- Update log -->
<img alt="sgmt logo" height="70" src="https://raw.githubusercontent.com/i11n/.github/main/profile/img/sgmt-logotype.svg" />
<strong>${'pkg.name'}</strong>
</p>

<p align="center">
sgmt is a collection of easy-to-use utility and feature libraries for creating anything you want with the <a href="https://deno.land">Deno</a> runtime.
</p>

<h1 align="center">sgmt - ${'pkg.name'}</h1>

<p align="center">
${'pkg.description'}
</p>

<p align="center">
<!-- @TODO Link to documentation and other resources -->
</p>

<p align="center">
<sub>Built with ❤ by integereleven and <a href="https://github.com/i11n/${'pkg.name'}/graphs/contributors">contributors</a></sub>
</p>

<p align="center">
<a href="https://github.com/i11n/${'pkg.name'}/blob/main/CODE_OF_CONDUCT.md">
  <img alt="Contributor Covenant" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=flat-square" />
</a>
<a href="https://github.com/i11n/${'pkg.name'}/commits">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/i11n/${'pkg.name'}?style=flat-square">
</a>
<a href="https://github.com/i11n/${'pkg.name'}/releases">
  <img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/i11n/${'pkg.name'}?style=flat-square" />
</a>
<a href="https://github.com/i11n/${'pkg.name'}/issues">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/i11n/${'pkg.name'}?style=flat-square">
</a>
</p>

## Table of contents

- [Features](#features)
- [Installation](#installation)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

[(to top)](#table-of-contents)

<!-- @TODO Enumerate key features -->

## Installation

[(to top)](#table-of-contents)

To install, you simply need to re-export the library features with your &grave;./deps.ts&grave; file.

&grave;&grave;&grave;ts
// ./deps.ts
export * from 'https://denopkg.com/i11n/${'pkg.name'}/mod.ts';
//  or specific features
&grave;&grave;&grave;

and then import them from your &grave;./deps.ts&grave; file into the files they are needed.

&grave;&grave;&grave;ts
// ./src/app.ts
import { VERSION } from '../deps.ts';
//  or other features
&grave;&grave;&grave;

You can specify a specific branch or release to re-export:

**Export from a specific branch**

&grave;&grave;&grave;ts
export * from 'https://denopkg.com/i11n/${'pkg.name'}@dev-fix-06145/mod.ts';
&grave;&grave;&grave;

**Export from a specific release**

&grave;&grave;&grave;ts
export * from 'https://denopkg.com/i11n/${'pkg.name'}@0.1.0-alpha/mod.ts';
&grave;&grave;&grave;

**Export the latest release**

&grave;&grave;&grave;ts
export * from 'https://denopkg.com/i11n/${'pkg.name'}@latest/mod.ts';
&grave;&grave;&grave;

> **Note:** If no branch or tag is specified in the re-export, then it will pull from the main branch, which we only merge into when preparing a release.\
> Check out the [branches][branches] and [releases][releases] see what's available.

## Examples

[(to top)](#table-of-contents)

<!-- @TODO Add an example, or add links to examples -->

&grave;&grave;&grave;ts
&grave;&grave;&grave;

## Contributing

[(to top)](#table-of-contents)

Contributions are welcome! Take a look at our [contributing guidelines][contributing] to get started.

## License

[(to top)](#table-of-contents)

The MIT License (MIT) 2022 integereleven. Refer to [LICENSE][license] for details.

<p align="center">
<img
  alt="sgmt logo"
  height="24"
  src="https://raw.githubusercontent.com/i11n/.github/main/profile/img/sgmt-logotype.svg"
/>
<sub>open source</sub>
</p>

[deno]: https://deno.land "Deno homepage"
[branches]: https://github.com/i11n/${'pkg.name'}/branches "i11n/${'pkg.name'} branches on GitHub"
[releases]: https://github.com/i11n/${'pkg.name'}/releases "i11n/${'pkg.name'} releases on GitHub"
[contributing]: https://github.com/i11n/${'pkg.name'}/blob/main/CONTRIBUTING.md "i11n/${'pkg.name'} contributing guidelines"
[license]: https://github.com/i11n/${'pkg.name'}/blob/main/LICENSE "i11n/${'pkg.name'} license"
`;
