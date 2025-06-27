import { SetMetadata } from "@nestjs/common"

export const PERMISSION_KEY = 'Permissions'
export const Permissions = (...Permissions: string[]) => SetMetadata(PERMISSION_KEY, Permissions)