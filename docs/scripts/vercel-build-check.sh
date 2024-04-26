#!/bin/bash

echo "VERCEL_GIT_COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"

# 检查 commit 消息是否包含 [skip ci]
if echo "$VERCEL_GIT_COMMIT_MESSAGE" | grep -q '\[skip ci\]'; then
  echo "🛑 - Build cancelled due to [skip ci] commit message"
  exit 0
fi

# 检查是否只修改了 docs 目录,如果是则进行部署
if ! git diff --quiet "$VERCEL_GIT_COMMIT_SHA" -- "docs/"; then
  echo "✅ - Build can proceed"
  exit 1
fi

# 如果没有修改了 docs 目录,则取消部署
echo "🛑 - Build cancelled as  docs/ wasn't modified"
exit 0
