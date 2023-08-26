/**
 * This file exports the template for creating a deno.jsonc file.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { createTemplate } from '../util/create_template.ts';

import type { PackageProps, PackagePropsPath } from '../types/mod.ts';

export const denoJsonc = createTemplate<PackagePropsPath, PackageProps>`{
	"name": "${'pkg.name'}",
  "description": "${'pkg.description'}",
  "version": "${'pkg.version'}",
  "author": "integereleven",
  "license": "MIT",
  "status": "${'pkg.status'}",
  "lint": {
    "rules": {
      "tags": ["recommended"],
      "include": [
        "ban-untagged-todo",
        "camelcase",
        "default-param-last",
        "eqeqeq",
        "explicit-function-return-type",
        "explicit-module-boundary-types",
        "no-throw-literal"
      ]
    }
  },
  "include": ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.json"],
  "exclude": ["**/vendor/**", "**/build/**"],
  "fmt": {
    "indentWidth": 2,
    "lineWidth": 80,
    "proseWrap": "preserve",
    "useTabs": false,
    "singleQuote": true,
    "semiColons": true
  },
  "tasks": {
		"bump-version": "deno run -A https://denopkg.com/i11n/sgmt-repo-svc/cli/bump_version.ts",
		"add-exception": "deno run -A https://denopkg.com/i11n/sgmt-repo-svc/cli/add_exception.ts",
		"add-feature": "deno run -A https://denopkg.com/i11n/sgmt-repo-svc/cli/add_feature.ts",
    "commit": "deno run -A https://denopkg.com/i11n/sgmt-repo-svc/cli/commit.ts",
    "pre-commit": "deno fmt && deno lint && deno test && deno doc ./mod.ts --json > _doc.json",
    "cache": "deno cache --reload --lock=deno.lock --lock-write deps.ts"
  }
}
`;
