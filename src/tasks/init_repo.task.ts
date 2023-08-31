/**
 * This file exports exports the init_repo cli task.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { exists } from '../../deps.ts';

import { getRepoDetails } from '../_internals/get_repo_details.ts';
import { readDenoConfig, writeDenoConfig } from '../_internals/deno_config.ts';

import { Cli, requestPermissions } from '../util/mod.ts';

import {
  contributing,
  denoJsonc,
  denoWorkflow,
  depsTs,
  devDepsTs,
  license,
  readme,
  rootModTs,
  srcConstants,
  srcExceptionModTs,
  srcInternalsConstantsTs,
  srcModTs,
  srcTypesEnumsTs,
  srcTypesInterfacesTs,
  srcTypesModTs,
  srcTypesTypesTs,
  srcVersionTs,
} from '../files/mod.ts';

import type { PackageProps } from '../types/mod.ts';

const FILE_MAP = {
  'src/_internals/constants.ts': srcInternalsConstantsTs,
  'src/exceptions/mod.ts': srcExceptionModTs,
  'src/mod.ts': srcModTs,
  'src/constants.ts': srcConstants,
  'src/types/enums.ts': srcTypesEnumsTs,
  'src/types/interfaces.ts': srcTypesInterfacesTs,
  'src/types/types.ts': srcTypesTypesTs,
  'src/types/mod.ts': srcTypesModTs,
  'src/version.ts': srcVersionTs,
  'deps.ts': depsTs,
  'dev_deps.ts': devDepsTs,
  'mod.ts': rootModTs,
  'LICENSE': license,
  'README.md': readme,
  'CONTRIBUTING.md': contributing,
  '.github/workflows/deno.yml': denoWorkflow,
};

const PERMISSIONS: Deno.PermissionDescriptor[] = [
  {
    name: 'read',
    path: './',
  },
  {
    name: 'write',
    path: './',
  },
  {
    name: 'run',
    command: 'git',
  },
];

/** Initializes a repo with the sgmt repo scaffold. */
export async function initRepoTask(
  testing = false,
  logLevel = 3,
): Promise<void> {
  const cli = new Cli('INIT', {
    logLevel: logLevel,
    rgb24Color: 0x156AFF,
    displayName: 'project scaffolding',
  });

  cli.printBanner();
  cli.describe('sgmt repo scaffolding tool.');

  const permissionsAccepted = await requestPermissions(PERMISSIONS);

  if (!permissionsAccepted) {
    cli.error('Permissions denied.');

    Deno.exit(10);
  } else {
    cli.info('Permissions accepted.');
  }

  const root = testing ? './repo-test' : '.';

  cli.debug(`Root directory: ${root}`);
  cli.log(`Scaffolding in directory ./${root} (${Deno.cwd()}\\${root})`);

  const [org, repo] = await getRepoDetails();

  let config = await readDenoConfig(root);

  const json = denoJsonc({
    pkg: {
      description: '',
      name: repo,
      status: 'unstable',
      version: '0.0.1',
    },
    meta: {
      date: new Date().toISOString(),
      year: (new Date().getFullYear()).toString(),
    },
  });

  const parsedJson = JSON.parse(json);

  if (!Object.keys(config).length) {
    config = parsedJson;
  } else {
    config = { ...parsedJson, ...config };
  }

  cli.debug(`Repo: ${org}/${repo}`);

  config.name = cli.promptDefault('Project name', config.name || repo);
  config.description = cli.promptDefault(
    'Project description',
    config.description || '',
  );
  config.version = cli.promptDefault(
    'Project version',
    config.version || '0.0.1',
  );

  const stable = cli.promptYesNo('Is this a stable release?');
  const deprecated = cli.promptYesNo('Is this release deprecated?');

  config.status = stable ? 'stable' : deprecated ? 'deprecated' : 'unstable';

  const pkgProps: PackageProps = {
    pkg: {
      description: config.description,
      name: config.name,
      status: config.status,
      version: config.version,
    },
    meta: {
      date: new Date().toISOString(),
      year: new Date().getFullYear().toString(),
    },
  };

  cli.debug(`Config: ${JSON.stringify(config)}`);

  if (!(await exists(root))) {
    await Deno.mkdir(root);
    cli.debug(`Created directory ${root}`);
  }

  await writeDenoConfig(root, config);

  const folders = [
    'src',
    'src/_internals',
    'src/exceptions',
    'src/types',
    'tests',
    'tests/fixtures',
    '.github',
    '.github/workflows',
  ];

  for (const folder of folders) {
    if (!(await exists(`${root}/${folder}`))) {
      await Deno.mkdir(`${root}/${folder}`);

      cli.debug(`Created directory ${root}/${folder}`);
    }
  }

  for (const [file, template] of Object.entries(FILE_MAP)) {
    if (!(await exists(`${root}/${file}`))) {
      await Deno.writeTextFile(
        `${root}/${file}`,
        template(pkgProps).replace(/\&grave;/g, '`'),
      );

      cli.debug(`Created file ${root}/${file}`);
    }
  }

  cli.done('Scaffolding complete.');
}
