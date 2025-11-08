#!/usr/bin/env bash

d:
  pnpm dev

c:
  pnpm check

f:
  pnpx prettier --write .

s:
  pnpx astro sync

b:
  pnpm build

p:
  pnpm preview

# paraglide-compile
pc:
  pnpm run paraglide-compile
