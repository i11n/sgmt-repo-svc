/**
 * This file exports the requestPermissions function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/** Checks for a required `permission`, requesting it if not already granted. */
async function requestPermission(
  permission: Deno.PermissionDescriptor,
): Promise<boolean> {
  const status = await Deno.permissions.query(permission);

  if (status.state === 'granted') {
    return true;
  } else {
    const reqStatus = await Deno.permissions.request(permission);

    return reqStatus.state === 'granted';
  }
}

/** Checks for required `permissions`, requesting those that are not already granted. */
export async function requestPermissions(
  permissions: Deno.PermissionDescriptor[],
): Promise<boolean> {
  let allGranted = true;

  for (const permission of permissions) {
    const granted = await requestPermission(permission);

    if (!granted) {
      allGranted = false;

      break;
    }
  }

  return allGranted;
}
