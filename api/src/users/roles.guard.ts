import {
    Injectable,
    CanActivate,
    ExecutionContext,
    ForbiddenException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
      if (!requiredRoles) {
        return true; // No roles defined means no role-based restriction
      }
  
      const request = context.switchToHttp().getRequest();
      const user = request.user;
  
      const hasRole = requiredRoles.some((role) => user.role === role);
      if (!hasRole) {
        throw new ForbiddenException("You don't have permission to access this resource.");
      }
  
      return true;
    }
  }
  