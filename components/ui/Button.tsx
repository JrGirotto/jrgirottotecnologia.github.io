import * as React from 'react';
import { cn } from '@/lib/utils';
export function Button({ className, ...props }: React.ComponentProps<'button'>) {
  return <button className={cn('btn btn-primary', className)} {...props} />;
}
export function ButtonOutline({ className, ...props }: React.ComponentProps<'button'>) {
  return <button className={cn('btn btn-ghost', className)} {...props} />;
}
