/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Permission as PrismaPermission } from "@prisma/client";

export class PermissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PermissionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.permission.count(args);
  }

  async permissions<T extends Prisma.PermissionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PermissionFindManyArgs>
  ): Promise<PrismaPermission[]> {
    return this.prisma.permission.findMany<Prisma.PermissionFindManyArgs>(args);
  }
  async permission<T extends Prisma.PermissionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PermissionFindUniqueArgs>
  ): Promise<PrismaPermission | null> {
    return this.prisma.permission.findUnique(args);
  }
  async createPermission<T extends Prisma.PermissionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PermissionCreateArgs>
  ): Promise<PrismaPermission> {
    return this.prisma.permission.create<T>(args);
  }
  async updatePermission<T extends Prisma.PermissionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PermissionUpdateArgs>
  ): Promise<PrismaPermission> {
    return this.prisma.permission.update<T>(args);
  }
  async deletePermission<T extends Prisma.PermissionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PermissionDeleteArgs>
  ): Promise<PrismaPermission> {
    return this.prisma.permission.delete(args);
  }
}
