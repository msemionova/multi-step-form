git fetch
git checkout origin/figma -- tokens/tokens.json
yarn transform-tokens
yarn build-tokens
rm -r -f tokens
