#!/usr/bin/env bash

d:
  pnpm dev

c:
  pnpm check

f:
  pnpm prettier --write .

s:
  pnpm astro sync

b:
  pnpm build

p:
  pnpm preview

# paraglide-compile
pc:
  pnpm run paraglide-compile
