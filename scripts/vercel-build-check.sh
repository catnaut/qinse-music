#!/bin/bash

echo "VERCEL_GIT_COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"

# 检查 commit 消息是否包含 [skip ci]
if echo "$VERCEL_GIT_COMMIT_MESSAGE" | grep -q '\[skip ci\]'; then
  echo "🛑 - Build cancelled due to [skip ci] commit message"
  exit 0
fi

# 检查是否只修改了 docs 目录
if ! git diff-tree --no-commit-id --name-only -r "$VERCEL_GIT_COMMIT_SHA" | grep -qv "^docs/"; then
  echo "🛑 - Build cancelled as only docs/ was modified"
  exit 0
fi

# 如果既不包含 [skip ci] 也没有只修改 docs 目录,则进行部署
echo "✅ - Build can proceed"
exit 1
