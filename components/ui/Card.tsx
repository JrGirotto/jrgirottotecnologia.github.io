import * as React from 'react';
import { cn } from '@/lib/utils';
export function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('card', className)} {...props} />;
}
export function CardBody({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('card-body', className)} {...props} />;
}
export function CardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return <h3 className={cn('card-title', className)} {...props} />;
}
export function CardSub({ className, ...props }: React.ComponentProps<'p'>) {
  return <p className={cn('card-sub', className)} {...props} />;
}
